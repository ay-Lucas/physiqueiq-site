"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <div>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-emerald-600 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-5xl py-24 sm:py-32 lg:py-36">
          <div>
            <Reveal variant="fade">
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Track what the mirror shows
              </div>
            </Reveal>
            <Reveal variant="slide-right">
              <div className="mt-6 flex gap-3 sm:gap-4">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                  PhysiqueIQ
                </h1>
                <Image
                  alt="PhysiqueIQ"
                  src="/physiqueiq-logo-icon-only-emerald.svg"
                  width={56}
                  height={56}
                  className="h-10 w-auto drop-shadow sm:h-12 md:h-14"
                />
              </div>
            </Reveal>
            <Reveal variant="fade" delay={150}>
              <p className="mt-6 max-w-3xl text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                A sharper way to track physique change with guided photos, body
                metrics, and clear AI insights.
              </p>
            </Reveal>
            <Reveal variant="slide-up" delay={300}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 w-fit">
                  <a href="#product" className="font-semibold text-emerald-400">
                    <span aria-hidden="true" className="absolute inset-0" />
                    See the product <span aria-hidden="true">→</span>
                  </a>
                </div>
                <a
                  href="https://github.com/SCCapstone/Cockers"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-white/20 hover:bg-white/8"
                >
                  View on GitHub
                </a>
              </div>
            </Reveal>
            <div className="mt-10 flex flex-col items-start gap-4 sm:mt-12">
              <Reveal variant="fade" delay={200}>
                <p className="max-w-3xl text-4xl font-semibold text-white text-start">
                  See physique progress with more clarity and less guesswork.
                </p>
              </Reveal>
              <Reveal variant="fade" delay={350}>
                <p className="max-w-2xl text-lg text-gray-400 text-start sm:text-xl/8">
                  Keep photos, measurements, and insights in one place.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-emerald-600 to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
