import { About } from "components/About";
import { Experience } from "components/Experience";
import { Freelance } from "components/Freelance";
import { Intro } from "components/Intro";
import { OpenSource } from "components/OpenSource";
import { Projects } from "components/Projects";
import { Volunteering } from "components/Volunteering";

export default function Page() {
  return (
    <section>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Volunteering />
      <Freelance />
    </section>
  );
}
