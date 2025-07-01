"use client"
import { Suspense } from "react"
import { FilterProvider , useFilters} from "@/context/filter-context"
import ProductGrid from "@/components/product-grid"
import { getAllProducts } from "@/lib/products"
import ShopFilters from "@/components/shop-filters"
import type { Product } from "@/types/product"
import { useSearchParams } from "next/navigation"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const allProducts = getAllProducts()

  

  return (
    <FilterProvider initialFilters ={{
    
      subcategory: searchParams.get('subcategory') || ''
    }}>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <ShopFilters />
          </aside>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">All Products</h1>
            <Suspense fallback={<div>Loading products...</div>}>
              <FilteredProductGrid allProducts={allProducts} />
            </Suspense>
          </div>
        </div>
      </main>
    </FilterProvider>
  )
}

// New component that handles filtering
function FilteredProductGrid({ allProducts }: { allProducts: Product[] }) {
  const { categories, subcategories, sizes, colors, priceRange } = useFilters()
  
  console.log("=== DEBUG INFO ===")
  console.log("First product:", allProducts[0])
  console.log("Selected filters:", { categories, subcategories, sizes, colors, priceRange })
  console.log("All products count:", allProducts.length)

  const filteredProducts = allProducts.filter((product: Product) => {
    console.log(`Checking product: ${product.name}`)
    // Filter by categories
    if (categories.length > 0 && !categories.includes(product.category)) {
      return false
    }
    
    // Filter by subcategories
    if (subcategories.length > 0 && !subcategories.includes(product.subcategory)) {
      return false
    }
    
    // Filter by sizes
    if (sizes.length > 0 && !sizes.some(size => product.sizes?.includes(size))) {
      return false
    }
    
    // Filter by colors
    if (colors.length > 0 && !colors.some(color => product.colors?.includes(color))) {
      return false
    }
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    
    return true
  })

  console.log("Filtered products count:", filteredProducts.length)
  console.log("=== END DEBUG ===")

  return <ProductGrid products={filteredProducts} />
}