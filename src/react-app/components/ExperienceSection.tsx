import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Blue Yonder",
    role: "Senior QA Architect",
    period: "2020 - Present",
    location: "Bangalore",
    isCurrent: true,
    highlights: [
      "Leading quality architecture for enterprise supply chain solutions",
      "OMS/WMS and Rest API testing expertise",
      "Driving automation transformation initiatives"
    ]
  },
  {
    company: "Iff Supply Chain",
    role: "Lead Test Engineer",
    period: "2017 - 2020",
    location: "India",
    isCurrent: false,
    highlights: [
      "Architected comprehensive test frameworks for OMS/WMS systems",
      "Led API testing strategy and implementation",
      "Managed cross-functional QA teams"
    ]
  },
  {
    company: "Previous Ventures",
    role: "Test Automation Engineer",
    period: "2012 - 2017",
    location: "India",
    isCurrent: false,
    highlights: [
      "Built automation frameworks using Selenium and UFT",
      "Implemented BDD testing with Cucumber",
      "Developed data-driven testing solutions"
    ]
  },
  {
    company: "FeelTipTop",
    role: "Co-founder & QA Lead",
    period: "2011 - 2012",
    location: "India",
    isCurrent: false,
    highlights: [
      "Co-founded semantic search engine startup",
      "Established quality processes from ground up",
      "Full-stack testing and product development"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-secondary" />
          <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono">Career</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-secondary">//</span> Execution Pipeline
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A 12-year trajectory of engineering excellence, from startup co-founder to enterprise quality architect.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-muted" />

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                exp.isCurrent 
                  ? "bg-primary border-primary shadow-[0_0_20px_rgba(14,165,233,0.5)] animate-pulse" 
                  : "bg-background border-muted-foreground"
              }`} />

              {/* Content Card */}
              <div className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 ${
                exp.isCurrent ? "border-primary/30" : "border-border"
              }`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/30">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
