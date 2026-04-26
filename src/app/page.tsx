import Image from "next/image";
import catalogItems from "../../data.json";

type CatalogItem = {
  itemname: string;
  category: string;
  image: string;
  itemprops: {
    label: string;
    value: string;
  }[];
};

const items = catalogItems as CatalogItem[];

const categories = Object.entries(
  items.reduce<Record<string, CatalogItem[]>>((groupedItems, item) => {
    groupedItems[item.category] = groupedItems[item.category] ?? [];
    groupedItems[item.category].push(item);
    return groupedItems;
  }, {}),
);

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-3 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-700">
              Catalog
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Category Overview
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Browse every category with a quick preview of standout items and
            their most useful details.
          </p>
        </header>

        <div className="grid gap-8">
          {categories.map(([category, categoryItems]) => (
            <section key={category} className="grid gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-950">
                    {category}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {categoryItems.length} items available
                  </p>
                </div>
                <span className="rounded-full border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-700">
                  Preview
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categoryItems.slice(0, 4).map((item) => (
                  <article
                    key={item.itemname}
                    className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-4/3 bg-zinc-100">
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
                        {item.itemprops.slice(0, 2).map((property) => (
                          <div
                            key={`${item.itemname}-${property.label}`}
                            className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-2"
                          >
                            <dt className="text-zinc-500">
                              {property.label}
                            </dt>
                            <dd className="text-right font-medium text-zinc-800">
                              {property.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
