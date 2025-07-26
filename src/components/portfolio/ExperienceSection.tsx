import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp, Bot, Database } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Fanpit",
      duration: "Jun 2025 - Ongoing",
      type: "Current",
      achievements: [
        "Engineered Fanpit's first loyalty and rewards backend platform, enabling seamless user redemptions and engagement",
        "Designed and developed scalable REST APIs using TypeScript and NestJS to power the core platform services",
        "Implementing a high-performance search engine with Typesense, enabling fast and accurate discovery of brands, products, and events",
        "Automating data synchronization by building a MongoDB webhook pipeline to cache updates and dynamically index data on an isolated Typesense server, reducing operational costs"
      ],
      technologies: ["TypeScript", "NestJS", "Typesense", "MongoDB", "Backend Development", "API Design"],
      icon: Database
    },
    
    {
      title: "AI Solutions Intern",
      company: "InnovistAI Solutions", 
      duration: "May 2025 - Jun 2025",
      type: "Completed",
      achievements: [
        "Cost-Effective Bot for Algorithms: Developed an ultra cost-efficient website assistant inspired by Samsung's conversational bot, achieving a 30% increase in visitor conversion rate through optimized NLP pipelines and minimal server usage",
        "Automated Social Media Complaints for IOB: Designed and deployed a scalable, AI-driven social media customer support bot for Indian Overseas Bank that runs on a scheduler to continuously scan direct messages and comments across YouTube, Instagram, Facebook, and Twitter. Built an intelligent complaint classification pipeline using NLP models (spaCy) to distinguish actionable complaints from general queries, followed by dynamic draft reply generation using LLM clients (Gemini & Claude). Implemented a human-in-the-loop approval queue that allows administrators to review, approve, or modify AI-generated replies, after which the bot autonomously posts responses on IOB’s behalf. This system reduced manual intervention by over 70%, accelerated customer response times, and enabled IOB to handle significantly higher customer interaction volumes."
      ],
      technologies: [
        "Playwright",
        "Gemini & Claude Clients",
        "spaCy",
        "Twitter API",
        "Selenium",
        "Browser Automation",
        "FastAPI (Backend)",
        "PostgreSQL"
      ],
      icon: Bot
    }];
    

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on experience in AI solutions and backend development, delivering impactful projects 
              for real-world applications.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                        <exp.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground group-hover:text-tech-cyan transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <p className="text-lg font-medium text-tech-purple">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <Badge 
                        variant={exp.type === "Current" ? "default" : "secondary"}
                        className={exp.type === "Current" ? "bg-gradient-primary" : ""}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-success" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline" 
                            className="border-tech-purple/30 text-tech-purple hover:bg-tech-purple/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};