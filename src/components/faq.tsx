export default function FAQ() {
  return (
    <section
      id="get-started"
      className="border-t border-brand-line/60 py-16 md:py-20"
    >
      <div className="container-tight">
        <div className="rounded-2xl border border-brand-line bg-gradient-to-br bg-brand-blue p-8 text-center shadow-soft">
          <h3 className="font-mono text-2xl font-bold text-white">FAQ</h3>
          <p className="mx-auto mt-2 max-w-prose text-white">
            Spin up access for your domain, invite your team, and start
            discovering candidates today.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#signup"
              className="rounded-xl bg-brand-lime px-5 py-3 font-semibold text-black hover:brightness-95"
            >
              Create account
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-brand-line px-5 py-3 text-brand-text hover:bg-brand-blue"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
