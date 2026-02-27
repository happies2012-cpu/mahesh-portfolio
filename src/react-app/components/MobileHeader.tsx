import { Menu, X } from "lucide-react";
import { useState } from "react";

const PROFILE_IMAGE = "https://019c9e9e-e11b-7a3d-8f03-84cf7d31d92e.mochausercontent.com/image.png_6363.png";

const navItems = [
  { label: "Core", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#contact" },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={PROFILE_IMAGE}
            alt="Mahesh Guptha"
            className="w-10 h-10 rounded-full object-cover border border-primary/30"
          />
          <div>
            <p className="font-semibold text-sm">Mahesh Guptha</p>
            <p className="text-xs text-muted-foreground">Quality Architect</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="px-4 py-4 border-t border-border bg-background">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-foreground hover:text-primary transition-colors border-b border-border last:border-0"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
