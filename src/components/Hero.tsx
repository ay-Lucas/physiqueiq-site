"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

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
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div>
            <div className="flex gap-3 sm:gap-4">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                PhysiqueIQ
              </h1>
              <img
                alt="PhysiqueIQ"
                src="./physiqueiq-logo-icon-only-emerald.svg"
                className="h-10 sm:h-12 md:h-14 w-auto slide-in-from-right-translate-full animate-in drop-shadow"
              />
            </div>
            <p className="mt-6 sm:mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              PhysiqueIQ is the smarter way to measure physique change. Move
              beyond the scale with guided photos, body metrics, and AI-driven
              insights that make your progress clear, visual, and motivating.
            </p>
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 w-fit mt-5">
              <a href="#" className="font-semibold text-emerald-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 sm:mt-12 flex flex-col items-start gap-4">
              <p className="text-4xl font-semibold text-white text-start">
                Your physique is more than a number. Start tracking it right.
              </p>
              <p className="text-4xl font-semibold text-white text-start">
                Join the waitlist.
              </p>
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const email = String(data.get("email") || "");
                  console.log("Waitlist email:", email);
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    className="text-white flex-1 min-w-0"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <Button type="submit" className="sm:self-auto">
                    Join the Waitlist
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 sm:mt-10">
            <p className="text-base sm:text-lg text-gray-300">
              Coming <b>Spring 2026</b> to the iOS App Store and Google Play.
            </p>

            <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                title="Download on the App Store"
                className="pointer-events-none"
              >
                <Image
                  src="/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={158}
                  height={48}
                  className="h-11 md:h-14 w-auto"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                title="Get it on Google Play"
                className="pointer-events-none"
              >
                <Image
                  src="/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={192}
                  height={56}
                  className="h-16 md:h-20 w-auto"
                />
              </a>
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
