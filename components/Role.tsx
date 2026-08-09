import Link from "next/link";

interface RoleProps {
  title: string;
  company: {
    name: string;
    url: string;
  };
  fromDate?: string;
  toDate?: string;
  description?: string;
  bullets?: string[];
  link?: {
    label: string;
    href: string;
  };
}

export function Role({
  title,
  company,
  fromDate,
  toDate,
  description,
  bullets,
  link,
}: RoleProps) {
  const period = [fromDate, toDate].filter(Boolean).join(" - ");
  return (
    <div>
      <h3 className="tracking-tighter my-0">{title}</h3>
      <p className="prose prose-neutral dark:prose-invert my-0">
        <a href={company.url}>{company.name}</a>
        {period && <span> ({period})</span>}
      </p>
      {description && (
        <p className="prose prose-neutral dark:prose-invert mt-2 mb-0">{description}</p>
      )}
      {bullets && (
        <ul className="mt-0">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {link && (
        <p>
          <Link href={link.href}>{link.label}</Link>
        </p>
      )}
    </div>
  );
}
