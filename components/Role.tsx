interface RoleProps {
  title: string;
  company: {
    name: string;
    url: string;
  };
  fromDate: string;
  toDate: string;
  bullets: string[];
}

export function Role({ title, company, fromDate, toDate, bullets }: RoleProps) {
  return (
    <div>
      <h3 className="tracking-tighter">{title}</h3>
      <p className="prose prose-neutral dark:prose-invert">
        <a href={company.url}>{company.name}</a> ({fromDate} - {toDate})
      </p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
