import { Role } from "./Role";

const freelance = [
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
];

export function Freelance() {
  return (
    <section className="mt-8">
      <h1 className="font-semibold text-2xl tracking-tighter">Freelance</h1>
      <div className="prose prose-neutral dark:prose-invert">
        {freelance.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
