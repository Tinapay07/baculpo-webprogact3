import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#4a2f1b]/15 bg-[#f4e0c6] text-[#4a2f1b]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7b745e]">
              Cookie Notes
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#4a2f1b]">
              Warm flavors, reusable components, and sweet browsing.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b563f]">
              This footer wraps the site in a cookie-themed palette, with hints
              of s'mores, matcha, and biscoff written into the navigation and
              page tone.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6d6459]">
              Quick links
            </p>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-[#181716]">
              <Link to="/" className="transition hover:text-[#c49a6c]">
                Home
              </Link>
              <Link to="/about" className="transition hover:text-[#c49a6c]">
                About
              </Link>
              <Link to="/articles" className="transition hover:text-[#c49a6c]">
                Articles
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6d6459]">
              Stay in touch
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#4d473f]">
              Try each page as a stand-alone section: article list, article
              detail, and a friendly 404 page for routes that do not exist.
            </p>
            <div className="mt-6 rounded-3xl border border-[#4a2f1b]/15 bg-[#f7e7d0] p-4 text-sm text-[#6b563f]">
              Email:{" "}
              <span className="font-semibold text-[#4a2f1b]">
                hello@cookieatelier.dev
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#4a2f1b]/15 pt-6 text-sm text-[#6b563f] sm:flex sm:items-center sm:justify-between">
          <p>
            Built like a bakery: consistent, flavorful, and easy to revisit.
          </p>
          <p>&copy; {new Date().getFullYear()} Cookie Atelier.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
