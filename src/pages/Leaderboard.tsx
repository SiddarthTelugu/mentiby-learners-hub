
import { Trophy, Medal, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { LeaderboardStudent } from "@/types/leaderboard";

const mockLeaderboardData: LeaderboardStudent[] = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg",
    points: 2500,
    rank: 1,
    achievements: [
      { id: "1", name: "Python Master", description: "Completed Python Course with Excellence", icon: "🐍" },
      { id: "2", name: "Quick Learner", description: "Completed 5 courses in a month", icon: "⚡" },
    ],
    completedCourses: 8,
    tier: "Diamond",
  },
  {
    id: "2",
    name: "Sarah Smith",
    avatar: "/placeholder.svg",
    points: 2200,
    rank: 2,
    achievements: [
      { id: "3", name: "Java Expert", description: "Mastered Java Programming", icon: "☕" },
    ],
    completedCourses: 6,
    tier: "Platinum",
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "/placeholder.svg",
    points: 1800,
    rank: 3,
    achievements: [
      { id: "4", name: "Web Wizard", description: "Completed Web Development Track", icon: "🌐" },
    ],
    completedCourses: 5,
    tier: "Gold",
  },
];

const tierColors = {
  Bronze: "bg-orange-400",
  Silver: "bg-gray-400",
  Gold: "bg-yellow-400",
  Platinum: "bg-purple-400",
  Diamond: "bg-blue-400",
};

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            Leaderboard
          </h1>
          <p className="text-text-secondary text-lg">
            Compete with fellow learners and earn achievements
          </p>
        </div>

        {/* Top 3 Students */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mockLeaderboardData.slice(0, 3).map((student, index) => (
            <Card key={student.id} className="relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${tierColors[student.tier]}`} />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {index === 0 && <Medal className="w-6 h-6 text-yellow-400" />}
                    {index === 1 && <Medal className="w-6 h-6 text-gray-400" />}
                    {index === 2 && <Medal className="w-6 h-6 text-orange-400" />}
                    <Badge variant="secondary">Rank #{student.rank}</Badge>
                  </div>
                  <Badge className={`${tierColors[student.tier]} text-white`}>
                    {student.tier}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{student.name}</h3>
                    <p className="text-text-muted">
                      {student.points} Points • {student.completedCourses} Courses
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {student.achievements.map((achievement) => (
                      <Badge
                        key={achievement.id}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <span>{achievement.icon}</span>
                        {achievement.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Students */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              All Students
            </CardTitle>
            <CardDescription>
              See how you rank against other learners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLeaderboardData.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-lg min-w-[2rem]">
                      #{student.rank}
                    </span>
                    <Avatar>
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{student.name}</h3>
                      <p className="text-sm text-text-muted">
                        {student.points} Points
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                      {student.completedCourses} Courses
                    </Badge>
                    <Badge className={`${tierColors[student.tier]} text-white`}>
                      {student.tier}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardPage;
