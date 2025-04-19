import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Plus } from "lucide-react"

export function UpcomingReminders() {
  const reminders = [
    {
      title: "Math Assignment",
      date: "Today, 11:59 PM",
      priority: "high",
    },
    {
      title: "Study Group Meeting",
      date: "Tomorrow, 3:00 PM",
      priority: "medium",
    },
    {
      title: "Physics Quiz",
      date: "Friday, 10:00 AM",
      priority: "high",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Upcoming Reminders</CardTitle>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div
                className={`w-2 h-2 mt-2 rounded-full ${
                  reminder.priority === "high"
                    ? "bg-red-500"
                    : reminder.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
              />
              <div className="flex-1">
                <p className="font-medium">{reminder.title}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="h-3 w-3 mr-1" />
                  {reminder.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4" size="sm">
          View All Reminders
        </Button>
      </CardContent>
    </Card>
  )
}
