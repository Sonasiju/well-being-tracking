import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Heart, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CommunityPosts() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
      category: "Academic",
      title: "Study techniques for final exams",
      content:
        "I'm struggling with preparing for my final exams. What study techniques do you find most effective for retaining information? I've tried flashcards but I'm not seeing results.",
      comments: 12,
      likes: 24,
      time: "2 hours ago",
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      category: "Well-being",
      title: "Managing stress during exam season",
      content:
        "Exam season is hitting me hard this year. I'm feeling overwhelmed and struggling to maintain a healthy balance. What are your go-to stress management techniques?",
      comments: 8,
      likes: 19,
      time: "5 hours ago",
    },
    {
      id: 3,
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      category: "Social",
      title: "Making friends as an international student",
      content:
        "I just moved here from abroad and I'm finding it challenging to make friends. Any advice for international students trying to build a social circle?",
      comments: 15,
      likes: 32,
      time: "Yesterday",
    },
  ]

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <Badge variant="outline">{post.category}</Badge>
            </div>
            <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{post.content}</p>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
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
