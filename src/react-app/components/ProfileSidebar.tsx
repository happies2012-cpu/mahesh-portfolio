import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const PROFILE_IMAGE = "https://019c9e9e-e11b-7a3d-8f03-84cf7d31d92e.mochausercontent.com/image.png_6363.png";

export function ProfileSidebar() {
  return (
    <aside className="fixed left-6 top-6 bottom-6 w-80 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 flex flex-col overflow-hidden z-40 hidden lg:flex">
      {/* Logo & Status */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <span className="text-white font-bold text-lg">MG</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted-foreground font-mono">Available for projects</span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mx-auto mb-4">
        <div className="w-48 h-56 rounded-xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(14,165,233,0.2)]">
          <img
            src={PROFILE_IMAGE}
            alt="Mahesh Guptha"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full">
          <span className="text-xs font-semibold text-white font-mono">12+ YEARS</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-foreground tracking-wide">Mahesh Guptha</h2>
        <p className="text-sm text-muted-foreground mt-1">Quality Architect • Data Scientist</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-6">
        <a 
          href="mailto:k.maheshguptha@gmail.com" 
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          <Mail className="w-4 h-4 text-primary" />
          <span className="group-hover:underline">k.maheshguptha@gmail.com</span>
        </a>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-secondary" />
          <span>Bangalore, India</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {[
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Phone, href: "tel:9845983421", label: "Phone" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="mt-auto flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-muted to-muted/50 border border-border rounded-xl hover:border-primary/50 transition-all group"
      >
        <span className="font-medium">Initiate Strategy</span>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
        </div>
      </a>
    </aside>
  );
}
