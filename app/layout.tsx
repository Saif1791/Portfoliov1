import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Saif Z | Web Developer Portfolio",
  description: "Muhammad Saif Z Web Developer and Designer portfolio",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" href="/favicon.ico" />
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
