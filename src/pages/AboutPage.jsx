import Button from "../components/Button";

const values = [
  {
    title: "Fresh ingredients first",
    description:
      "We start with quality content and user needs, then layer on design that enhances the experience without overwhelming the flavor.",
  },
  {
    title: "Baked with care",
    description:
      "Even simple layouts can feel delicious when typography, spacing, and visual rhythm are crafted thoughtfully.",
  },
  {
    title: "Scalable recipes",
    description:
      "Our design systems are built to expand with new content, perfect for growing bakeries and evolving cookie collections.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Foundation baked",
    description:
      "Cookie Atelier began as a study of warm, inviting layouts that could still feel professional and bakery-ready.",
  },
  {
    year: "2024",
    title: "Flavor experiments",
    description:
      "We focused on turning basic recipes into pages with richer tone, storytelling, and delicious visual hierarchy.",
  },
  {
    year: "2025",
    title: "Sweet identity",
    description:
      "The current brand combines cozy colors, framed compositions, and custom illustrations to create a fuller cookie experience.",
  },
];

const facts = [
  { label: "Primary focus", value: "Delicious web layouts" },
  { label: "Visual language", value: "Warm, cozy, inviting" },
  { label: "Preferred output", value: "Tasty pages with sweet rhythm" },
  { label: "Design promise", value: "Clear content with flavor" },
];

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[34px] border border-[#181716] bg-[#fffaf2]/90 p-6 shadow-[0_24px_70px_rgba(24,23,22,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="flex items-center justify-center">
          <img
            src="/cookie-giftbox.jpg"
            alt="Cookie bakery profile and team"
            className="w-full rounded-[30px] border border-[#181716] bg-[#f7f2ea] object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
              About / Cookie Atelier
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] text-[#181716] sm:text-5xl">
              We bake simple wireframes into websites that feel warm and
              delicious.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4d473f] sm:text-lg">
              The about page now tells a clearer story: what the bakery values,
              how the cookie designs evolved, and why the visual system stays
              cozy without becoming bland. Instead of generic text, it
              introduces a point of delicious view.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back to Bakery
            </Button>
            <Button to="/articles">Read the Recipes</Button>
          </div>

          <div className="rounded-[28px] border border-[#181716]/15 bg-[#f4efe7] p-4">
            <p className="text-sm leading-6 text-[#4d473f]">
              This section uses a custom illustration to make the bakery profile
              feel branded, while the writeup explains the reasoning behind the
              cookie design choices.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
            Bakery Values
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
            Three rules that shape every cookie
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[28px] border border-[#181716]/15 bg-white/55 p-5"
            >
              <h3 className="text-xl font-semibold text-[#181716]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4d473f]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[34px] border border-[#181716] bg-[#181716] p-6 text-[#f4efe7] lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#c9beb0]">
            Timeline
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f4efe7]">
            How the cookie recipes matured over time
          </h2>

          <div className="mt-6 space-y-4">
            {milestones.map((milestone) => (
              <article
                key={milestone.year}
                className="rounded-[26px] border border-white/12 bg-white/5 p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c49a6c]">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#f4efe7]">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#ddd2c5]">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
            Quick Facts
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
            The bakery in one bite
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[24px] border border-[#181716]/15 bg-[#f4efe7] p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6459]">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[#181716]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AboutPage;
