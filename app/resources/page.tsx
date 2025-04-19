import { ResourcesHeader } from "@/components/resources/resources-header"
import { ResourcesList } from "@/components/resources/resources-list"
import { ResourcesFilter } from "@/components/resources/resources-filter"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-6">
      <ResourcesHeader />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="md:col-span-1">
          <ResourcesFilter />
        </div>
        <div className="md:col-span-3">
          <ResourcesList />
        </div>
      </div>
    </div>
  )
}
