import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ResourcesFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search resources..." className="pl-8" />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="mental-health" />
              <Label htmlFor="mental-health">Mental Health</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="meditation" />
              <Label htmlFor="meditation">Meditation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="physical-health" />
              <Label htmlFor="physical-health">Physical Health</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="stress-management" />
              <Label htmlFor="stress-management">Stress Management</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sleep" />
              <Label htmlFor="sleep">Sleep</Label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Format</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="articles" />
              <Label htmlFor="articles">Articles</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="videos" />
              <Label htmlFor="videos">Videos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="podcasts" />
              <Label htmlFor="podcasts">Podcasts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interactive" />
              <Label htmlFor="interactive">Interactive</Label>
            </div>
          </div>
        </div>

        <Button className="w-full" variant="outline">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  )
}
