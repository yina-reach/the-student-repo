import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FAQ from "./components/faq";

function Section(props: {
  id?: string;
  eyebrow: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
}) {
  const { id, eyebrow, title, copy, children } = props;
  return (
    <section id={id} className="border-t border-brand-line/60 py-16 md:py-20">
      <div className="container-tight">
        <div className="mb-8">
          <div className="mb-2 text-xs uppercase tracking-wide text-brand-sub">
            {eyebrow}
          </div>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-prose text-brand-sub">{copy}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: "Dynamic filters",
      body: "Parameterize by role, stack, location, availability, and more—instantly.",
    },
    {
      title: "Fast matching",
      body: "Company-defined signals combine with student profiles to surface best fits.",
    },
    {
      title: "Secure access",
      body: "Scoped access for partner domains; audit-friendly activity trails.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-xl border border-brand-line bg-brand-blue p-5 ring-1 ring-white/5"
        >
          <div className="mb-2 font-semibold">{f.title}</div>
          <p className="text-brand-white">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

function TwoColumns({
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}: {
  leftTitle: string;
  leftBody: string;
  rightTitle: string;
  rightBody: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-brand-line bg-brand-blue p-6">
        <div className="mb-1 text-sm text-white">Students</div>
        <div className="mb-3 text-white font-semibold">{leftTitle}</div>
        <p className="text-white">{leftBody}</p>
        <a
          href="#students"
          className="mt-4 inline-block rounded-lg border border-brand-line px-3 py-2 text-sm hover:bg-brand-bg"
        >
          Learn more
        </a>
      </div>
      <div className="rounded-xl border border-brand-line bg-brand-blue p-6">
        <div className="mb-1 text-sm text-white">Businesses</div>
        <div className="mb-3 text-white font-semibold">{rightTitle}</div>
        <p className="text-white">{rightBody}</p>
        <a
          href="#businesses"
          className="mt-4 inline-block rounded-lg border border-brand-line px-3 py-2 text-sm hover:bg-brand-bg"
        >
          Explore
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />

        <Section
          eyebrow="Overview"
          title="WHAT HAPPENS WHEN YOU DROP YOUR PROFILE?"
          copy="A focused portal with a clean, accessible interface and powerful search. The result: better matches, faster."
        >
          <FeatureGrid />
        </Section>

        <Section
          id="students"
          eyebrow="Students"
          title="COMPANIES HIRING IN OUR PORTFOLIO"
          copy="Create a profile that highlights projects, skills, and interests—then opt into opportunities that fit you."
        >
          <TwoColumns
            leftTitle="Own your profile"
            leftBody="Edit anytime, highlight projects and skills, and control what’s shared with partner companies."
            rightTitle="Precision filters"
            rightBody="Companies find you by stack, interests, and availability—so every conversation is higher-signal."
          />
        </Section>

        <Section
          id="businesses"
          eyebrow="Businesses"
          title="STAY IN THE LOOP"
          copy="Parameterize searches, review matches, and export shortlists in minutes—not weeks."
        >
          <TwoColumns
            leftTitle="Search & shortlist"
            leftBody="Save queries, export shortlists, and collaborate with your team on candidates."
            rightTitle="Signal-driven matching"
            rightBody="Combine skills, experience, and project signals to surface the best-fit candidates."
          />
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="CHALLENGE ACCEPTED?"
          copy="Monospace details, lime accents, and a thoughtful hierarchy—drawing from the Repo newsletter aesthetic."
        >
          <div className="rounded-xl border border-brand-line bg-brand-blue p-6 text-brand-sub">
            <p>
              This page is a starting point. As you reference the Figma, you can
              tune spacing, radius, and color tokens to perfectly match the
              system (e.g., update the lime, swap fonts, or bring in
              illustration styles).
            </p>
          </div>
        </Section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
