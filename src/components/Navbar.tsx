"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Product", href: "/#product" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/60 backdrop-blur supports-[backdrop-filter]:bg-gray-950/40">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 inline-flex items-center gap-2"
          >
            <span className="sr-only">PhysiqueIQ</span>
            <Image
              alt="PhysiqueIQ"
              src="/physiqueiq-logo-icon-only-white.svg"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((bool) => !bool);
            }}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 z-[100]"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-white hover:text-white/70 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-white"> */}
          {/*   Log in <span aria-hidden="true">&rarr;</span> */}
          {/* </a> */}
        </div>
      </nav>
      <div className="lg:hidden">
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogContent className="translate-y-1 top-0 bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <DialogTitle className="sr-only">
              Are you absolutely sure?
            </DialogTitle>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 inline-flex items-center gap-2"
              >
                <span className="sr-only">PhysiqueIQ</span>
                <Image
                  alt="PhysiqueIQ"
                  src="/physiqueiq_double_bi_logo.png"
                  width={32}
                  height={32}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
