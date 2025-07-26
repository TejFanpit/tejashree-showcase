import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink,
  MapPin,
  Code,
  Trophy,
  Calendar
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tejashreev1804@gmail.com",
      href: "mailto:tejashreev1804@gmail.com",
      color: "tech-purple"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8838727496",
      href: "tel:+918838727496",
      color: "tech-cyan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      color: "success"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tejashreev1804",
      color: "tech-purple",
      description: "View my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tejashreev",
      color: "tech-cyan",
      description: "Connect professionally"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/tejashreev",
      color: "warning",
      description: "Check my coding progress"
    },
    {
      icon: Trophy,
      label: "Codeforces",
      href: "https://codeforces.com/profile/tejashreev",
      color: "info",
      description: "Competitive programming profile"
    }
  ];

  const availability = {
    status: "Available",
    type: "Full-time opportunities",
    startDate: "August 2027",
    interests: ["AI/ML Engineer", "Backend Developer", "Software Engineer"]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow developers and technology enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-tech-purple" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className={`p-2 bg-${contact.color}/20 rounded-lg group-hover:scale-110 transition-transform`}>
                          <contact.icon className={`h-4 w-4 text-${contact.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className={`font-medium text-${contact.color} hover:underline`}
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-success" />
                    Availability
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge className="bg-success/20 text-success">
                        {availability.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Looking for</p>
                      <p className="font-medium">{availability.type}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Available from</p>
                      <p className="font-medium">{availability.startDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Interested roles</p>
                      <div className="flex flex-wrap gap-2">
                        {availability.interests.map((role, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links & Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Find Me Online</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-surface/50 rounded-lg hover:bg-surface transition-all duration-300 hover:scale-105 group"
                      >
                        <div className={`p-3 bg-${social.color}/20 rounded-full group-hover:scale-110 transition-transform`}>
                          <social.icon className={`h-5 w-5 text-${social.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-tech-cyan transition-colors">
                            {social.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-tech-cyan transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-primary p-1 rounded-lg">
                <div className="bg-background rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    Ready to Work Together?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Whether you have a project in mind, want to discuss opportunities, 
                    or just want to say hello, I'd love to hear from you!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      onClick={() => window.open('mailto:tejashreev1804@gmail.com')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-tech-purple text-tech-purple hover:bg-tech-purple/10"
                      onClick={() => window.open('https://linkedin.com/in/tejashreev', '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};