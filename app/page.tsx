import HeroSection from "@/components/HeroSection";
import KnowledgeBase from "@/components/KnowledgeBase";
import MetricsGrid from "@/components/MetricsGrid";
import Navigation from "@/components/Navigation";
import QuickLinks from "@/components/QuickLinks";
import TeamSpotlight from "@/components/TeamSpotlight";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <QuickLinks />
        <TeamSpotlight />
        <UpcomingEvents />
        <MetricsGrid />
        <KnowledgeBase />
      </main>
    </div>
  );
}
