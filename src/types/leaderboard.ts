
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface StudentRank {
  tier: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
  color: string;
  minPoints: number;
}

export interface LeaderboardStudent {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  achievements: Achievement[];
  completedCourses: number;
  tier: StudentRank["tier"];
}
