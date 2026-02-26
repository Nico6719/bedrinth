import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar skeleton */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div>
            <Skeleton className="h-6 w-16 mb-3" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={`tag-${i}`} className="h-7 w-16 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-end">
            <Skeleton className="h-9 w-64" />
          </div>
          <Skeleton className="h-5 w-40" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={`card-${i}`} className="h-48 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
