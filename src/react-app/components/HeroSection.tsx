import { ArrowDown, Sparkles } from "lucide-react";

const skills = [
  "Test Automation",
  "Data Science", 
  "Quality Architecture",
  "API Testing",
  "CI/CD Pipelines"
];

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      {/* Location & Time */}
      <div className="mb-8">
        <p className="text-muted-foreground font-mono text-sm">
          Bangalore, India • {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
        </p>
      </div>

      {/* Introduction Label */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground text-sm uppercase tracking-widest">Introduction</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
          Architecting Quality
        </span>
        <br />
        <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
          Through Intelligence
        </span>
      </h1>

      {/* Bio */}
      <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
        12+ Years of Engineering Reliability. Building the bridge between 
        <span className="text-primary"> Automation</span> and 
        <span className="text-secondary"> Autonomous Intelligence</span>. 
        Strategic Co-founder driving quality transformation.
      </p>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-3 mb-12">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-0">
        <a 
          href="#skills" 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
          <span className="text-sm font-mono">Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}
