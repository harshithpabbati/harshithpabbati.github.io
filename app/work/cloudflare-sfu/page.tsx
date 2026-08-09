import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Making DataChannels a First-Class Citizen",
  description:
    "Work on the Cloudflare Realtime SFU: native SCTP routing between SFUs, fragment passthrough through pion/sctp, and bidirectional DataChannels.",
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
          Performance evaluation compared standard SCTP against the passthrough
          path:
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

        <h2>Bidirectional DataChannels</h2>
        <p>
          Added bidirectional DataChannel routing with canReply, allowing a
          subscriber to send messages back to the publisher over the same
          channel instead of establishing a second connection. The reverse
          traffic is routed only to the publisher and is not fanned out to
          other subscribers.
        </p>
        <p>
          This enables use cases like AI agents, remote control, and tool
          calling.
        </p>

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
