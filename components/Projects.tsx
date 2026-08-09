import { Project } from "./Project";

export function Projects() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">Projects</h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        <Project
          title="Daily Studio"
          subtitle="Multiplayer OBS-in-the-browser"
          url="https://github.com/daily-solutions/daily-studio/"
          description="An OBS-like collaborative livestreaming studio that runs entirely in the browser. Built realtime bring-to-stage interactions, video composition and layouts, audience controls, chat, viewer analytics, and multi-platform streaming on top of Daily's Interactive Live Streaming and Video Component System APIs."
          metrics={[
            { value: "<200ms", label: "realtime interaction latency" },
            { value: "100K+", label: "concurrent viewers" },
          ]}
        />
      </div>
    </section>
  );
}
