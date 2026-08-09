interface Metric {
  value: string;
  label: string;
}

interface ProjectProps {
  title: string;
  subtitle?: string;
  url: string;
  description?: string;
  metrics?: Metric[];
}

export function Project({
  title,
  subtitle,
  url,
  description,
  metrics,
}: ProjectProps) {
  return (
    <div>
      <h3 className="tracking-tighter my-0">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      {subtitle && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 my-0">
          {subtitle}
        </p>
      )}
      {description && <p className="mt-2 mb-0">{description}</p>}
      {metrics && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
          {metrics.map((metric, i) => (
            <span key={metric.label}>
              {i > 0 && <span> · </span>}
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {metric.value}
              </span>{" "}
              {metric.label}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
