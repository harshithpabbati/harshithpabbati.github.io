import { Role } from "./Role";

const experience = [
  {
    title: "Solutions Engineer",
    company: {
      name: "Daily",
      url: "https://daily.co",
    },
    fromDate: "Nov 2021",
    toDate: "Present",
    bullets: [
      "Developed an internal tool with AI capabilities for meeting management, featuring automated transcription and intent-based summarization, enhancing team productivity and collaboration.",
      "Led Proof of Concept (PoC) demonstrations, effectively illustrating the value of our solutions to prospective customers, leading to successful customer acquisition and engagement.",
      "Provided expert-level technical support, resolving customer inquiries and challenges, and ensuring seamless integration of our products.",
      "Demonstrated proficiency in solution architecture and AI integration, contributing to the development of innovative technical solutions.",
      "Collaborated with a cross-functional team to build a test bench application for daily comparisons with competitors, facilitating data-driven decision-making and competitive analysis.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: {
      name: "Whitebrick",
      url: "https://whitebrick.com/",
    },
    fromDate: "May 2021",
    toDate: "Nov 2021",
    bullets: [
      "I played a pivotal role in designing and developing various components of our web applications, ensuring they met high-quality standards and user expectations.",
      "I specialized in creating and optimizing landing page sections to enhance the user experience and engagement on our websites.",
      "I successfully integrated our applications with the backend systems, enabling smooth data flow and functionality for our users.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: {
      name: "Tayfa",
      url: "https://usetayfa.com/",
    },
    fromDate: "Nov 2020",
    toDate: "Dec 2020",
    bullets: [
      "I took charge of designing and developing various layouts and components for web pages, ensuring an engaging and user-friendly interface.",
      "I played a crucial role in developing APIs, facilitating seamless data exchange and integration between our web applications and backend systems.",
      "I successfully implemented a version history feature for the layouts, allowing for better management and tracking of changes for customers",
    ],
  },
  {
    title: "Student Developer",
    company: {
      name: "GraphQL Foundation",
      url: "https://graphql.org/",
    },
    fromDate: "Jul 2020",
    toDate: "Oct 2020",
    bullets: [
      "I was working on expanding the capabilities of GraphiQL by adding support for a plugin system. This enhancement allowed for greater customization and extensibility, making GraphiQL a more versatile tool.",
      "In response to a newly redesigned layout, I developed and integrated new React components. These components seamlessly blended with the updated design, enhancing the overall user experience and functionality of our applications.",
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
