import { Role } from "./Role";

const experience = [
  {
    title: "Software Engineer",
    company: {
      name: "Aragon.ai",
      url: "https://aragon.ai",
    },
    fromDate: "Jun 2024",
    toDate: "Jul 2025",
    bullets: [
      "Led the development of cross-platform React Native application for Aragon.ai, delivering a comprehensive mobile platform with AI-driven headshot generation, advanced image editing tools, and user-friendly interface design.",
      "Optimized core web vitals and page performance metrics by 50%, improving user experience and SEO rankings through implementation of performance optimization techniques including code splitting, lazy loading, and caching strategies.",
      "Spearheaded a comprehensive strategic data-driven redesign of five high-converting landing pages, incorporating A/B testing; achieved a 20% increase in conversion rates within the first quarter, directly boosting user acquisition.",
      "Revamped the user onboarding process by streamlining the back-end infrastructure and optimizing database queries, resulting in reducing average page load times by 60% and improving user satisfaction scores by 35%.",
      "Built comprehensive analytics dashboard for subscription and product KPIs, enabling real-time monitoring and data-driven decision making for business metrics, resulting in improved operational efficiency and strategic planning.",
    ],
  },
  {
    title: "Solutions Engineer",
    company: {
      name: "Daily.co",
      url: "https://daily.co",
    },
    fromDate: "Nov 2021",
    toDate: "May 2024",
    bullets: [
      "Pioneered the first comprehensive developer-facing showcase for Daily's Interactive Live Streaming APIs using React/Next.js, creating reusable demo applications that directly accelerated customer product launches.",
      "Developed internal meetings tool with Daily's APIs featuring AI summaries, sentiment analysis, and talk-time metrics. The tool became indispensable in customer-facing teams with 1500+ meetings hosted as serves as flagship example.",
      "Spearheaded expert-level technical support and led tailored Proof-of-Concept (PoC) demonstrations to showcase Daily's API capabilities across diverse use cases, directly contributing to customer acquisition and sustained engagement.",
      "Collaborated on building a comprehensive test bench application to compare Daily's performance against key competitors, enabling data-driven decision-making processes and optimization strategies.",
    ],
  },
  {
    title: "Student Developer (LFX Mentorship Program)",
    company: {
      name: "GraphQL Foundation",
      url: "https://graphql.org/",
    },
    fromDate: "Jul 2020",
    toDate: "Oct 2020",
    bullets: [
      "Collaborated on expanding the capabilities of GraphiQL by introducing a plugin system. This enhancement allowed for greater customization, extensibility and GraphiQL enhancement, improving the developer experience.",
      "Implemented a redesigned layout by building custom React components to enhance user interface functionality.",
    ],
  },
];

export function Experience() {
  return (
    <section className="mt-8">
      <h1 className="font-semibold text-2xl tracking-tighter">Experience</h1>
      <div className="prose prose-neutral dark:prose-invert">
        {experience.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
