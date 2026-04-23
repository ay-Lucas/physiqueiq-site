import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, LineChart, Sparkles } from "lucide-react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const highlightPoints = [
  "Guided progress photos, body measurements, and weight tracking in one focused workflow.",
  "AI-generated insights that turn raw check-ins into useful feedback on growth and symmetry.",
  "Achievement-based momentum so staying consistent feels rewarding, not repetitive.",
];

const productStats = [
  { label: "Capture", value: "Photos and body metrics" },
  { label: "Understand", value: "AI progress summaries" },
  { label: "Stay Consistent", value: "Milestones and history" },
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
      <AppShowcase />
      <Features />
    </>
  );
}

function AppShowcase() {
  return (
    <section
      id="product"
      className="relative mx-auto max-w-[96rem] px-6 pb-24 sm:pb-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-24 -z-10 h-80 rounded-full bg-emerald-500/12 blur-3xl"
      />

      <div className="space-y-16">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles className="size-4" />
              Inside the app
            </span>
          </Reveal>

          <Reveal variant="slide-up" delay={100}>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The mobile experience is built to make progress impossible to
              miss.
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              PhysiqueIQ combines visual tracking, measurement history, and
              AI-backed interpretation in a format that feels clear on day one
              and still useful months later.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {highlightPoints.map((point, index) => (
              <Reveal
                key={point}
                variant="slide-right"
                delay={index * 100 + 220}
              >
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-gray-200 backdrop-blur-sm">
                  <div className="mt-0.5 rounded-full bg-emerald-400/15 p-2 text-emerald-300">
                    <ArrowUpRight className="size-4" />
                  </div>
                  <p className="text-sm leading-7 sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={450}>
            <div className="mt-10 flex items-center gap-3 text-sm text-emerald-300">
              <LineChart className="size-4" />
              <span>
                Designed to answer the question most fitness apps miss: what is
                actually changing?
              </span>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 xl:pb-2 pt-5">
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

      <div className="relative pt-10">
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
