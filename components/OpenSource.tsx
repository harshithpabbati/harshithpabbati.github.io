import { Role } from "./Role";

const openSource = [
  {
    title: "Linux Foundation Mentorship",
    company: {
      name: "GraphQL Foundation",
      url: "https://graphql.org/",
    },
    fromDate: "Jul 2020",
    toDate: "Oct 2020",
    bullets: [
      "Worked on GraphiQL through the Linux Foundation Mentorship program, primarily on its plugin system and UI architecture.",
      "Built parts of the redesigned interface in React and worked on making GraphiQL more extensible through plugins.",
    ],
  },
  {
    title: "Club Management Platform",
    company: {
      name: "amFOSS",
      url: "https://github.com/amfoss/cms",
    },
    bullets: [
      "Club management platform built for amFOSS to centralize member operations, projects, attendance, events, and reporting.",
      "Built with Django, GraphQL, and React, with integrations across GitHub, GitLab, Cloudflare, and Telegram.",
    ],
  },
];

export function OpenSource() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">
        Open Source
      </h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        {openSource.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
