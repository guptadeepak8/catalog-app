import Image from "next/image";
import type { CatalogItem } from "@/lib/catalog";

type ProductCardProps = {
  item: CatalogItem;
  propertyLimit?: number;
};

export default function ProductCard({ item, propertyLimit }: ProductCardProps) {
  const visibleProperties =
    typeof propertyLimit === "number"
      ? item.itemprops.slice(0, propertyLimit)
      : item.itemprops;

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={item.image}
          alt={item.itemname}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-3 p-4">
        <h3 className="text-lg font-semibold leading-6 text-zinc-950">
          {item.itemname}
        </h3>
        <dl className="grid gap-2 text-sm">
          {visibleProperties.map((property) => (
            <div
              key={`${item.itemname}-${property.label}`}
              className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-2"
            >
              <dt className="text-zinc-500">{property.label}</dt>
              <dd className="text-right font-medium text-zinc-800">
                {property.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
