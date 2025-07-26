import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Users, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate computer science student with a strong foundation in AI/ML and competitive programming, 
              actively contributing to innovative projects and building scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Education Card */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Academic Excellence</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-tech-cyan">Shiv Nadar University, Chennai</h4>
                    <p className="text-muted-foreground">Bachelor of Technology - Computer Science</p>
                    <p className="text-sm text-muted-foreground">Aug 2023 - Aug 2027</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">
                        CGPA: 9.3/10
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership & Activities */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Leadership & Activities</h3>
                    <p className="text-muted-foreground">Community Involvement</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-tech-purple mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">SNUC Coding Club Core Member</p>
                      <p className="text-sm text-muted-foreground">Competitive Programming Domain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-tech-cyan mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sports Captain</p>
                      <p className="text-sm text-muted-foreground">SNUC Women's Tennis Team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Table Tennis Player</p>
                      <p className="text-sm text-muted-foreground">University Team Member</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-tech-purple mb-2 group-hover:scale-110 transition-transform">
                  1545
                </div>
                <p className="text-sm text-muted-foreground">LeetCode Contest Rating</p>
                <Badge variant="secondary" className="mt-2">100 Days Badge</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2 group-hover:scale-110 transition-transform">
                  Top 20
                </div>
                <p className="text-sm text-muted-foreground">SNUC Hacks Finalist</p>
                <Badge variant="secondary" className="mt-2">125 Teams</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2 group-hover:scale-110 transition-transform">
                  30/30
                </div>
                <p className="text-sm text-muted-foreground">Unstop Perfect Scores</p>
                <Badge variant="secondary" className="mt-2">Multiple Weeks</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};