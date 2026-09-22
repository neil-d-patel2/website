import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Blog', to: '/blog', matches: ['/blog'] },
  { label: 'Research', to: '/research', matches: ['/research'] },
];

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neil-patel-b6724038b/' },
  { label: 'GitHub', href: 'https://github.com/neil-d-patel2' },
  { label: 'neildrp5@gmail.com', href: 'mailto:neildrp5@gmail.com' },
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
      <div className="contact-links" aria-label="Contact links">
        {contactLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
