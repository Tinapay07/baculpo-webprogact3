import { useParams } from "react-router-dom";
import Button from "../components/Button";
import articles from "../assets/article-content.js";

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[30px] border border-[#7b5a3c]/20 bg-[#fffaf7] shadow-[0_24px_60px_rgba(74,47,27,0.08)]">
          <div className="border-b border-[#7b5a3c]/10 px-6 py-8 sm:px-8">
            <h1 className="text-3xl font-bold text-[#4a2f1b]">
              Article not found
            </h1>
            <p className="mt-4 text-base text-[#6b563f]">
              The article you're looking for doesn't exist. Please return to the
              article list.
            </p>
            <Button to="/articles" className="mt-6" variant="secondary">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[30px] border border-[#7b5a3c]/20 bg-[#fffaf7] shadow-[0_24px_60px_rgba(74,47,27,0.08)]">
        <div className="border-b border-[#7b5a3c]/10 px-6 py-8 sm:px-8">
          <div className="mb-4">
            <Button to="/articles" variant="secondary">
              Back to Articles
            </Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b745e]">
            Article
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#4a2f1b] sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-[#7b745e]">
            {article.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
      </section>

      <section className="rounded-[30px] border border-[#7b5a3c]/20 bg-[#fffaf7] shadow-[0_24px_60px_rgba(74,47,27,0.08)]">
        <div className="px-6 py-8 sm:px-8">
          <div className="mb-8 flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-[#7b5a3c]/15 bg-[#e7ded1]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="whitespace-pre-wrap text-base leading-7 text-[#6b563f]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-[#7b5a3c]/10 pt-6">
            <Button to="/articles" variant="secondary">
              Back to Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
