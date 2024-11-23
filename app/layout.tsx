import "./globals.css";
import { Inter } from "next/font/google";
import { generalData } from "@/data/general";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundSpheres } from "@/components/BackgroundSpheres";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${generalData.name} - ${generalData.jobTitle}`,
  description: generalData.about,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: `${generalData.name} - ${generalData.jobTitle}`,
    title: `${generalData.name} - ${generalData.jobTitle}`,
    description: generalData.about,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${generalData.name} - ${generalData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-neutral-800`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <BackgroundSpheres />
          <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
