import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, CheckCircle, Circle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ChallengesList() {
  const challenges = [
    {
      id: 1,
      title: "Study Streak",
      description: "Study for at least 30 minutes every day for 7 days",
      progress: 5,
      total: 7,
      reward: "50 points",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Resource Explorer",
      description: "Access 5 different well-being resources",
      progress: 3,
      total: 5,
      reward: "30 points",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Community Contributor",
      description: "Make 3 helpful comments in the community forum",
      progress: 3,
      total: 3,
      reward: "40 points + Badge",
      status: "completed",
    },
    {
      id: 4,
      title: "Mood Tracker",
      description: "Log your mood for 10 consecutive days",
      progress: 0,
      total: 10,
      reward: "60 points",
      status: "not-started",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-primary" />
          Challenges
        </CardTitle>
        <Badge variant="outline" className="ml-2">
          120 Points
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{challenge.title}</h3>
                {challenge.status === "completed" ? (
                  <Badge className="bg-green-500">Completed</Badge>
                ) : challenge.status === "in-progress" ? (
                  <Badge variant="outline">In Progress</Badge>
                ) : (
                  <Badge variant="outline" className="bg-muted text-muted-foreground">
                    Not Started
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>
                    {challenge.progress}/{challenge.total}
                  </span>
                </div>
                <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Reward: {challenge.reward}</span>
                  {challenge.status === "completed" ? (
                    <Button variant="outline" size="sm" disabled>
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Claimed
                    </Button>
                  ) : challenge.status === "in-progress" ? (
                    <Button variant="outline" size="sm">
                      Continue
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Circle className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            View All Challenges
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
