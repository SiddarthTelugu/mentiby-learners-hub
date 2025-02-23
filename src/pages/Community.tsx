
import { Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "5,000+" },
    { label: "Study Groups", value: "120" },
    { label: "Daily Discussions", value: "250+" },
  ];

  const discussions = [
    {
      title: "Python Best Practices",
      participants: 45,
      category: "Programming",
      active: true,
    },
    {
      title: "Java Spring Boot Tips",
      participants: 32,
      category: "Web Development",
      active: true,
    },
    {
      title: "DSA Problem Solving",
      participants: 78,
      category: "Algorithms",
      active: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Community Hub
          </h1>
          <p className="text-text-secondary text-lg">
            Connect, collaborate, and learn with fellow developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {communityStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Discussions</CardTitle>
            <CardDescription>
              Join ongoing discussions and share your knowledge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div
                  key={discussion.title}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                >
                  <div>
                    <h3 className="font-medium mb-1">{discussion.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{discussion.category}</Badge>
                      <span className="text-sm text-text-muted">
                        {discussion.participants} participants
                      </span>
                    </div>
                  </div>
                  {discussion.active && (
                    <Badge variant="success" className="bg-green-500">
                      Active
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
