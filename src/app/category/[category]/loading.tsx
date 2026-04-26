import { HeaderSkeleton, ProductGridSkeleton } from "@/components/CatalogSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-neutral-950">
      <span className="sr-only">Loading category products</span>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <HeaderSkeleton />
        <ProductGridSkeleton />
      </div>
    </main>
  );
}
