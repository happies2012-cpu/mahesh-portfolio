import { ProfileSidebar } from "./components/ProfileSidebar";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { MobileHeader } from "./components/MobileHeader";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <MobileHeader />
      <ProfileSidebar />
      <Navigation />
      
      {/* Main Content */}
      <main className="lg:ml-96 lg:mr-24 px-6 lg:px-12 pt-20 lg:pt-0">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
