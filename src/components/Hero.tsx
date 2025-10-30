function AvatarTile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-[28px] bg-[#E9F5A8] p-2 shadow-[0_28px_60px_rgba(0,0,0,.25)] ${className}`}>
      <div className="h-full w-full overflow-hidden rounded-[24px]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function ProfileBadge({
  avatar, name, title, sub, className = "",
}: { avatar: string; name: string; title: string; sub?: string; className?: string }) {
  return (
    <div className={`absolute z-30 flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,.18)] ${className}`}>
      <div className="size-10 overflow-hidden rounded-full border border-black/10">
        <img src={avatar} alt="" className="size-full object-cover" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold text-neutral-900">{name}</div>
        <div className="text-xs text-neutral-500 -mt-0.5">{title}</div>
        {sub && <div className="mt-0.5 text-[10px] text-neutral-400">{sub}</div>}
      </div>
    </div>
  );
}

function DashedPath({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} viewBox="0 0 800 600" preserveAspectRatio="none">
      <path d={d} fill="none" stroke="#0A0A0A" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="6 10" strokeLinecap="round" />
      <circle cx="360" cy="250" r="4" fill="#0A0A0A" />
      <circle cx="520" cy="380" r="4" fill="#0A0A0A" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft lime glow */}
        <div className="absolute left-1/2 top-[-10%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="container-tight grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start justify-center">
          <h1 className="mb-5 font-mono text-4xl font-bold tracking-tight md:text-5xl">
            JOIN THE STUDENT REPO
          </h1>

          <p className="mb-8 max-w-prose text-brand-text">
            Reach Capital invests in early-stage founders redefining how we
            learn, live, and work. Our portfolio of 130+ startups are constantly
            on the lookout for talented builders like you. Share what you're
            studying, building, or exploring, and we'll connect you with
            career-defining opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="rounded-xl bg-brand-blue px-5 py-3 text-white shadow-soft hover:brightness-95"
            >
              SUBMIT YOUR PROFILE
            </a>
          </div>
          <div>
            <p className="mt-3 text-center text-xs text-brand-sub">
              Join 700+ hackers already in the network.
            </p>
          </div>
        </div>
      {/* // above is the left side of the hero section - don' remove ! */}
      {/* // naila's new code down below - */}
      {/* RIGHT: visual cluster */}
      {/* RIGHT COLUMN */}
<div className="relative min-h-[640px]">
  {/* TOP LEFT TILE */}
  <AvatarTile
    src="/images/steve.jpg"             // <-- swap to your assets
    alt="Steve Jobs"
    className="absolute left-[100px] top-0 h-[196px] w-[206px] z-10"
  />

  {/* TOP TILE BADGE */}
  {/* <ProfileBadge
    avatar="/images/steve.jpg"
    name="Steve Jobs"
    title="Entrepreneur"
    sub="write something here"
    className="right-[2%] top-[26%] w-[310px]"
  /> */}

  {/* BOTTOM RIGHT TILE */}
  <AvatarTile
    src="/images/melanie.jpg"
    alt="Melanie Perkins"
    className="absolute left-[300px] bottom-[5%] h-[196px] w-[206px] z-10"
  />

  {/* MIDDLE-LEFT BADGE */}
  {/* <ProfileBadge
    avatar="/images/steve.jpg"
    name="Steve Jobs"
    title="Entrepreneur"
    sub="write something here"
    className="left-[-8%] top-[50%] w-[340px]"
  /> */}

  {/* BOTTOM-LEFT BADGE */}
  {/* <ProfileBadge
    avatar="/images/melanie.jpg"
    name="Melanie Perkins"
    title="Entrepreneur"
    sub="write something here"
    className="left-[6%] bottom-[-14px] w-[300px]"
  /> */}

  {/* DOTTED CONNECTORS — position these to span the column */}
  {/* <DashedPath
    className="inset-0 z-0"
    d="M 40 340 C 180 300, 320 300, 480 240 S 700 220, 760 140"
  /> */}
  {/* <DashedPath
    className="inset-0 z-0"
    d="M 80 520 C 220 500, 300 420, 470 460 S 700 520, 780 440"
  /> */}
</div>

      </div>
    </section>
  );
}
