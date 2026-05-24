import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://shivamyash742.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shivam Mishra — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shivam Mishra — B.Tech CSE student at MSIT, building full-stack and AI-powered applications.",
  keywords: ["Shivam Mishra", "Full-Stack Developer", "AI", "Next.js", "React", "Portfolio"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shivam Mishra — Portfolio",
    description: "Full-Stack Developer & AI Enthusiast",
    url: siteUrl,
    siteName: "Shivam Mishra Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Mishra — Portfolio",
    description: "Full-Stack Developer & AI Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: profile.title,
  description: profile.tagline,
  sameAs: [profile.github, profile.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Maharaja Surajmal Institute of Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
