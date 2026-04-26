import { ItemDetailSkeleton } from "@/components/CatalogSkeleton";

export default function Loading() {
  return (
    <>
      <span className="sr-only">Loading item details</span>
      <ItemDetailSkeleton />
    </>
  );
}
