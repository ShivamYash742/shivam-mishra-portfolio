import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Journey from "./components/Journey";
import Timeline from "./components/Timeline";
import ChallengeCard from "./components/ChallengeCard";
import Victory from "./components/Victory";
import InterviewSection from "./components/InterviewSection";
import Offer from "./components/Offer";
import Reflection from "./components/Reflection";

export default function ZSCampusBeatsPage() {
  return (
    <main className="bg-[#050508] text-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats Overview */}
      <Stats />

      {/* 3. Journey visualization */}
      <Journey />

      {/* 4. Full sticky timeline */}
      <Timeline />

      {/* 5. Challenge moments */}
      <ChallengeCard />

      {/* 6. Top Team Victory */}
      <Victory />

      {/* 7. Interview section */}
      <InterviewSection />

      {/* 8. Final Offer */}
      <Offer />

      {/* 9. Reflection */}
      <Reflection />
    </main>
  );
}
