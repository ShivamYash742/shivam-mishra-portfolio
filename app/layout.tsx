import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Mishra — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shivam Mishra — B.Tech CSE student at MSIT, building full-stack and AI-powered applications.",
  keywords: ["Shivam Mishra", "Full-Stack Developer", "AI", "Next.js", "React", "Portfolio"],
  openGraph: {
    title: "Shivam Mishra — Portfolio",
    description: "Full-Stack Developer & AI Enthusiast",
    url: "https://shivamyash742.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
