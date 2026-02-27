import { Folder, Star, Code2 } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 9,
    title: "Iff Supply Chain Platform",
    category: "Enterprise",
    featured: true,
    description: "Comprehensive OMS/WMS testing framework with REST API automation for enterprise supply chain operations.",
    tech: ["Rest Assured", "Java", "Selenium", "SQL", "Jenkins"],
    highlights: ["End-to-end test coverage", "API automation suite", "Performance benchmarking"]
  },
  {
    id: 8,
    title: "Blue Yonder QA Architecture",
    category: "Enterprise",
    featured: true,
    description: "Quality architecture transformation for global supply chain software solutions.",
    tech: ["Python", "Selenium", "BDD", "CI/CD", "AWS"],
    highlights: ["Framework design", "Team leadership", "Process optimization"]
  },
  {
    id: 7,
    title: "Data Analytics Dashboard",
    category: "Data Science",
    featured: false,
    description: "Interactive business intelligence dashboards with automated data pipelines.",
    tech: ["Tableau", "PowerBI", "Python", "SQL"],
    highlights: ["Real-time analytics", "Custom visualizations"]
  },
  {
    id: 6,
    title: "Automated Regression Suite",
    category: "Automation",
    featured: false,
    description: "Scalable test automation framework reducing manual testing effort by 80%.",
    tech: ["Selenium", "TestNG", "Java", "Maven"],
    highlights: ["Parallel execution", "Cross-browser testing"]
  },
  {
    id: 5,
    title: "API Testing Framework",
    category: "Automation",
    featured: false,
    description: "Comprehensive REST API testing solution with dynamic data generation.",
    tech: ["Rest Assured", "Postman", "Newman", "JSON Schema"],
    highlights: ["Contract testing", "Mock services"]
  },
  {
    id: 4,
    title: "Performance Testing Suite",
    category: "Testing",
    featured: false,
    description: "Load and stress testing infrastructure for high-traffic applications.",
    tech: ["JMeter", "Gatling", "Grafana", "InfluxDB"],
    highlights: ["Scalability testing", "Bottleneck analysis"]
  },
  {
    id: 1,
    title: "FeelTipTop",
    category: "Startup",
    featured: true,
    description: "Co-founded semantic search engine startup with innovative NLP-powered discovery.",
    tech: ["Python", "NLP", "Machine Learning", "Full Stack"],
    highlights: ["Co-founder role", "Product development", "QA strategy"]
  }
];

const categories = ["All", "Enterprise", "Automation", "Data Science", "Startup"];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Folder className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primary">//</span> Project Hub
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A curated selection of projects showcasing expertise across automation, data science, and enterprise solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group relative bg-card/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 overflow-hidden ${
              project.featured ? "border-primary/20" : "border-border"
            }`}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/30">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            )}

            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Code2 className="w-4 h-4" />
                <span className="font-mono uppercase tracking-wide">{project.category}</span>
                <span className="text-border">•</span>
                <span className="font-mono">#{project.id.toString().padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted/50 text-xs text-muted-foreground rounded border border-border font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="text-xs text-secondary">• {h}</span>
              ))}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
