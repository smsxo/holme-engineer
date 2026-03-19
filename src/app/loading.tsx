export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="h-6 w-32 rounded-full bg-border animate-pulse" />
            <div className="mt-6 h-10 w-full max-w-xl rounded-lg bg-border animate-pulse" />
            <div className="mt-4 h-10 w-3/4 max-w-xl rounded-lg bg-border animate-pulse" />
            <div className="mt-6 h-5 w-full max-w-lg rounded bg-surface animate-pulse" />
            <div className="mt-2 h-5 w-2/3 max-w-lg rounded bg-surface animate-pulse" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-6"
              >
                <div className="h-6 w-6 rounded bg-border animate-pulse" />
                <div className="mt-5 h-5 w-3/4 rounded bg-border animate-pulse" />
                <div className="mt-3 h-4 w-full rounded bg-surface animate-pulse" />
                <div className="mt-1 h-4 w-2/3 rounded bg-surface animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
