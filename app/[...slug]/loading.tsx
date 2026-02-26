import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <Skeleton className="h-5 w-32 mb-6" />

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-start gap-6">
            <Skeleton className="w-24 h-24 rounded-xl shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-9 w-64" />
              <Skeleton className="h-5 w-full max-w-lg" />
            </div>
          </div>
          <Skeleton className="h-96 rounded-xl" />
        </div>

        <div className="space-y-6">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
