"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              PhysiqueIQ
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              PhysiqueIQ is the smarter way to measure physique change. Move
              beyond the scale with guided photos, body metrics, and AI-driven
              insights that make your progress clear, visual, and motivating.
            </p>
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 w-fit mt-4">
              <a href="#" className="font-semibold text-emerald-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-14 flex flex-col items-start gap-4">
              <p className="text-4xl font-semibold text-white text-start">
                Your physique is more than a number. Start tracking it right.
              </p>
              <p className="text-4xl font-semibold text-white text-start">
                Join the waitlist.
              </p>
              <div className="w-full">
                <label className="text-sm/6 text-white">Email</label>
                <div className="flex gap-4 w-full mt-1">
                  <Input
                    className="text-white max-w-[20rem]"
                    placeholder="Enter your email here"
                  />
                  <a href="#">
                    <Button>Join the Waitlist</Button>
                  </a>
                </div>
              </div>
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
