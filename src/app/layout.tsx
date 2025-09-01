import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: "PhysiqueIQ",
  description: "Use AI to Analyze your gym progress!",
  icons: { icon: "/physiqueiq-logo-icon-only-white.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <Navbar />
        <main
          id="content"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16"
        >
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
