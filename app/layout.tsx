import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Saif Z | Web Developer Portfolio",
  description:
    "Muhammad Saif Z Web Developer and Designer portfolio. Explore the portfolio of Muhammad Saif Z, a proficient Web Developer and Designer specializing in ReactJs, NextJs, and more.",
  publisher: "Saif Z",
  keywords: [
    "Saif Z",
    "ReactJs",
    "NextJs",
    "Vercel",
    "Web2",
    "Web Developer",
    "Web Designer",
    "Portfolio",
    "Web Portfolio",
    "Web Development Projects",
    "Top Web Developers",
    "Web developer freelancer",
    "Indian freelancer",
    "Indian Web Developer",
  ],
  authors: { name: "Saif Z" },
  creator: "Saif Z",
  openGraph: {
    title: "Muhammad Saif Z | Web Developer Portfolio",
    description:
      "Explore the portfolio of Muhammad Saif Z, a proficient Web Developer and Designer specializing in ReactJs, NextJs, and more.",
    url: "https://saifwebdevportfolio.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="favicon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-portfolio-url.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Muhammad Saif Z | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Muhammad Saif Z, a proficient Web Developer and Designer specializing in ReactJs, NextJs, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta
          property="og:image"
          content="https://your-portfolio-url.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhammad Saif Z | Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Muhammad Saif Z, a proficient Web Developer and Designer specializing in ReactJs, NextJs, and more."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio-url.com/twitter-image.jpg"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
