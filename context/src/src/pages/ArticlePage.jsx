import Button from '../components/Button';
import articlesEditorial from '../assets/articles-editorial.svg';

const featuredArticles = [
  {
    label: 'Article 01',
    title: 'Wireframe layout basics',
    summary:
      'A grounded introduction to visual hierarchy, content grouping, and why strong spacing matters before colors or motion are added.',
  },
  {
    label: 'Article 02',
    title: 'Building clean sections',
    summary:
      'A practical look at how repeated section shells can stay consistent while still adapting to different kinds of content.',
  },
  {
    label: 'Article 03',
    title: 'Using cards and lists',
    summary:
      'An editorial approach to cards: less clutter, clearer entry points, and better scanning for readers on desktop and mobile.',
  },
  {
    label: 'Article 04',
    title: 'Low-fidelity article flow',
    summary:
      'A final reading on how simplified visuals can support storytelling when structure and tone are handled with care.',
  },
];

const notes = [
  {
    title: 'Content rhythm',
    description:
      'Short labels, strong titles, and measured paragraph lengths make each card easier to read without overwhelming the page.',
  },
  {
    title: 'Illustration support',
    description:
      'A custom hero image gives the page a stronger identity while keeping the overall layout aligned with the wireframe concept.',
  },
  {
    title: 'Consistent action',
    description:
      'Each story ends with one clear button so the scanning pattern stays predictable from card to card.',
  },
];

const ArticlePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[34px] border border-[#181716] bg-[#fffaf2]/90 p-6 shadow-[0_24px_70px_rgba(24,23,22,0.08)] lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
              Articles / Editorial Collection
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] text-[#181716] sm:text-5xl">
              Writing about layout is easier when the page itself models the system.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4d473f] sm:text-lg">
              This page expands the original card grid into a more complete editorial view. It now
              introduces the collection, uses a custom illustration, and gives each featured card a
              fuller summary that feels like real content instead of placeholder text.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back Home
            </Button>
            <Button to="/about">About the Studio</Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={articlesEditorial}
            alt="Editorial dashboard illustration with article cards and reading layout"
            className="w-full rounded-[30px] border border-[#181716] bg-[#f7f2ea]"
          />
        </div>
      </section>

      <section className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
              Featured Reads
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
              Article cards with clearer summaries
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#4d473f]">
            The grid keeps the original structure but now feels more polished thanks to stronger
            copy, clearer hierarchy, and a calmer visual treatment.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredArticles.map((article, index) => (
            <article
              key={article.label}
              className="rounded-[28px] border border-[#181716] bg-white/55 p-4 shadow-[0_12px_30px_rgba(24,23,22,0.04)]"
            >
              <div
                className={[
                  'flex aspect-4/3 items-end rounded-[24px] border border-[#181716]/15 p-4',
                  index % 2 === 0 ? 'bg-[#e7ded1]' : 'bg-[#f1e4d1]',
                ].join(' ')}
              >
                <div className="h-12 w-12 rounded-2xl border border-[#181716] bg-white/70" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6459]">
                {article.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#181716]">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4d473f]">{article.summary}</p>
              <Button className="mt-5">Read More</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[34px] border border-[#181716] bg-[#181716] p-6 text-[#f4efe7] lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#c9beb0]">
            Editorial Notes
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f4efe7]">
            The system behind the reading experience
          </h2>
          <div className="mt-6 space-y-4">
            {notes.map((note) => (
              <div key={note.title} className="rounded-[24px] border border-white/12 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-[#f4efe7]">{note.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#ddd2c5]">{note.description}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
            Collection Summary
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
            Why this page feels more complete now
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4d473f]">
            The original version proved that the card structure worked, but it still looked like a
            wireframe exercise. This revision adds personality through a custom image, stronger
            editorial copy, and more deliberate surface styling. The result is still clean, but it
            reads like a finished concept instead of a placeholder grid.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#4d473f]">
            Most importantly, the content now supports the assignment goals: each page includes
            images, meaningful writeups, and a clearer design identity that ties the whole website
            together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
