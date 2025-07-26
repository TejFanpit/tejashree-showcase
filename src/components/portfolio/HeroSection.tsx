import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-purple rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-tech-cyan rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-tech-blue rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              👋 Available for opportunities
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Tejashree V
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              AI Solutions Developer & Competitive Programmer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              CS Student at Shiv Nadar University with expertise in AI/ML, building scalable solutions 
              and solving 300+ coding problems. Passionate about creating innovative tech solutions.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-tech-purple text-tech-purple hover:bg-tech-purple/10">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          <div className="animate-scale-in flex justify-center space-x-6">
            <a 
              href="https://github.com/tejashreev1804" 
              className="p-3 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/tejashreev" 
              className="p-3 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="mailto:tejashreev1804@gmail.com" 
              className="p-3 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-tech-cyan">300+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl font-bold text-tech-purple">9.3</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="text-3xl font-bold text-success">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-purple rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};