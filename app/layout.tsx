import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "mert türkoğlu | Yazılım Geliştirici",
    template: "%s | mert türkoğlu",
  },
  description: "Merhaba! Ben bir yazılım geliştiriciyim. Deneyimlerim ve biriktirdiğim bilgiyle yazılım dünyasında sürekli gelişme yolculuğunda ilerliyorum.",
  openGraph: {
    title: "mert türkoğlu | Yazılım Geliştirici",
    description: "Merhaba! Ben bir yazılım geliştiriciyim. Deneyimlerim ve biriktirdiğim bilgiyle yazılım dünyasında sürekli gelişme yolculuğunda ilerliyorum.",
    url: "https://www.mert.run",
    siteName: "mert türkoğlu",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/88425310?v=4",
        width: 1920,
        height: 1080,
        alt: "Mert Türkoğlu - Yazılım Geliştirici"
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "mert türkoğlu | Yazılım Geliştirici",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="tr" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
          className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
      {children}
      </body>
      </html>
  );
}
