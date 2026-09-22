export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header>
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-intro">{subtitle}</p>}
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="text-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
