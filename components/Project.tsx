interface RoleProps {
  title: string;
  url: string;
  bullets: string[];
}

export function Project({ title, url, bullets }: RoleProps) {
  return (
    <div>
      <h3 className="tracking-tighter"><a href={url}>{title}</a></h3>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
