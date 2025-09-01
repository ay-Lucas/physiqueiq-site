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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
