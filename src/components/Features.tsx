import { Camera, LineChart, Columns, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    name: "Guided progress photos",
    description:
      "Capture consistent front, side, and back shots with pose and lighting guides—no more guessing angles.",
    icon: Camera,
  },
  {
    name: "AI physique insights",
    description:
      "See trends in body composition, proportions, and symmetry with AI analysis that highlights real progress.",
    icon: LineChart,
  },
  {
    name: "Side-by-side comparisons",
    description:
      "Line up photos across weeks or months to clearly visualize changes that the scale can’t show.",
    icon: Columns,
  },
  {
    name: "Track metrics that matter",
    description:
      "Log weight and body measurements in one place, with graphs and timelines that keep you motivated.",
    icon: Ruler,
  },
];

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 h-screen">
      <div className="mx-auto max-w-2xl lg:text-start">
        <Reveal variant="fade">
          <h2 className="text-base font-semibold text-emerald-400">
            Progress you can see
          </h2>
        </Reveal>
        <Reveal variant="slide-up" delay={100}>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Go beyond the scale with PhysiqueIQ
          </p>
        </Reveal>
        <Reveal variant="fade" delay={200}>
          <p className="mt-6 text-lg text-gray-300">
            Most fitness apps stop at calories and workouts. PhysiqueIQ helps you
            track the change that really matters—your physique—by combining guided
            photos, body metrics, and AI-powered insights.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature, idx) => (
            <Reveal key={feature.name} variant="slide-up" delay={idx * 120}>
              <div className="relative pl-16">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-emerald-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  {feature.description}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
