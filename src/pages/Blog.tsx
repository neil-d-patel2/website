import PageShell from '@/components/PageShell';

// TODO(neil): replace these placeholder posts with your own.
const posts = [
  {
    title: 'Notes on building agents that do not surprise you',
    date: 'June 2026',
    blurb:
      'Most agent failures are not reasoning failures. They are scope failures — the thing did more, or less, than you asked.',
    href: '#',
  },
  {
    title: 'The cost of a good abstraction',
    date: 'April 2026',
    blurb:
      'Every abstraction you add buys leverage and sells clarity. A short argument for keeping the exchange rate visible.',
    href: '#',
  },
  {
    title: 'What I got wrong about evaluation',
    date: 'February 2026',
    blurb:
      'I spent a year measuring the wrong thing carefully. Here is how I noticed, and what I do differently now.',
    href: '#',
  },
];

export default function Blog() {
  return (
    <PageShell title="Blog" intro="Writing about software, machine learning, and the occasional detour.">
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.title}>
            <div className="post-date">{post.date}</div>
            <h2><a href={post.href}>{post.title}</a></h2>
            <p>{post.blurb}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
