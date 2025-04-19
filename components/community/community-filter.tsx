"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CommunityFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search discussions..." className="pl-8" />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="academic" />
              <Label htmlFor="academic">Academic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="wellbeing" />
              <Label htmlFor="wellbeing">Well-being</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="social" />
              <Label htmlFor="social">Social</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="career" />
              <Label htmlFor="career">Career</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="general" />
              <Label htmlFor="general">General</Label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Sort By</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="recent" checked />
              <Label htmlFor="recent">Most Recent</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="popular" />
              <Label htmlFor="popular">Most Popular</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="active" />
              <Label htmlFor="active">Most Active</Label>
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
