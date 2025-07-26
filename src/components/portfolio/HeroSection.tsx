import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-purple rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-tech-cyan rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-tech-blue rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in opacity-0 animation-fill-forwards">
            <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium">
              <span className="animate-pulse mr-2">🚀</span>
              Available for opportunities
            </Badge>
            
            
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight animate-fade-in opacity-0 animation-fill-forwards" style={{ animationDelay: '0.4s' }}>
              Tejashree V
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light animate-fade-in opacity-0 animation-fill-forwards" style={{ animationDelay: '0.6s' }}>
              AI Solutions Developer | Backend Developer | Competitive Programmer
            </p>
            
            {/* Improved bio with better structure */}
            <div className="text-lg text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed space-y-4 animate-fade-in opacity-0 animation-fill-forwards" style={{ animationDelay: '0.8s' }}>
              <p className="text-xl">
                I'm an AI/DS student who loves diving deep into cutting-edge tech — from LLMs and Deep Learning to Gen AI product development and solid backend systems. I've solved 300+ coding problems because, I am addicted to the feeling of getting AC for my Testcases
              </p>
              
              {isExpanded && (
                <>
                  <p className="animate-fade-in">
                    But tech isn't my only playground. I'm endlessly fascinated by psychology and neuroscience — while everyone's gazing at outer space mysteries, I believe the biggest unexplored universe sits right inside our heads: the human mind.
                  </p>
                  <p className="animate-fade-in">
                    As a Vipassana practitioner, I've learned to slow down and look within... unless I'm on a tennis court (or any racket sport) where I'm all speed and power. If any of this resonates — whether it's AI, the brain, or the perfect forehand — let's connect! 
                    <span className="text-purple-400 font-medium"> (Bonus points if you bring snacks) 🍿</span>
                  </p>
                </>
              )}
              
                              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-tech-purple hover:text-tech-cyan transition-colors duration-200 flex items-center mx-auto mt-4 group"
              >
                {isExpanded ? 'Show less' : 'Read more about me'}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} group-hover:scale-110`} />
              </button>
            </div>
          </div>

          <div className="animate-fade-in opacity-0 animation-fill-forwards flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" style={{ animationDelay: '1s' }}>
            <a href = "https://wa.me/918838727496" target="_blank" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group transform hover:scale-105 px-8 py-4 rounded-full shadow-lg">
              
              Let's Connect
            </a>
            <a 
              href="https://drive.google.com/file/d/1ks7UH1vEnoxq6zkqHGi1ED6Yo1vXH6gC/view?usp=sharing" 
              download="Tejashree_V_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center border-2 border-tech-purple text-tech-purple hover:bg-tech-purple/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Peek my Resume
            </a>
          </div>

          <div className="animate-fade-in opacity-0 animation-fill-forwards flex justify-center space-x-8 mb-16" style={{ animationDelay: '1.2s' }}>
            <a 
              href="https://github.com/Tejahereppl" 
              className="p-4 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-7 w-7 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tejashree-v-97496722a/" 
              className="p-4 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="mailto:tejashreev1804@gmail.com" 
              className="p-4 rounded-full bg-surface hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Mail className="h-7 w-7 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Enhanced Stats with hover effects */}
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in opacity-0 animation-fill-forwards group cursor-pointer" style={{ animationDelay: '1.4s' }}>
              <div className="text-4xl md:text-5xl font-black text-tech-cyan group-hover:scale-110 transition-transform duration-300">300+</div>
              <div className="text-sm text-muted-foreground group-hover:opacity-80 transition-opacity">Problems Solved</div>
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-fill-forwards group cursor-pointer" style={{ animationDelay: '1.6s' }}>
              <div className="text-4xl md:text-5xl font-black text-tech-purple group-hover:scale-110 transition-transform duration-300">9.3</div>
              <div className="text-sm text-muted-foreground group-hover:opacity-80 transition-opacity">CGPA</div>
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-fill-forwards group cursor-pointer" style={{ animationDelay: '1.8s' }}>
              <div className="text-4xl md:text-5xl font-black text-success group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-sm text-muted-foreground group-hover:opacity-80 transition-opacity">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-purple rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-fill-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};