// ─── ZS Campus Beats — Data Layer ───────────────────────────────────────────
// All factual content preserved exactly from preview.html.
// Only presentation is changed.

export type EventStatus = "muted" | "blue" | "gold" | "red";

export interface TimelineEvent {
  id: string;
  date: string;
  badge: string;
  title: string;
  description: string;
  status: EventStatus;
  isOffer?: boolean;
  isChallenge?: boolean;
  isVictory?: boolean;
  emailData?: EmailData;
}

export interface EmailData {
  sender: string;
  senderRole: string;
  subject: string;
  preview: string;
}

export interface Phase {
  id: string;
  number: string;
  name: string;
  icon: string;
  note?: string;
  events: TimelineEvent[];
}

export const stats = {
  days: 125,
  milestones: 26,
  reschedules: 3,
  offer: "₹14.2 LPA",
  role: "Business Technology Solutions Associate",
  company: "ZS Associates",
  startDate: "Mar 17, 2026",
  endDate: "Jul 20, 2026",
  offerDate: "20 July 2026",
  offerType: "PPO · FTE",
};

export const phases: Phase[] = [
  {
    id: "awareness",
    number: "01",
    name: "Awareness",
    icon: "Target",
    events: [
      {
        id: "evt-01",
        date: "MAR 17",
        badge: "REGISTERED",
        title: "Webinar Registration",
        description: `Registered for "Unlock Your Future at ZS" — Campus Beats info session.`,
        status: "muted",
        emailData: {
          sender: "ZS Associates Campus Team",
          senderRole: "Campus Recruiting",
          subject: "Unlock Your Future at ZS — Webinar Confirmation",
          preview:
            "Thank you for registering for our Campus Beats webinar. Your spot is confirmed for March 18, 2026.",
        },
      },
      {
        id: "evt-02",
        date: "MAR 18",
        badge: "ATTENDED",
        title: "Campus Beats Webinar",
        description: "Live session covering roles and the selection process.",
        status: "muted",
      },
    ],
  },
  {
    id: "hackathon",
    number: "02",
    name: "Hackathon & Screening",
    icon: "Code2",
    events: [
      {
        id: "evt-03",
        date: "APR 12",
        badge: "REGISTERED",
        title: 'Team "AlgoRhythm" Registered',
        description: "Team formed for the Campus Beats Tech Challenge.",
        status: "muted",
      },
      {
        id: "evt-04",
        date: "APR 17",
        badge: "CONFIRMED",
        title: "Tech Challenge Registration Confirmed",
        description: "Hackathon slot locked in.",
        status: "muted",
        emailData: {
          sender: "ZS Campus Beats",
          senderRole: "Tech Challenge",
          subject: "Your Tech Challenge Registration is Confirmed",
          preview:
            "We're excited to confirm your team's registration for the ZS Campus Beats Tech Challenge. Your slot is locked in.",
        },
      },
      {
        id: "evt-05",
        date: "APR 22",
        badge: "BRIEFED",
        title: "Team Captain Briefing",
        description: "Problem statement walkthrough for team captains.",
        status: "muted",
      },
      {
        id: "evt-06",
        date: "APR 25",
        badge: "COMPLETED",
        title: "Hackathon Day",
        description:
          "Round 2 (Python assessment) hit scoring issues — ZS extended the deadline and adjusted scoring.",
        status: "gold",
        isChallenge: true,
      },
      {
        id: "evt-07",
        date: "APR 25",
        badge: "ASSIGNED",
        title: "MCQ Assessment Assigned",
        description: "Next-stage online assessment issued same day.",
        status: "blue",
      },
    ],
  },
  {
    id: "shortlisting",
    number: "03",
    name: "Shortlisting",
    icon: "Trophy",
    events: [
      {
        id: "evt-08",
        date: "APR 30",
        badge: "ANNOUNCED",
        title: "Top Teams List Announced",
        description: "Results of the Tech Challenge published.",
        status: "blue",
      },
      {
        id: "evt-09",
        date: "MAY 01",
        badge: "SHORTLISTED",
        title: "Confirmed as a Top Team",
        description: "PPO / PPI interview track opens.",
        status: "gold",
        isVictory: true,
      },
      {
        id: "evt-10",
        date: "MAY 01",
        badge: "SUBMITTED",
        title: "BTSA PPI Application Submitted",
        description:
          "Business Technology Solutions Associate — Campus Beats PPI 2026.",
        status: "muted",
      },
      {
        id: "evt-11",
        date: "MAY 08",
        badge: "ADVANCED",
        title: "Advanced to Communication Assessment",
        description:
          "Moved past the Tech Challenge stage into the comms evaluation track.",
        status: "blue",
      },
      {
        id: "evt-12",
        date: "MAY 09",
        badge: "ASSIGNED",
        title: "Verbal Assessment Assigned",
        description: "Online test — Phase 2 of the process.",
        status: "blue",
      },
    ],
  },
  {
    id: "scheduling",
    number: "04",
    name: "Interview Scheduling",
    icon: "Calendar",
    note: "3 changes in 48 hrs",
    events: [
      {
        id: "evt-13",
        date: "MAY 12",
        badge: "SHORTLISTED",
        title: "Shortlisted for Interviews",
        description: "MSIT TPO shared interview rounds and prep material.",
        status: "gold",
        emailData: {
          sender: "MSIT TPO",
          senderRole: "Training & Placement Office",
          subject: "ZS Associates — Interview Shortlist & Preparation Material",
          preview:
            "Congratulations! You have been shortlisted for the ZS Associates interview process. Please find the preparation material attached.",
        },
      },
      {
        id: "evt-14",
        date: "JUN 03",
        badge: "UPDATED",
        title: "Interview Schedule Instructions Updated",
        description:
          "TPO forwarded revised instructions for the Decision Analytics Associate track.",
        status: "muted",
      },
      {
        id: "evt-15",
        date: "JUN 13",
        badge: "SCHEDULED",
        title: "Round 1 Scheduled",
        description: "Case/Tech Round 1 set for Jun 15, 1:00–2:00 PM IST.",
        status: "blue",
      },
      {
        id: "evt-16",
        date: "JUN 15",
        badge: "CHANGED",
        title: "Round 1 Slot Changed",
        description: "Queue number changed — pulled from the waiting room.",
        status: "red",
        isChallenge: true,
      },
      {
        id: "evt-17",
        date: "JUN 16",
        badge: "RESCHEDULED",
        title: "Round 1 Rescheduled",
        description: "Moved to Jun 17, 6:30–7:30 PM IST.",
        status: "red",
        isChallenge: true,
      },
      {
        id: "evt-18",
        date: "JUN 17 · AM",
        badge: "QUEUED",
        title: "Panel Assigned",
        description: "In queue, panel confirmed for the day.",
        status: "muted",
      },
      {
        id: "evt-19",
        date: "JUN 17 · PM",
        badge: "CHANGED",
        title: "Slot Changed Again",
        description: "Operational change — moved once more, same day.",
        status: "red",
        isChallenge: true,
      },
      {
        id: "evt-20",
        date: "JUN 17 · EVE",
        badge: "CONFIRMED",
        title: "Final Slot Confirmed",
        description:
          "Locked at 3:30–4:30 PM IST — third and final time for R1.",
        status: "gold",
      },
    ],
  },
  {
    id: "interviews",
    number: "05",
    name: "Interviews",
    icon: "Brain",
    events: [
      {
        id: "evt-21",
        date: "JUN 18",
        badge: "COMPLETED",
        title: "Round 1 Interview — Case/Tech",
        description: "First round conducted, after three reschedules.",
        status: "gold",
      },
      {
        id: "evt-22",
        date: "JUN 23",
        badge: "SCHEDULED",
        title: "Round 2 Scheduled",
        description: "Case/Tech Round 2 set for Jun 24, 3:00–4:00 PM IST.",
        status: "blue",
      },
      {
        id: "evt-23",
        date: "JUN 24",
        badge: "COMPLETED",
        title: "Round 2 Interview — Case/Tech",
        description: "Second and final interview round conducted.",
        status: "gold",
      },
      {
        id: "evt-24",
        date: "JUN 30",
        badge: "SENT",
        title: "Follow-up Correspondence",
        description: "Messages sent following up after Round 2.",
        status: "muted",
      },
    ],
  },
  {
    id: "outcome",
    number: "06",
    name: "Outcome",
    icon: "Sparkles",
    events: [
      {
        id: "evt-25",
        date: "JUL 17",
        badge: "DECIDED",
        title: "ZS Finalizes Decision with TPO",
        description:
          "Offer sent to MSIT TPO by ZS's campus team — not yet visible to candidates.",
        status: "blue",
      },
      {
        id: "evt-26",
        date: "JUL 20",
        badge: "★ OFFER",
        title: "PPO Offer Received — BTSA, FTE",
        description: "TPO forwarded the offer. Acceptance form due Jul 24.",
        status: "gold",
        isOffer: true,
        emailData: {
          sender: "MSIT TPO → ZS Associates",
          senderRole: "Training & Placement Office",
          subject:
            "Pre-Placement Offer — Business Technology Solutions Associate",
          preview:
            "We are delighted to extend a Pre-Placement Offer (PPO) for the position of Business Technology Solutions Associate at ZS Associates. Compensation: ₹14.2 LPA. Please complete the acceptance form by July 24, 2026.",
        },
      },
    ],
  },
];

export const challengeMoments = [
  {
    id: "challenge-1",
    title: "Python Assessment Scoring Failure",
    date: "APR 25",
    description:
      "During the hackathon, Round 2's Python assessment encountered a critical scoring system failure. ZS had to extend the deadline and recalibrate scoring — a moment of uncertainty that tested every team.",
    icon: "AlertTriangle",
    type: "system_failure" as const,
  },
  {
    id: "challenge-2",
    title: "Three Interview Reschedules in 48 Hours",
    date: "JUN 15–17",
    description:
      "R1 was scheduled, then the queue number changed. It was rescheduled, then moved again on the same day. Three separate changes over 48 hours, each requiring a mental reset and fresh preparation.",
    icon: "RefreshCw",
    type: "reschedule" as const,
  },
  {
    id: "challenge-3",
    title: "26 Days of Silence",
    date: "JUN 30 – JUL 17",
    description:
      "After both interview rounds, 26 days passed without a word. Every morning felt like the longest wait. The silence was the hardest part.",
    icon: "Clock",
    type: "waiting" as const,
  },
];

export const reflectionText = [
  "This wasn't just a placement process.",
  "It was 125 days of uncertainty,",
  "preparation,",
  "waiting,",
  "rescheduling,",
  "interviews,",
  "and persistence.",
  "Eventually,",
  "it became my first full-time offer.",
];

export const journeyStages = [
  { id: "registration", label: "Registration", icon: "UserCheck", phase: "01" },
  { id: "hackathon", label: "Hackathon", icon: "Code2", phase: "02" },
  { id: "top-team", label: "Top Team", icon: "Trophy", phase: "03" },
  { id: "communication", label: "Communication", icon: "MessageSquare", phase: "03" },
  { id: "interviews", label: "Interviews", icon: "Brain", phase: "05" },
  { id: "offer", label: "Offer", icon: "Star", phase: "06" },
];
