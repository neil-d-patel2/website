import { Link, useLocation } from 'react-router-dom';

const links = [
  // About lives at the root, but /about resolves to it too.
  { label: 'About', to: '/', matches: ['/', '/about'] },
  { label: 'Blog', to: '/blog', matches: ['/blog'] },
  { label: 'Research', to: '/research', matches: ['/research'] },
  { label: 'Ventures', to: '/ventures', matches: ['/ventures'] },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <Link className="site-name" to="/">
        Neil Patel
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {links.map(({ label, to, matches }) => (
          <Link
            key={label}
            to={to}
            aria-current={matches.includes(pathname) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
