import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZS Campus Beats — 125 Days to One Offer | Shivam Mishra",
  description:
    "An interactive case study of 125 days navigating ZS Associates' Campus Beats 2026–27 process — from hackathon to PPO. Business Technology Solutions Associate · ₹14.2 LPA.",
  keywords: [
    "ZS Associates",
    "Campus Beats",
    "PPO",
    "BTSA",
    "Shivam Mishra",
    "MSIT",
    "Placement Journey",
  ],
  openGraph: {
    title: "ZS Campus Beats — 125 Days to One Offer",
    description:
      "An interactive case study of 125 days, 26 milestones, 3 reschedules, and 1 PPO from ZS Associates.",
    type: "article",
  },
};

export default function ZSCampusBeatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${plusJakartaSans.variable} font-sans`}>
      {children}
    </div>
  );
}
