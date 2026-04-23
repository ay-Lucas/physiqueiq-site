import Image from "next/image";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const productStats = [
  { label: "Capture", value: "Photos and measurements" },
  { label: "Review", value: "Trends and comparisons" },
  { label: "Understand", value: "Clear AI summaries" },
];

const screenshots = [
  {
    eyebrow: "Progress Dashboard",
    title: "See your latest physique data at a glance.",
    src: "/app_dashboard.png",
    alt: "PhysiqueIQ dashboard screen showing latest photo, body metrics, and quick actions",
    accent: "from-cyan-400/25 via-emerald-400/10 to-transparent",
  },
  {
    eyebrow: "AI Insights",
    title: "Readable updates that explain what is actually changing.",
    src: "/Insights.png",
    alt: "PhysiqueIQ insights screen showing AI-generated progress summaries and trend callouts",
    accent: "from-indigo-400/25 via-blue-400/10 to-transparent",
  },
  {
    eyebrow: "Achievement Loop",
    title: "Milestones that reinforce the habit of checking in.",
    src: "/Achievements.png",
    alt: "PhysiqueIQ achievements screen showing unlocked milestones and progress rewards",
    accent: "from-amber-300/25 via-yellow-200/10 to-transparent",
  },
];

export default function Landing() {
  return (
    <>
      <Hero />
      <DemoSection />
      <AppShowcase />
      <Features />
    </>
  );
}

function DemoSection() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="fade">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Product Demo
          </span>
        </Reveal>

        <Reveal variant="slide-up" delay={100}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A quick walkthrough, right on the page.
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={180}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Placeholder player for now. Drop in the final demo video when it is
            ready.
          </p>
        </Reveal>

        <Reveal variant="zoom" delay={240}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/8 bg-[#0c1020] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
            <div className="aspect-video overflow-hidden rounded-[1.4rem] border border-white/8 bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0"
                title="PhysiqueIQ demo video placeholder"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AppShowcase() {
  return (
    <section
      id="product"
      className="relative pb-24 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-24 -z-10 h-80 rounded-full bg-emerald-500/12 blur-3xl"
      />

      <div className="mx-auto max-w-5xl space-y-16">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles className="size-4" />
              Inside the app
            </span>
          </Reveal>

          <Reveal variant="slide-up" delay={100}>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A product experience that keeps progress clear.
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              The product keeps check-ins, trends, and interpretation in one
              focused flow.
            </p>
          </Reveal>
          <div className="grid gap-4 pt-8 sm:grid-cols-3 xl:pb-2">
            {productStats.map((stat, index) => (
              <Reveal key={stat.label} variant="zoom" delay={index * 100 + 260}>
                <div className="rounded-2xl border border-white/8 bg-linear-to-b from-[#131b31] to-[#0d1324] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-white">
                    {stat.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pt-6">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl"
        />

        <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((shot, index) => (
            <Reveal
              key={shot.src}
              variant="slide-up"
              delay={index * 120 + 120}
              className="w-full md:w-[22rem]"
            >
              <PhoneFrame
                eyebrow={shot.eyebrow}
                title={shot.title}
                accent={shot.accent}
              >
                <ScreenshotScreen src={shot.src} alt={shot.alt} />
              </PhoneFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full md:w-[22rem]">
      <div className="mb-4 min-h-14 space-y-1 px-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80">
          {eyebrow}
        </p>
        <p className="text-sm text-gray-300">{title}</p>
      </div>

      <div className="relative rounded-[2.8rem] border border-white/10 bg-[#060606] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-[2.8rem] bg-gradient-to-b ${accent}`}
        />
        <div className="relative aspect-[472/1024] overflow-hidden rounded-[2.15rem] border border-white/8 bg-black ring-1 ring-white/5">
          {children}
        </div>
      </div>
    </div>
  );
}

function ScreenshotScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1536px) 28rem, (min-width: 1280px) 40vw, (min-width: 1024px) 32rem, (min-width: 768px) 28rem, 88vw"
        className="object-cover object-top"
      />
    </div>
  );
}
