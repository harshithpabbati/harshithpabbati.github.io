const links = [
  {
    name: "Email",
    url: "mailto:pabbatiharshith@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshithpabbati/",
  },
  {
    name: "Github",
    url: "https://github.com/harshithpabbati",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harshithpabbati",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
  },
];

export function Links() {
  return (
    <section className="prose prose-neutral dark:prose-invert items-center flex gap-2">
      {links.map((link) => (
        <a key={link.name} href={link.url}>
          {link.name}
        </a>
      ))}
    </section>
  );
}
