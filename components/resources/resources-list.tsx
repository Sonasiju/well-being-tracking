import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, Headphones, Clock, ExternalLink } from "lucide-react"

export function ResourcesList() {
  const resources = [
    {
      id: 1,
      title: "Managing Exam Stress: A Student's Guide",
      description:
        "Learn effective techniques to manage stress during exam periods, including breathing exercises, time management, and positive self-talk.",
      category: "Stress Management",
      format: "Article",
      icon: BookOpen,
      duration: "10 min read",
      link: "#",
    },
    {
      id: 2,
      title: "5-Minute Guided Meditation for Focus",
      description:
        "A short guided meditation designed to help students improve focus and concentration before studying or exams.",
      category: "Meditation",
      format: "Video",
      icon: Video,
      duration: "5 min watch",
      link: "#",
    },
    {
      id: 3,
      title: "Sleep Hygiene for Better Academic Performance",
      description:
        "Discover how improving your sleep habits can lead to better academic performance, memory retention, and overall well-being.",
      category: "Sleep",
      format: "Article",
      icon: BookOpen,
      duration: "8 min read",
      link: "#",
    },
    {
      id: 4,
      title: "Student Mental Health Podcast",
      description:
        "A podcast discussing common mental health challenges faced by students and strategies for maintaining good mental health during academic life.",
      category: "Mental Health",
      format: "Podcast",
      icon: Headphones,
      duration: "25 min listen",
      link: "#",
    },
    {
      id: 5,
      title: "Quick Exercise Routines for Busy Students",
      description:
        "Simple exercise routines that can be done in your dorm room or small space, designed to boost energy and reduce stress.",
      category: "Physical Health",
      format: "Video",
      icon: Video,
      duration: "15 min watch",
      link: "#",
    },
  ]

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "Article":
        return <BookOpen className="h-4 w-4" />
      case "Video":
        return <Video className="h-4 w-4" />
      case "Podcast":
        return <Headphones className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <Card key={resource.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <Badge variant="outline">{resource.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{resource.description}</p>
            <div className="flex items-center space-x-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                {getFormatIcon(resource.format)}
                <span className="ml-1">{resource.format}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {resource.duration}
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full" asChild>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Resource
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}

      <Button variant="outline" className="w-full">
        Load More
      </Button>
    </div>
  )
}
