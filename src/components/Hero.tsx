import { Link } from "react-router-dom";
import steveJobsLarge from "../assets/stevejobs.webp";

function AvatarTile({
  src,             // transparent PNG/SVG cutout
  alt = "",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-[206px] h-[196px] rounded-[20px] bg-[#E6FF8A] border border-[#1E2015] overflow-hidden shadow-[0_14px_16px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* base lime square (decorative) */}
      <div aria-hidden className="absolute inset-0 rounded-[20px]" />

      {/* overlay photo with transparent background */}
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain p-3"
        />
      )}
    </div>
  );
}

function ProfileBadge({
  avatar,
  name,
  title,
  sub,
  className = "",
}: {
  avatar: string;
  name: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-30 flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,.18)] ${className}`}
    >
      <div className="size-10 overflow-hidden rounded-full border border-black/10">
        <img src={avatar} alt="" className="size-full object-cover" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold text-neutral-900">{name}</div>
        <div className="text-xs text-neutral-500 -mt-0.5">{title}</div>
        {sub && (
          <div className="mt-0.5 text-[10px] text-neutral-400">{sub}</div>
        )}
      </div>
    </div>
  );
}

function DashedPath({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        fill="none"
        stroke="#0A0A0A"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="round"
      />
      <circle cx="360" cy="250" r="4" fill="#0A0A0A" />
      <circle cx="520" cy="380" r="4" fill="#0A0A0A" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-brand-blue blur-3xl" />
      </div>
      <div className="container-tight grid items-center gap-y-10 gap-x-12 py-16 md:grid-cols-[minmax(0,1fr)_560px] md:py-24">
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
            <Link
              to="/form"
              className="rounded-xl bg-brand-blue px-5 py-3 text-white shadow-soft hover:brightness-95"
            >
              SUBMIT YOUR PROFILE
            </Link>
          </div>
          <div>
            <p className="mt-3 text-center text-xs text-brand-sub">
              Join 700+ hackers already in the network.
            </p>
          </div>
        </div>
        {/* RIGHT SIDE GRAPHIC STACK */}
          <div className="relative h-[560px] md:h-[620px]">
            <img
                src={steveJobsLarge}
                className="
                  absolute
                  right-[200px]  
                  top-[70px]     
                  h-[236px]
                  w-[206px]
                  object-cover
                  rounded-b-[20px]
                  pointer-events-none
                  z-20
                "
                alt=""
              />
            <AvatarTile
              // src={steveJobsLarge}
              className="
                right-[200px]
                top-[110px]"
            />
            
            <ProfileBadge
              avatar="/img/steve-thumb.jpg"
              name="Steve Jobs"
              title="Entrepreneur"
              sub="write something here"
              className="
                right-[30px] 
                top-[200px]"
            />
            {/* <AvatarTile
              src="/img/steve-mid.jpg"
              className="absolute left-[12%] top-[48%] h-[120px] w-[320px] -translate-y-1/2 md:left-[8%] md:h-[130px] md:w-[340px]"
            /> */}
            {/* <ProfileBadge
              avatar="/img/steve-thumb.jpg"
              name="Steve Jobs"
              title="Entrepreneur"
              sub="write something here"
              className="left-[16%] top-[46%] -translate-y-1/2 md:left-[12%]"
            /> */}

            <AvatarTile
              // src="..assets/stevejobs.webp"
              className="right-10 top-[350px]"
            />
            {/* <ProfileBadge
              avatar="/img/melanie-thumb.jpg"
              name="Melanie Perkins"
              title="Entrepreneur"
              sub="write something here"
              className="right-[14%] bottom-[20%]"
            /> */}
          </div>
      </div>
    </section>
  );
}
