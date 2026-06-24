import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--serif",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--sans",
});

export const metadata: Metadata = {
  title: {
    default: "Nafisa Aslam — Business & Finance Journalist",
    template: "%s · Nafisa Aslam",
  },
  description:
    "Nafisa Aslam — aspiring Business & Finance Journalist and Political Science postgraduate, heading to the Asian College of Journalism, Chennai. Research-driven reporting on markets, policy, and the economy.",
  keywords: [
    "Nafisa Aslam",
    "Business Journalism",
    "Finance Journalism",
    "Journalist",
    "Asian College of Journalism",
    "Political Science",
    "Research",
    "Kolkata",
  ],
  authors: [{ name: "Nafisa Aslam" }],
  openGraph: {
    title: "Nafisa Aslam — Business & Finance Journalist",
    description: "Research-driven reporting on markets, policy, and the economy.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-orb orb-1" aria-hidden="true" />
        <div className="bg-orb orb-2" aria-hidden="true" />
        <div className="bg-orb orb-3" aria-hidden="true" />
        <svg className="bg-chart" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2fd3a5" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2fd3a5" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* candlesticks */}
          <g className="bg-chart__candles">
            <rect x="90" y="360" width="10" height="70" /><line x1="95" y1="345" x2="95" y2="445" />
            <rect x="250" y="320" width="10" height="60" /><line x1="255" y1="305" x2="255" y2="395" />
            <rect x="430" y="300" width="10" height="80" /><line x1="435" y1="285" x2="435" y2="395" />
            <rect x="640" y="250" width="10" height="65" /><line x1="645" y1="235" x2="645" y2="330" />
            <rect x="860" y="230" width="10" height="55" /><line x1="865" y1="215" x2="865" y2="300" />
            <rect x="1080" y="180" width="10" height="70" /><line x1="1085" y1="165" x2="1085" y2="260" />
            <rect x="1290" y="130" width="10" height="60" /><line x1="1295" y1="115" x2="1295" y2="205" />
          </g>
          <path
            className="bg-chart__area"
            d="M0,400 L120,380 240,405 360,350 480,365 600,300 720,320 840,255 960,275 1080,200 1200,225 1320,140 1440,165 L1440,500 L0,500 Z"
            fill="url(#chartFill)"
          />
          <path
            className="bg-chart__line"
            d="M0,400 L120,380 240,405 360,350 480,365 600,300 720,320 840,255 960,275 1080,200 1200,225 1320,140 1440,165"
            fill="none"
          />
        </svg>
        <Nav />
        <main className="shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
