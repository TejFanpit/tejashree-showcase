import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Trophy, Award, BookOpen } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "tech-purple",
      skills: [
        { name: "Python", level: 95, proficiency: "Advanced" },
        { name: "Java", level: 90, proficiency: "Advanced" },
        { name: "JavaScript", level: 85, proficiency: "Advanced" },
        { name: "TypeScript", level: 80, proficiency: "Intermediate" },
        { name: "C/C++", level: 85, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: Database,
      color: "tech-cyan",
      skills: [
        { name: "FastAPI", level: 90, proficiency: "Advanced" },
        { name: "React", level: 85, proficiency: "Advanced" },
        { name: "NestJS", level: 75, proficiency: "Intermediate" },
        { name: "Django", level: 80, proficiency: "Intermediate" },
        { name: "Flask", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      color: "success",
      skills: [
        { name: "LangChain", level: 90, proficiency: "Advanced" },
        { name: "TensorFlow", level: 80, proficiency: "Intermediate" },
        { name: "PyTorch", level: 75, proficiency: "Intermediate" },
        { name: "Vector Databases", level: 85, proficiency: "Advanced" },
        { name: "LLM Integration", level: 90, proficiency: "Advanced" }
      ]
    }
  ];

  const achievements = [
    {
      title: "Problem Solving",
      icon: Trophy,
      stats: [
        { label: "LeetCode Problems", value: "300+", color: "tech-purple" },
        { label: "Contest Rating", value: "1545", color: "tech-cyan" },
        { label: "Platforms", value: "5+", color: "success" }
      ]
    },
    {
      title: "Certifications",
      icon: Award,
      items: [
        "CNNs by Andrew Ng",
        "100 Days Python Challenge",
        "Generative AI Bootcamp 2025"
      ]
    },
    {
      title: "Core Concepts",
      icon: BookOpen,
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming", 
        "Database Management Systems",
        "Machine Learning & Deep Learning",
        "Computer Architecture"
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning multiple programming languages, frameworks, and technologies 
              with hands-on experience in AI/ML and competitive programming.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-${category.color}/20 rounded-full group-hover:scale-110 transition-transform`}>
                      <category.icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-lg group-hover:text-tech-cyan transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs border-${category.color}/30 text-${category.color}`}
                        >
                          {skill.proficiency}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements & Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-tech-cyan transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  {achievement.stats ? (
                    <div className="grid grid-cols-1 gap-4">
                      {achievement.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center p-4 bg-surface/50 rounded-lg">
                          <div className={`text-2xl font-bold text-${stat.color} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {achievement.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};