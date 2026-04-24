import { MainLayout } from "@/layouts/MainLayout";
import { EvidenceSection } from "@/components/EvidenceSection";
import { Hero } from "@/components/Hero";
import { InsightsSection } from "@/components/InsightsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StackGrid } from "@/components/StackGrid";
import { StatsStrip } from "@/components/StatsStrip";
import { TimelineSection } from "@/components/TimelineSection";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <StatsStrip />
      <ProjectsSection />
      <StackGrid />
      <TimelineSection />
      <InsightsSection />
      <EvidenceSection />
    </MainLayout>
  );
}