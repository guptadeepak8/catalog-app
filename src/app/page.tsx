import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { categories, categorySlug } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Category Overview",
  description:
    "Browse catalog categories with quick product previews and direct links to full category pages.",
  openGraph: {
    title: "Category Overview | Catalog App",
    description:
      "Browse catalog categories with quick product previews and direct links to full category pages.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-neutral-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-3 border-b border-neutral-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-700">
              Catalog
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Category Overview
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-neutral-600">
            Browse every category with a quick preview of standout items and
            their most useful details.
          </p>
        </header>

        <div className="grid gap-8">
          {categories.map(([category, categoryItems]) => {
            const previewItems = categoryItems.slice(0, 4);
            const categoryHref = `/category/${categorySlug(category)}`;

            return (
              <section key={category} className="grid gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-950">
                      <Link href={categoryHref} className="hover:text-blue-700">
                        {category}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      Showing {previewItems.length} of {categoryItems.length}{" "}
                      products
                    </p>
                  </div>
                  <Link
                    href={categoryHref}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:border-blue-700 hover:bg-[#f7fbff] hover:text-blue-800"
                  >
                    <span>View all {categoryItems.length}</span>
                    <Icon name="arrow-right" />
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {previewItems.map((item) => (
                    <ProductCard
                      key={item.itemname}
                      item={item}
                      propertyLimit={2}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
