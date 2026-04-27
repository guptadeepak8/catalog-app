import Image from "next/image";
import Link from "next/link";
import { itemHref, type CatalogItem } from "@/lib/catalog";

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
    <Link
      href={itemHref(item)}
      className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
    >
      <article className="h-full overflow-hidden rounded-lg border border-neutral-100 bg-[#fffefe] shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-neutral-200 group-hover:shadow-md">
        <div className="relative aspect-4/3 bg-[#f6f6f5]">
          <Image
            src={item.image}
            alt={item.itemname}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-3 p-4">
          <h3 className="text-lg font-semibold leading-6 text-neutral-950 group-hover:text-blue-800">
            {item.itemname}
          </h3>
          <dl className="grid gap-2 text-sm">
            {visibleProperties.map((property) => (
              <div
                key={`${item.itemname}-${property.label}`}
                className="flex items-center justify-between gap-3 border-t border-neutral-100 pt-2"
              >
                <dt className="text-neutral-500">{property.label}</dt>
                <dd className="text-right font-medium text-neutral-800">
                  {property.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </Link>
  );
}
