import { Role } from "./Role";

const experience = [
  {
    title: "Software Engineer Intern, Realtime",
    company: {
      name: "Cloudflare",
      url: "https://cloudflare.com",
    },
    fromDate: "2026",
    description:
      "Worked on the Realtime team's SFU, primarily around WebRTC DataChannels and the SCTP stack.",
    bullets: [
      "Added native SCTP routing between SFUs, enabling reliable-ordered, reliable-unordered, and unreliable-unordered DataChannel delivery end to end.",
      "Built fragment passthrough through pion/sctp, avoiding message reassembly at intermediate SFUs. Testing showed 29% higher median throughput, 17.6% lower jitter, and 11.3% lower p99 RTT.",
      "Added bidirectional DataChannels, allowing subscribers to reply to publishers over the same channel and enabling patterns like AI agents, remote control, and tool calls.",
    ],
    link: {
      label: "Read the case study →",
      href: "/work/cloudflare-sfu",
    },
  },
  {
    title: "Software Engineer",
    company: {
      name: "Aragon.ai",
      url: "https://aragon.ai",
    },
    fromDate: "Jun 2024",
    toDate: "Jul 2025",
    description:
      "Worked across Aragon's web and mobile products for AI-powered headshot generation and image editing.",
    bullets: [
      "Led development of a cross-platform React Native application, bringing Aragon's AI image generation and editing workflows to mobile.",
      "Improved web performance by 50%, reducing LCP from 20s to 2.1s, FCP from 4s to 0.4s, and CLS from 0.20 to 0.03 through code splitting, lazy loading, and caching.",
      "Redesigned five high-converting landing pages using A/B testing, increasing conversion rates by 20%.",
    ],
  },
  {
    title: "Software Engineer",
    company: {
      name: "Daily.co",
      url: "https://daily.co",
    },
    fromDate: "Nov 2021",
    toDate: "May 2024",
    description:
      "Worked on Daily's realtime video platform, building WebRTC applications, developer tooling, and customer integrations.",
    bullets: [
      "Built developer-facing demos for Daily's Interactive Live Streaming APIs using React and Next.js, giving customers production-like examples for integrating realtime video.",
      "Built an internal meeting intelligence tool with AI summaries, sentiment analysis, and talk-time metrics. The tool was used across 1,500+ meetings and became a flagship example for customer-facing teams.",
      "Worked directly with customers on WebRTC integrations and Proof-of-Concepts, helping debug difficult realtime problems and feeding API and developer-experience issues back into the product team.",
    ],
  },
];

export function Experience() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">Experience</h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        {experience.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
