import { Links } from "./Links";

export function Intro() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">
        Hi, I am Harshith Pabbati
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        Solutions Engineer at <a href="https://daily.co">Daily</a>
      </p>
      <Links />

      <p className="prose prose-neutral dark:prose-invert">
        A full-stack engineer building scalable, performant, and intuitive web
        apps. With over 5 years of experience in designing, developing, and
        deploying web applications in NextJS, ReactJS, Django, GraphQL, Node,
        and Express, I enjoy both the complexity of solving hard problems and
        the simplicity of building clean interfaces.
      </p>
      <p className="prose prose-neutral dark:prose-invert mt-2">
        A quick learner who can swiftly adapt to a project’s needs, I’m a team
        player who thrives in a tightly-knit team to collaborate and help lead
        efforts to create products that are loved.
      </p>
    </section>
  );
}
