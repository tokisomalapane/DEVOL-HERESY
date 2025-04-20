import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import { getExclusiveProducts } from "@/lib/products"
import ShopFilters from "@/components/shop-filters"

export default function ExclusivesPage() {
  const products = getExclusiveProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ShopFilters />
        </aside>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Exclusives</h1>
          <p className="text-neutral-600 mb-8">
            Our exclusive collection features limited edition pieces designed for those who want to stand out.
          </p>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
