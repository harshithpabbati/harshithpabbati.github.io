import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Making DataChannels a First-Class Citizen",
  description:
    "Work on the Cloudflare Realtime SFU: native SCTP routing between SFUs, fragment passthrough through pion/sctp, subscriber acknowledgment, bidirectional DataChannels, and end-to-end delivery settings.",
};

export default function CloudflareSfuPage() {
  return (
    <section>
      <Link
        href="/"
        className="text-sm text-neutral-500 dark:text-neutral-400 underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em]"
      >
        Home
      </Link>
      <article className="prose prose-neutral dark:prose-invert mt-4">
        <h1>Making DataChannels a First-Class Citizen</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Cloudflare Realtime SFU · 2026
        </p>

        <p>
          I worked on the Realtime team&rsquo;s SFU, primarily around WebRTC
          DataChannels and the SCTP stack.
        </p>

        <h2>Problem</h2>
        <p>
          DataChannels crossing Cloudflare SFU locations had limitations in how
          their reliability semantics were preserved. Large SCTP messages also
          paid a reassembly and fragmentation cost at intermediate SFUs. The
          goal was to make DataChannels behave more like a first-class
          transport across the SFU network.
        </p>

        <h2>Subscriber Acknowledgment</h2>
        <p>
          Customers were losing messages when subscribers joined after the
          publisher had already started sending. The first N messages would
          arrive at the SFU before the subscriber was ready to handle them, and
          with no way to buffer, they were dropped.
        </p>
        <p>
          Added an opt-in subscriber acknowledgment gate for DataChannels. When
          a subscriber pulls a remote DataChannel with{" "}
          <code>waitForAck: true</code>, the SFU holds delivery to that
          subscriber until it sends its first message (the acknowledgment).
        </p>
        <ul>
          <li>
            <code>waitForAck</code> applies only to{" "}
            <code>location: &quot;remote&quot;</code> DataChannels and defaults
            to <code>false</code>.
          </li>
          <li>
            While the gate is closed, the SFU buffers messages for that
            subscriber.
          </li>
          <li>
            The acknowledgment is consumed by the SFU and is not forwarded, so
            the channel stays unidirectional.
          </li>
          <li>
            The acknowledgment must reach the SFU within 30 seconds of creating
            the remote DataChannel. Otherwise, the SFU tears down the gated
            channel. Create the remote DataChannel again to retry.
          </li>
        </ul>
        <p>
          This avoids losing the first messages before the subscriber is ready
          to handle them, which is common when the subscriber needs to
          initialize state after the DataChannel is created.
        </p>

        <h2>Bidirectional DataChannels</h2>
        <p>
          Added bidirectional DataChannel routing with{" "}
          <code>canReply</code>, allowing a subscriber to send messages back to
          the publisher over the same channel instead of establishing a second
          connection.
        </p>
        <ul>
          <li>
            <code>canReply</code> applies only to{" "}
            <code>location: &quot;remote&quot;</code> DataChannels and defaults
            to <code>false</code>, so existing publisher-to-subscriber fan-out
            is unchanged.
          </li>
          <li>
            At most one subscriber can hold <code>canReply</code> for each
            publisher DataChannel. Granting access to another subscriber
            replaces the previous holder.
          </li>
          <li>
            Reverse traffic is routed only to the publisher and is not fanned
            out to other subscribers.
          </li>
          <li>
            Grant or revoke reply access via{" "}
            <code>PUT .../datachannels/update</code> without re-pulling the
            channel.
          </li>
        </ul>
        <p>
          <code>canReply</code> can be combined with{" "}
          <code>waitForAck</code>. The subscriber&rsquo;s first message opens
          the acknowledgment gate and is not forwarded. Later subscriber
          messages are forwarded to the publisher while that subscriber has
          reply access.
        </p>
        <p>
          This enables use cases like AI agents, remote control, and tool
          calling, where a subscriber needs to respond to the publisher on the
          same channel.
        </p>

        <h2>Reliability Settings</h2>
        <p>
          Added support for native SCTP routing between SFUs so DataChannels
          could preserve their reliability semantics across the network.
          Previously the inter-SFU path was TCP-based; routing over native SCTP
          avoids head-of-line blocking for unordered traffic.
        </p>
        <p>The implementation supports three modes:</p>
        <ul>
          <li>
            <strong>Reliable-Ordered</strong> — the expected ordered/reliable
            behavior.
          </li>
          <li>
            <strong>Reliable-Unordered</strong> — avoids unnecessary
            head-of-line blocking for messages that do not depend on one
            another.
          </li>
          <li>
            <strong>Unreliable-Unordered</strong> — can drop expired data
            instead of retransmitting stale information, prioritizing latency
            and freshness.
          </li>
        </ul>

        <p>
          On top of the internal routing, DataChannels now accept delivery
          settings on both publisher (<code>location: &quot;local&quot;</code>)
          and subscriber (
          <code>location: &quot;remote&quot;</code>) channels, so unreliable
          and unordered delivery is honored end to end.
        </p>
        <ul>
          <li>
            <code>ordered</code> (default <code>true</code>) controls in-order
            delivery. When <code>false</code>, a delayed message does not block
            later messages.
          </li>
          <li>
            <code>maxRetransmits</code> limits retransmission attempts after
            the first send. Set to <code>0</code> for no retransmissions, or
            omit for no retransmission limit.
          </li>
          <li>
            <code>maxPacketLifeTime</code> limits how long, in milliseconds,
            the transport attempts delivery. Omit for no lifetime limit.
          </li>
        </ul>
        <p>
          <code>maxRetransmits</code> and <code>maxPacketLifeTime</code> are
          mutually exclusive. Set at most one per channel. Omit both for
          reliable delivery, whether ordered or unordered.
        </p>
        <p>
          Choose the policy that matches how long your payload remains useful:
        </p>
        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Settings</th>
              <th>Use when</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reliable, ordered delivery (default)</td>
              <td>
                Omit <code>ordered</code>, <code>maxRetransmits</code>, and{" "}
                <code>maxPacketLifeTime</code>
              </td>
              <td>
                Messages remain useful and must arrive in order
              </td>
            </tr>
            <tr>
              <td>Reliable, unordered delivery</td>
              <td>
                Set <code>ordered: false</code>; omit both retry fields
              </td>
              <td>
                Messages remain useful, but later messages should not wait for
                earlier messages
              </td>
            </tr>
            <tr>
              <td>No retries or ordering</td>
              <td>
                Set <code>ordered: false</code> and{" "}
                <code>maxRetransmits: 0</code>
              </td>
              <td>
                The application tolerates message loss and discards out-of-date
                updates
              </td>
            </tr>
            <tr>
              <td>Limited retries</td>
              <td>
                Set <code>maxRetransmits: &lt;COUNT&gt;</code>
              </td>
              <td>
                Brief recovery is useful, but repeated retries are not
              </td>
            </tr>
            <tr>
              <td>Time-bounded delivery</td>
              <td>
                Set <code>maxPacketLifeTime: &lt;MILLISECONDS&gt;</code>
              </td>
              <td>
                A message loses value after a known time window
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Apply the same settings when the publisher creates the local channel,
          each subscriber pulls the remote channel, and each client calls{" "}
          <code>createDataChannel()</code>. Realtime DataChannels use negotiated
          IDs, so the browser does not receive delivery settings from the remote
          peer.
        </p>

        <h2>Fragment Passthrough</h2>
        <p>
          Built a fragment passthrough path through pion/sctp so large
          DataChannel messages could pass through intermediate SFUs without
          being fully reassembled and fragmented again at every hop.
        </p>
        <p>
          Previously, every intermediate SFU reassembled the complete message
          and then fragmented it again before forwarding it. With passthrough,
          fragments travel through intermediate SFUs intact, with reassembly
          deferred to the egress side.
        </p>
        <p>
          Performance evaluation on a 150 Mbps link, median from 10 runs,
          compared standard SCTP against the passthrough path:
        </p>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Standard SCTP</th>
              <th>Fragment passthrough</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Median throughput</td>
              <td>71.5 Mbps</td>
              <td>91.9 Mbps</td>
              <td>+29.0%</td>
            </tr>
            <tr>
              <td>RTT p50</td>
              <td>48.0 ms</td>
              <td>47.3 ms</td>
              <td>Parity / slightly better</td>
            </tr>
            <tr>
              <td>RTT p99</td>
              <td>69.9 ms</td>
              <td>62.0 ms</td>
              <td>-11.3%</td>
            </tr>
            <tr>
              <td>Jitter</td>
              <td>3.4 ms</td>
              <td>2.8 ms</td>
              <td>-17.6%</td>
            </tr>
            <tr>
              <td>Lost / Out-of-Order</td>
              <td>0 / 0</td>
              <td>0 / 0</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h2>Takeaway</h2>
        <p>
          The work focused on making DataChannels a more capable transport
          across the SFU network, while reducing unnecessary work at
          intermediate hops and opening up bidirectional communication
          patterns.
        </p>
      </article>
    </section>
  );
}
