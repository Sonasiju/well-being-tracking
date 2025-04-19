import { CommunityHeader } from "@/components/community/community-header"
import { CommunityPosts } from "@/components/community/community-posts"
import { CommunityFilter } from "@/components/community/community-filter"
import { CreatePostButton } from "@/components/community/create-post-button"

export default function CommunityPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <CommunityHeader />
        <CreatePostButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="md:col-span-1">
          <CommunityFilter />
        </div>
        <div className="md:col-span-3">
          <CommunityPosts />
        </div>
      </div>
    </div>
  )
}
