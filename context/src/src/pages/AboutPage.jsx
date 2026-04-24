import Button from '../components/Button';
import aboutProfile from '../assets/about-profile.svg';

const values = [
  {
    title: 'Content before decoration',
    description:
      'We map the message first, then layer styling only where it improves clarity, pacing, or emotional tone.',
  },
  {
    title: 'Structure with personality',
    description:
      'Even low-fidelity interfaces can feel distinctive when typography, spacing, and repeated shapes are handled carefully.',
  },
  {
    title: 'Flexible systems',
    description:
      'Our sections are built to expand with new content, which is especially useful for academic projects and portfolio updates.',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'Foundation phase',
    description:
      'Lineform began as a study of wireframe systems that could still feel refined and presentation-ready.',
  },
  {
    year: '2024',
    title: 'Content experiments',
    description:
      'We focused on turning placeholder layouts into pages with stronger tone, storytelling, and visual hierarchy.',
  },
  {
    year: '2025',
    title: 'Editorial direction',
    description:
      'The current identity combines quiet colors, framed compositions, and custom illustrations to create a fuller brand feel.',
  },
];

const facts = [
  { label: 'Primary focus', value: 'Narrative web layouts' },
  { label: 'Visual language', value: 'Editorial, calm, framed' },
  { label: 'Preferred output', value: 'Readable pages with strong rhythm' },
  { label: 'Design promise', value: 'Clear content with character' },
];

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[34px] border border-[#181716] bg-[#fffaf2]/90 p-6 shadow-[0_24px_70px_rgba(24,23,22,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="flex items-center justify-center">
          <img
            src={aboutProfile}
            alt="Profile-inspired illustration with portrait frame and information cards"
            className="w-full rounded-[30px] border border-[#181716] bg-[#f7f2ea]"
          />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
              About / Studio Identity
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] text-[#181716] sm:text-5xl">
              We translate simple wireframes into pages that feel thoughtful and human.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4d473f] sm:text-lg">
              The about page now tells a clearer story: what the studio values, how the design
              language evolved, and why the visual system stays minimal without becoming generic.
              Instead of filler text, it introduces a point of view.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back Home
            </Button>
            <Button to="/articles">Read the Notes</Button>
          </div>

          <div className="rounded-[28px] border border-[#181716]/15 bg-[#f4efe7] p-4">
            <p className="text-sm leading-6 text-[#4d473f]">
              This section uses a custom illustration to make the profile content feel branded,
              while the writeup explains the reasoning behind the design choices.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
            Studio Values
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
            Three rules that shape every page
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[28px] border border-[#181716]/15 bg-white/55 p-5"
            >
              <h3 className="text-xl font-semibold text-[#181716]">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4d473f]">{value.description}</p>
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
            How the direction matured over time
          </h2>

          <div className="mt-6 space-y-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-[26px] border border-white/12 bg-white/5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c49a6c]">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#f4efe7]">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#ddd2c5]">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[34px] border border-[#181716] bg-[#fffaf2]/80 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6d6459]">
            Quick Facts
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
            The profile in one glance
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-[24px] border border-[#181716]/15 bg-[#f4efe7] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6459]">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[#181716]">{fact.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AboutPage;
