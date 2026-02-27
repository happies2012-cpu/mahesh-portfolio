import { Home, Layers, Briefcase, User, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Core", href: "#hero" },
  { icon: Layers, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: User, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Connect", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-2 flex flex-col gap-1">
        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = activeSection === href.slice(1);
          return (
            <a
              key={label}
              href={href}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute right-full mr-3 px-2 py-1 bg-card border border-border rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
