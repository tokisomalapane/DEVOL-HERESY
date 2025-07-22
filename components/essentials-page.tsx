import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import { getEssentialProducts } from "@/lib/products"

export default function EssentialsPage() {
  const products = getEssentialProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Essentials</h1>
          <p className="text-neutral-600 mb-8">
            Our essentials collection features timeless pieces designed for everyday wear.
          </p>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}