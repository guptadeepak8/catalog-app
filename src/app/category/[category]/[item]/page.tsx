import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import {
  categories,
  categorySlug,
  getItemBySlugs,
  itemSlug,
} from "@/lib/catalog";

type ItemDetailPageProps = {
  params: Promise<{
    category: string;
    item: string;
  }>;
};

export function generateStaticParams() {
  return categories.flatMap(([, categoryItems]) =>
    categoryItems.map((item) => ({
      category: categorySlug(item.category),
      item: itemSlug(item.itemname),
    })),
  );
}

export async function generateMetadata({
  params,
}: ItemDetailPageProps): Promise<Metadata> {
  const { category, item } = await params;
  const itemData = getItemBySlugs(category, item);

  if (!itemData) {
    return {
      title: "Item not found",
    };
  }

  return {
    title: itemData.item.itemname,
    description: `View details for ${itemData.item.itemname} in ${itemData.categoryName}.`,
    openGraph: {
      title: `${itemData.item.itemname} | Catalog App`,
      description: `View details for ${itemData.item.itemname} in ${itemData.categoryName}.`,
      images: [
        {
          url: itemData.item.image,
          alt: itemData.item.itemname,
        },
      ],
    },
  };
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { category, item } = await params;
  const itemData = getItemBySlugs(category, item);

  if (!itemData) {
    notFound();
  }

  const categoryHref = `/category/${categorySlug(itemData.categoryName)}`;

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:px-10">
        <div className="grid gap-5">
          <Link
            href={categoryHref}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-emerald-700 transition hover:text-emerald-900"
          >
            <Icon name="arrow-left" />
            <span>Back to {itemData.categoryName}</span>
          </Link>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-zinc-200 bg-white sm:min-h-[460px]">
            <Image
              src={itemData.item.image}
              alt={itemData.item.itemname}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <section className="grid content-start gap-6">
          <header className="border-b border-zinc-200 pb-6">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-700">
              {itemData.categoryName}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {itemData.item.itemname}
            </h1>
          </header>

          <dl className="grid overflow-hidden rounded-lg border border-zinc-200 bg-white">
            {itemData.item.itemprops.map((property) => (
              <div
                key={`${itemData.item.itemname}-${property.label}`}
                className="grid gap-1 border-b border-zinc-100 px-5 py-4 last:border-b-0 sm:grid-cols-[160px_1fr] sm:gap-4"
              >
                <dt className="text-sm font-medium text-zinc-500">
                  {property.label}
                </dt>
                <dd className="text-base font-semibold text-zinc-900">
                  {property.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
