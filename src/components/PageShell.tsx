type PageShellProps = {
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main>
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      <div className="page-content">{children}</div>
    </main>
  );
}
