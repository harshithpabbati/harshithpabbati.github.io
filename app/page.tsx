import { Experience } from "components/Experience";
import { Freelance } from "components/Freelance";
import { Intro } from "components/Intro";
import { Projects } from "components/Projects";

export default function Page() {
  return (
    <section>
      <Intro />
      <Experience />
      <Projects />
      <Freelance />
    </section>
  );
}
