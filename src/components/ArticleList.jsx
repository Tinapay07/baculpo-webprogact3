import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-[28px] border border-[#7b5a3c]/15 bg-[#fff8f0] p-5 shadow-[0_18px_40px_rgba(74,47,27,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(74,47,27,0.12)]"
        >
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-[#e7ded1]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7b745e]">
            Article {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-[#4a2f1b]">
            {article.title}
          </h3>
          <p className="mt-3 min-h-[5rem] text-sm leading-6 text-[#6b563f]">
            {article.summary}
          </p>
          <Link to={`/articles/${article.name}`}>
            <Button className="mt-5" variant="secondary">
              Read More
            </Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
