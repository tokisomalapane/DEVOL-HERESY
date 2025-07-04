"use client"
import React from "react"
import { FilterProvider, useFilters } from "@/context/filter-context"
import ProductGrid from "@/components/product-grid"
import { getAllProducts } from "@/lib/products"
import ShopFilters from "@/components/shop-filters"
import type { Product } from "@/types/product"
import { useEffect, useState , useMemo} from "react"
import { useRouter, useSearchParams } from "next/navigation" // Added useSearchParams

//Define filter types
interface FilterState {
  categories: string[]
  subcategories: string[]
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
}

export default function ShopPage() {
  const searchParams = useSearchParams() // New: Proper search params handling
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true) // Added loading state

  // Initialize filters from URL
  const [initialFilters, setInitialFilters] = useState<FilterState>({
    categories: searchParams.get('categories')?.split(',') || [],
    subcategories: searchParams.get('subcategories')?.split(',') || [],
    sizes: searchParams.get('sizes')?.split(',') || [],
    colors: searchParams.get('colors')?.split(',') || [],
    priceRange: [
      Number(searchParams.get('minPrice')) || 0,
      Number(searchParams.get('maxPrice')) || 10000
    ]
  })

  const allProducts = getAllProducts()

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    
    if (initialFilters.categories.length > 0) {
      params.set('categories', initialFilters.categories.join(','))
    } else {
      params.delete('categories')
    }
    
    if (initialFilters.subcategories.length > 0) {
    params.set('subcategories', initialFilters.subcategories.join(','))
    } else {
    params.delete('subcategories')
    }
    
    // Update URL without page reload
    router.replace(`?${params.toString()}`, { scroll: false })
    setIsLoading(false)
  }, [initialFilters, router, searchParams])

  if (isLoading) return <div className="container mx-auto p-8">Loading filters...</div>

  return (
    <FilterProvider initialFilters={initialFilters}>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <ShopFilters 
              onFilterChange={(newFilters: FilterState) => setInitialFilters(newFilters)} // Pass callback
            />
          </aside>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">All Products</h1>
            <FilteredProductGrid allProducts={allProducts} />
          </div>
        </div>
      </main>
    </FilterProvider>
  )
}

// Updated to use memo for performance
const FilteredProductGrid = React.memo(({ allProducts }: { allProducts: Product[] }) => {
  const { categories, subcategories, sizes, colors, priceRange } = useFilters()
  
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product: Product) => {
      // Filter logic remains the same
      if (categories.length > 0 && !categories.includes(product.category)) return false
      if (subcategories.length > 0 && !subcategories.includes(product.subcategory)) return false
      if (sizes.length > 0 && !sizes.some(size => product.sizes?.includes(size))) return false
      if (colors.length > 0 && !colors.some(color => product.colors?.includes(color))) return false
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false
      return true
    })
  }, [allProducts, categories, subcategories, sizes, colors, priceRange])

  return <ProductGrid products={filteredProducts} />
})