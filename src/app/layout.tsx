import Navbar from "@/components/Navbar";
import "./globals.css";
export const metadata = {
  title: "PhysiqueIQ",
  description: "Use AI to Analyze your gym progress!",
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
        <main id="content" className="mx-auto max-w-7xl px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
