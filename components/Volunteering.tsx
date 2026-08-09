const volunteering = [
  {
    title: "Google Summer of Code",
    text: "Mentored a contributor working on Public Lab's Image Sequencer, helping with codebase navigation, implementation decisions, reviews, and project planning.",
  },
  {
    title: "Google Code-in",
    text: "Mentored student contributors working on Public Lab's open-source Image Sequencer project.",
  },
];

export function Volunteering() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">
        Volunteering
      </h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        {volunteering.map((item) => (
          <div key={item.title}>
            <h3 className="tracking-tighter my-0">{item.title}</h3>
            <p className="mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
