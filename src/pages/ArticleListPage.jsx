import Button from "../components/Button";
import ArticleList from "../components/ArticleList";
import articles from "../assets/article-content.js";

const ArticleListPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[30px] border border-[#7b5a3c]/20 bg-[#fffaf7] shadow-[0_24px_60px_rgba(74,47,27,0.08)]">
        <div className="border-b border-[#7b5a3c]/10 px-6 py-8 sm:px-8 lg:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b745e]">
            Articles
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-[#4a2f1b] sm:text-4xl">
                Featured articles in a simple card grid
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b563f] sm:text-base">
                A clean wireframe section for article thumbnails, titles, short
                descriptions, and one clear action per card.
              </p>
            </div>

            <div>
              <Button to="/" variant="secondary">
                Back Home
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-8 lg:px-10">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b745e]">
              Featured Articles
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#4a2f1b]">
              Article card grid
            </h2>
          </div>

          <ArticleList articles={articles} />
        </div>
      </section>
    </div>
  );
};

export default ArticleListPage;
