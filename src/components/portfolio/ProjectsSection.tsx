import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Book, FileText, MapPin, Chrome, Calendar } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive Book Reader",
      description: "Built an LLM-powered story interaction tool where users influence book narratives through AI-driven choices and personalized storytelling experiences.",
      technologies: ["Python", "LangChain", "FastAPI", "Pinecone", "PDFMiner"],
      features: [
        "LLM-powered narrative interaction",
        "Pinecone for fast context-aware retrieval",
        "Chunked embeddings for better context",
        "Real-time story adaptation"
      ],
      duration: "Mar 2025 - Ongoing",
      status: "In Development",
      icon: Book,
      color: "tech-purple"
    },
    {
      title: "Resume Optimizer",
      description: "Developed an AI-powered tool for resume-job match scoring and improvement suggestions with personalized portfolio generation from resume inputs.",
      technologies: ["React", "FastAPI", "Mistral", "Groq", "Vector Search"],
      features: [
        "AI-powered resume analysis",
        "Job matching algorithm",
        "Improvement suggestions",
        "Auto-generated portfolios"
      ],
      duration: "Feb 2025",
      status: "Hackathon Winner",
      icon: FileText,
      color: "tech-cyan"
    },
    {
      title: "Geofencing Attendance System",
      description: "Created a location-aware attendance application using virtual fences with enhanced detection logic and real-time alerts for accurate tracking.",
      technologies: ["Kotlin", "Google Maps SDK", "Twilio"],
      features: [
        "Virtual geofencing technology",
        "Real-time location tracking",
        "SMS notifications via Twilio",
        "Enhanced detection algorithms"
      ],
      duration: "Sep 2024 - Ongoing",
      status: "Active Development",
      icon: MapPin,
      color: "success"
    },
    {
      title: "Distraction Blocker",
      description: "Built a Chrome extension that intelligently scores and blocks distracting web pages, boosting user focus by 60-70% through automated filtering.",
      technologies: ["Chrome Extension", "Gemini API", "Chrome Dev Tools"],
      features: [
        "AI-powered distraction scoring",
        "Automated tab filtering",
        "Real-time page analysis",
        "60-70% focus improvement"
      ],
      duration: "Dec 2024",
      status: "Completed",
      icon: Chrome,
      color: "warning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
      case "Active Development":
        return "bg-info/20 text-info";
      case "Completed":
        return "bg-success/20 text-success";
      case "Hackathon Winner":
        return "bg-warning/20 text-warning";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative projects spanning AI/ML, web development, and mobile applications, 
              demonstrating technical expertise and problem-solving skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-${project.color}/20 rounded-full group-hover:scale-110 transition-transform`}>
                        <project.icon className={`h-6 w-6 text-${project.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-tech-cyan transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className="border-tech-purple/30 text-tech-purple hover:bg-tech-purple/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-tech-purple/30 text-tech-purple hover:bg-tech-purple/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-tech-cyan/30 text-tech-cyan hover:bg-tech-cyan/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more projects and contributions?
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};