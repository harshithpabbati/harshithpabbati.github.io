import { Links } from "./Links";

export function Intro() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">
        Harshith Pabbati
      </h1>
      <p className="font-semibold text-lg tracking-tight mt-2">
        Software engineer building realtime systems and products.
      </p>
      <Links />
    </section>
  );
}
