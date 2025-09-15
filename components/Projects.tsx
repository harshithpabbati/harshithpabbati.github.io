import { Project } from "./Project";
import { Role } from "./Role";

const projects = [
  {
    title: "Daily Studio - Multiplayer OBS-in-the-browser",
    url: "https://github.com/daily-solutions/daily-studio/",
    bullets: [
      "Architected and developed a scalable, browser-based live streaming studio supporting up to 100k concurrent viewers with <200ms latency, featuring multi-platform streaming and real-time \"bring-to-stage\" interactions with role management.",
      "Built a customizable drag-and-drop video layout system and audience engagement platform, including live chat, viewer analytics, remote media playbook, across browsers and platforms, supporting 100K+ concurrent users per room.",
      "Integrated Daily's Interactive Live Streaming (ILS) and Video Component System (VCS) APIs with Next.js.",
    ],
  },
  {
    title: "amFOSS CMS - Club Management System",
    url: "https://github.com/amfoss/cms",
    bullets: [
      "Led the design and development of amfoss/cms using Django, GraphQL, and React, serving 50+ active community members with automated attendance tracking, status updates, and event RSVPs, reducing overhead by 75%.",
      "Architected and implemented robust API integrations with GitHub, GitLab, Cloudflare, and Telegram, enabling seamless account management, automating daily workflow processes, and centralizing club operations with 99.9% uptime.",
    ],
  },
];

export function Projects() {
  return (
    <section className="mt-8">
      <h1 className="font-semibold text-2xl tracking-tighter">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        {projects.map((role) => (
          <Project key={role.title} {...role} />
        ))}
      </div>
    </section>
  );
}
