import Skeleton from '../ui/Skeleton'

export default function NewsCardSkeleton({ showDescription }: { showDescription?: boolean }) {
    return (
        <div className="p-8 border border-app-border rounded-2xl h-full">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-4" />

            {showDescription && (
                <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            )}

            <Skeleton className="h-3 w-32 opacity-70" />
        </div>
    )
}
