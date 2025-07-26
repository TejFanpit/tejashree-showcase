import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/tejashreev1804",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/tejashreev",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:tejashreev1804@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-surface/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tejashree V
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI Solutions Developer passionate about creating innovative technology solutions 
                and competitive programming.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-tech-cyan transition-colors">
                  About
                </a>
                <a href="#experience" className="text-muted-foreground hover:text-tech-cyan transition-colors">
                  Experience
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-tech-cyan transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-muted-foreground hover:text-tech-cyan transition-colors">
                  Skills
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  tejashreev1804@gmail.com
                </p>
                <p className="text-muted-foreground">
                  +91-8838727496
                </p>
                <p className="text-muted-foreground">
                  Chennai, India
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 bg-surface rounded-full hover:bg-gradient-primary transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
            <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Tejashree V. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of caffeine ☕</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-tech-purple/30 text-tech-purple hover:bg-tech-purple/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};