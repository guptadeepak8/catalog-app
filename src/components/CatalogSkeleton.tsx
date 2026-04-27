function SkeletonBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-md bg-[#eeeeeb] ${className}`} />;
}

export function ProductCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-lg border border-neutral-100 bg-[#fffefe] shadow-sm">
      <SkeletonBlock className="aspect-4/3 rounded-none bg-[#f1f1ee]" />
      <div className="grid gap-3 p-4">
        <SkeletonBlock className="h-5 w-3/4" />
        <div className="grid gap-2">
          <div className="flex items-center justify-between gap-3 border-t border-neutral-100 pt-2">
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-24" />
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-neutral-100 pt-2">
            <SkeletonBlock className="h-4 w-16" />
            <SkeletonBlock className="h-4 w-28" />
          </div>
        </div>
      </div>
    </article>
  );
}

export function HeaderSkeleton() {
  return (
    <header className="flex flex-col gap-3 border-b border-neutral-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="grid gap-3">
        <SkeletonBlock className="h-4 w-24" />
        <SkeletonBlock className="h-11 w-72 max-w-full" />
      </div>
      <div className="grid w-full max-w-xl gap-2">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-4/5" />
      </div>
    </header>
  );
}

export function CategoryPreviewSkeleton({ sections = 3 }: { sections?: number }) {
  return (
    <div className="grid gap-8">
      {Array.from({ length: sections }).map((_, sectionIndex) => (
        <section key={sectionIndex} className="grid gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="grid gap-2">
              <SkeletonBlock className="h-7 w-40" />
              <SkeletonBlock className="h-4 w-36" />
            </div>
            <SkeletonBlock className="h-10 w-28 rounded-full bg-white" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, cardIndex) => (
              <ProductCardSkeleton key={cardIndex} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function ItemDetailSkeleton() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-neutral-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:px-10">
        <div className="grid gap-5">
          <SkeletonBlock className="h-5 w-36" />
          <SkeletonBlock className="min-h-[320px] rounded-lg border border-neutral-100 bg-[#fffefe] shadow-sm sm:min-h-[460px]" />
        </div>

        <section className="grid content-start gap-6">
          <header className="grid gap-3 border-b border-neutral-100 pb-6">
            <SkeletonBlock className="h-4 w-28" />
            <SkeletonBlock className="h-12 w-80 max-w-full" />
          </header>

          <div className="grid overflow-hidden rounded-lg border border-neutral-100 bg-[#fffefe] shadow-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="grid gap-2 border-b border-neutral-100 px-5 py-4 last:border-b-0 sm:grid-cols-[160px_1fr] sm:gap-4"
              >
                <SkeletonBlock className="h-4 w-24" />
                <SkeletonBlock className="h-5 w-40" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
