import { Cpu, Database, Settings, Code, TestTube } from "lucide-react";

const skillGroups = [
  {
    title: "Automation",
    color: "primary",
    icon: Cpu,
    skills: ["Selenium", "UFT/QTP", "Java", "Python", "Fitnesse", "Rest Assured", "Postman"]
  },
  {
    title: "Data Science",
    color: "secondary",
    icon: Database,
    skills: ["NumPy", "Pandas", "Tableau", "PowerBI", "SQL", "MongoDB", "Data Analysis"]
  },
  {
    title: "Testing & QA",
    color: "primary",
    icon: TestTube,
    skills: ["BDD/Cucumber", "API Testing", "OMS/WMS Testing", "Performance Testing", "Integration Testing"]
  },
  {
    title: "Management",
    color: "secondary",
    icon: Settings,
    skills: ["Jira", "ALM", "Agile/Scrum", "Team Leadership", "Strategy", "CI/CD"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono">Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primary">//</span> Intelligence Orbit
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A comprehensive toolkit spanning automation, data science, and quality architecture—built over 12+ years of hands-on engineering.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          const isPrimary = group.color === "primary";
          
          return (
            <div
              key={group.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isPrimary ? "bg-primary/5" : "bg-secondary/5"
              }`} />
              
              {/* Header */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isPrimary 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "bg-secondary/10 text-secondary border border-secondary/20"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isPrimary
                        ? "bg-primary/10 text-primary/90 border border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                        : "bg-secondary/10 text-secondary/90 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                isPrimary ? "bg-primary" : "bg-secondary"
              } blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`} />
            </div>
          );
        })}
      </div>

      {/* Stats Bar */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "12+", label: "Years Experience" },
          { value: "9", label: "Major Projects" },
          { value: "50+", label: "Test Frameworks" },
          { value: "100%", label: "Quality Focus" }
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-muted/30 border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
          >
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
