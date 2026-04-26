import { CategoryPreviewSkeleton, HeaderSkeleton } from "@/components/CatalogSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-neutral-950">
      <span className="sr-only">Loading catalog categories</span>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 lg:px-10">
        <HeaderSkeleton />
        <CategoryPreviewSkeleton />
      </div>
    </main>
  );
}
