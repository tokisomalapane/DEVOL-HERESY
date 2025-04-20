import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import { getAllProducts } from "@/lib/products"
import ShopFilters from "@/components/shop-filters"

export default function ShopPage() {
  const products = getAllProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ShopFilters />
        </aside>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">All Products</h1>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
