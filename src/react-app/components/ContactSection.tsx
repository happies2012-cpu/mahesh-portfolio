import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, Activity } from "lucide-react";

const PROFILE_IMAGE = "https://019c9e9e-e11b-7a3d-8f03-84cf7d31d92e.mochausercontent.com/image.png_6363.png";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Send className="w-5 h-5 text-secondary" />
          <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono">Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-secondary">//</span> Connect
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Ready to discuss your next quality initiative? Let's architect something exceptional together.
        </p>
      </div>

      {/* Contact Card */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={PROFILE_IMAGE}
              alt="Mahesh Guptha"
              className="w-16 h-16 rounded-xl object-cover border-2 border-primary/30"
            />
            <div>
              <h3 className="text-xl font-bold">Mahesh Guptha</h3>
              <p className="text-muted-foreground text-sm">Strategic Co-founder • Quality Architect</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:k.maheshguptha@gmail.com"
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">k.maheshguptha@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919845983421"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">WhatsApp</p>
                <p className="font-medium group-hover:text-[#25D366] transition-colors">+91 98459 83421</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-muted text-muted-foreground flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Location</p>
                <p className="font-medium">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
            <a
              href="https://linkedin.com/in/maheshguptha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0077B5]/10 text-[#0077B5] rounded-lg border border-[#0077B5]/20 hover:bg-[#0077B5]/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/happies2012-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-muted/50 text-foreground rounded-lg border border-border hover:border-foreground/30 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>

        {/* Right - Message Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
          <form action="https://formsubmit.co/k.maheshguptha@gmail.com" method="POST" className="space-y-4">
            {/* Disable FormSubmit Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* System Status Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-mono text-muted-foreground">
                STATUS: <span className="text-emerald-400">ONLINE</span>
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              LOCATION: <span className="text-foreground">ASIA/CALCUTTA</span>
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              MODE: <span className="text-primary">STRATEGIC GROWTH</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mahesh Guptha. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
