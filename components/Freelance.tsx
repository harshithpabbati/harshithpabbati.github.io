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
      "Built components for Whitebrick's web applications, including landing page sections.",
      "Integrated the applications with backend systems.",
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
      "Built layouts and components for Tayfa's web product.",
      "Worked on the APIs powering data exchange and integration between the app and backend systems.",
      "Implemented a version history feature for layouts, letting customers track and manage changes.",
    ],
  },
];

export function Freelance() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">Freelance</h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        {freelance.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
