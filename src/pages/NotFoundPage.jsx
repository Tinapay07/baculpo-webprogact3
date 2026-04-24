import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-8rem)] max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-[#7b5a3c]/20 bg-[#fff8f2] p-10 shadow-[0_24px_70px_rgba(74,47,27,0.08)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7b745e]">
              404 / Not found
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#4a2f1b] sm:text-5xl">
              Oops — page not found.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b563f]">
              The route you followed may have vanished like a cookie in the jar.
              Use the buttons below to return to the article grid or head back
              to the homepage.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#7b5a3c]/20 bg-[#fff3e7] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b745e]">
              Try again
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-[#7b5a3c] bg-[#7b5a3c] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fffaf2] transition hover:bg-[#61462f]"
              >
                Go home
              </Link>
              <Link
                to="/articles"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-[#7b5a3c] bg-[#fffaf3] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4a2f1b] transition hover:bg-[#f7e7d0]"
              >
                View articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
