import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  categorySlug,
  getCategoryBySlug,
} from "@/lib/catalog";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return categories.map(([category]) => ({
    category: categorySlug(category),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const categoryData = getCategoryBySlug(slug);

  if (!categoryData) {
    return {
      title: "Category not found",
    };
  }

  const [category, categoryItems] = categoryData;

  return {
    title: category,
    description: `Browse all ${categoryItems.length} products in ${category}.`,
    openGraph: {
      title: `${category} | Catalog App`,
      description: `Browse all ${categoryItems.length} products in ${category}.`,
      images: [
        {
          url: categoryItems[0]?.image,
          alt: category,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const categoryData = getCategoryBySlug(slug);

  if (!categoryData) {
    notFound();
  }

  const [category, categoryItems] = categoryData;

  return (
    <main className="min-h-screen bg-[#fbfbfa] text-neutral-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <header className="grid gap-5 border-b border-neutral-100 pb-6">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-700 transition hover:text-blue-900"
          >
            <Icon name="arrow-left" />
            <span>Back to categories</span>
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-700">
                Category
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                {category}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-neutral-600">
              Showing all {categoryItems.length} products in this category.
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryItems.map((item) => (
            <ProductCard key={item.itemname} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
