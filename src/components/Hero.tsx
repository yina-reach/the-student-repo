import { Link } from "react-router-dom";
import steveJobsLarge from "../assets/stevejobs.webp";
import squareJobs from "../assets/squarejobs.png";
import melperk from "../assets/melperk.png";
import squiggleone from "../assets/squiggleone.png";
import squiggletwo from "../assets/squiggletwo.png";

function AvatarTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        absolute 
        w-[206px] 
        h-[196px] 
        rounded-[20px] 
        bg-[#E6FF8A] 
        border 
        border-[#1E2015] 
        overflow-hidden 
        shadow-[0_14px_16px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* base lime square (decorative) */}
      <div
        aria-hidden
        className="
          absolute 
          inset-0 
          rounded-[20px]"
      />
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
      className={`
        absolute z-30 
        flex 
        items-center 
        gap-3
        rounded-2xl 
        border 
        border-[#1E2015] 
        bg-white 
        px-6 py-3 
        shadow-[0_18px_40px_rgba(0,0,0,.18)] ${className}`}
    >
      <div
        className="
        size-14 
        overflow-hidden 
        rounded-full 
        border 
        border-[#1E2015] "
      >
        <img
          src={avatar}
          alt=""
          className="
            size-full 
            object-cover"
        />
      </div>
      <div className="leading-tight">
        <div
          className="
            font-semibold 
            text-neutral-900"
        >
          {name}
        </div>
        <div
          className="
            text-xs 
            text-neutral-500 
            -mt-0.5" // spacing between lines
        >
          {title}
        </div>
        {sub && (
          <div
            className="
              mt-0.5 
              text-[10px] 
              text-neutral-400"
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="
          pointer-events-none 
          absolute 
          inset-0 -z-10"
      >
        <div
          className="
            absolute 
            left-1/2 
            top-[-10%] 
            h-[450px] 
            w-[450px] 
            -translate-x-1/2 
            rounded-full 
            bg-brand-blue 
            blur-3xl"
        />
      </div>
      <div
        className="
          container-tight 
          grid items-center 
          gap-y-10 
          gap-x-12 
          py-16 
          md:grid-cols-[minmax(0,1fr)_560px] 
          md:py-24"
      >
        <div
          className="
          flex 
          flex-col 
          items-start 
          justify-center"
        >
          <h1
            className="
              mb-5 
              font-mono 
              text-4xl 
              font-bold 
              tracking-tight 
              md:text-5xl"
          >
            JOIN THE STUDENT REPO
          </h1>
          <p
            className="
              mb-8 
              max-w-prose 
              text-brand-text"
          >
            Reach Capital invests in early-stage founders redefining how we
            learn, live, and work. Our portfolio of 130+ startups are constantly
            on the lookout for talented builders like you. Share what you're
            studying, building, or exploring, and we'll connect you with
            career-defining opportunities.
          </p>
          <div
            className="
              flex 
              flex-wrap 
              items-center 
              gap-3"
          >
            <Link
              to="/form"
              className="
                rounded-xl 
                bg-brand-blue 
                px-5 
                py-3 
                text-white 
                shadow-soft 
                hover:brightness-95"
            >
              SUBMIT YOUR PROFILE
            </Link>
          </div>
          <div>
            <p
              className="
                mt-3 
                text-center 
                text-xs 
                text-brand-sub"
            >
              Join 700+ hackers already in the network.
            </p>
          </div>
        </div>
        {/* RIGHT SIDE GRAPHIC STACK */}
        <div
          className="
              relative 
              h-[560px] 
              md:h-[620px]"
        >
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
                  z-30
                "
            alt=""
          />
          <AvatarTile
            className="
                right-[200px]
                top-[110px]
                z-20"
          />

          <ProfileBadge
            avatar={squareJobs}
            name="Steve Jobs"
            title="Entrepreneur"
            sub="write something here"
            className="
                right-[70px] 
                top-[220px]
                z-40"
          />

          <ProfileBadge
            avatar={squareJobs}
            name="Steve Jobs"
            title="Entrepreneur"
            sub="write something here"
            className="
                right-[325px] 
                top-[350px]
                z-40"
          />
          <img
            src={melperk}
            className="
                  absolute
                  right-10 
                  top-[310px]    
                  h-[236px]
                  w-[206px]
                  object-cover
                  rounded-b-[20px]
                  pointer-events-none
                  z-30
                "
            alt=""
          />
          <AvatarTile
            className="
                right-10 
                top-[350px]
                z-20"
          />
          <ProfileBadge
            avatar={melperk}
            name="Melanie Perkins"
            title="Intern at Canva"
            sub="write something here"
            className="
                right-[150px] 
                top-[490px]
                z-40"
          />
        </div>
        <img
          src={squiggletwo}
          className="
                absolute
                right-[210px]
                top-[215px] 
                w-[450px]
                z-10
                "
        />
        <img
          src={squiggleone}
          className="
                absolute
                right-[200px]
                bottom-[90px] 
                w-[700px]
                z-10
                "
        />
      </div>
    </section>
  );
}
