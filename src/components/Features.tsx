import { Camera, LineChart, Columns, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    name: "Guided progress photos",
    description:
      "Capture consistent front, side, and back shots with simple prompts that keep every check-in usable.",
    icon: Camera,
  },
  {
    name: "AI physique insights",
    description:
      "Turn raw check-ins into clear takeaways on growth, symmetry, and momentum.",
    icon: LineChart,
  },
  {
    name: "Clean comparisons",
    description:
      "Review changes across weeks or months without digging through a camera roll.",
    icon: Columns,
  },
  {
    name: "Metrics that stay useful",
    description:
      "Keep weight and measurements in one place with trends that are easy to read.",
    icon: Ruler,
  },
];

export default function Features() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl lg:text-start">
        <Reveal variant="fade">
          <h2 className="text-base font-semibold text-emerald-400">Why It Works</h2>
        </Reveal>
        <Reveal variant="slide-up" delay={100}>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            A focused system for tracking visible progress
          </p>
        </Reveal>
        <Reveal variant="fade" delay={200}>
          <p className="mt-6 text-lg text-gray-300">
            PhysiqueIQ keeps the workflow simple: capture, review, and understand.
            Every part of the app is built to make progress easier to measure at a glance.
          </p>
        </Reveal>
        </div>
        <div className="mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
          {features.map((feature, idx) => (
            <Reveal key={feature.name} variant="slide-up" delay={idx * 120}>
              <div className="relative rounded-3xl border border-white/8 bg-white/4 p-6 pl-18 backdrop-blur-sm">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute left-6 top-6 flex size-10 items-center justify-center rounded-lg bg-emerald-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-3 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            </Reveal>
          ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
