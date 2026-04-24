import { NavLink } from 'react-router-dom';
import logoMark from '../assets/logo-mark.svg';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition',
    isActive
      ? 'border-[#181716] bg-[#181716] text-[#f4efe7] shadow-[0_10px_25px_rgba(24,23,22,0.14)]'
      : 'border-[#181716]/15 bg-white/45 text-[#5d564d] hover:border-[#181716] hover:bg-[#fffaf2]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[30px] border border-[#181716] bg-[#fffaf2]/88 px-4 py-4 shadow-[0_20px_60px_rgba(24,23,22,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={logoMark}
                alt="Lineform logo"
                className="h-12 w-12 rounded-2xl border border-[#181716] bg-[#f4efe7] p-1.5"
              />
              <div>
                <p className="brand-heading text-xl font-semibold tracking-[-0.05em] text-[#181716]">
                  Lineform
                </p>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#6d6459]">
                  Editorial Wireframe Studio
                </p>
              </div>
            </NavLink>

            <div className="flex flex-wrap items-center justify-between gap-3 md:justify-end">
              <div className="rounded-full border border-[#181716]/15 bg-[#c49a6c]/15 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#5d564d]">
                Enhancement Ready
              </div>

              <nav className="flex flex-wrap items-center gap-2">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={navLinkClassName}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
