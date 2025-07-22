"use client"

import React, { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { FilterProvider, useFilters } from "@/context/filter-context"
import ProductGrid from "@/components/product-grid"
import { getAllProducts } from "@/lib/products"
import ShopFilters from "@/components/shop-filters"
import type { Product } from "@/types/product"

interface FilterState {
  categories: string[]
  subcategories: string[]
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
}

export default function ShopPage() {
  const searchParams = useSearchParams()

  const initialFilters = useMemo<FilterState>(() => ({
    categories: searchParams.get("categories")?.split(",").filter(Boolean) || [],
    subcategories: searchParams.get("subcategories")?.split(",").filter(Boolean) || [],
    sizes: searchParams.get("sizes")?.split(",").filter(Boolean) || [],
    colors: searchParams.get("colors")?.split(",").filter(Boolean) || [],
    priceRange: [
      Number(searchParams.get("minPrice")) || 0,
      Number(searchParams.get("maxPrice")) || 10000,
    ],
  }), [searchParams])

  const allProducts = getAllProducts()

  return (
    <FilterProvider initialFilters={initialFilters}>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <ShopFilters />
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

const FilteredProductGrid = React.memo(
  ({ allProducts }: { allProducts: Product[] }) => {
    const { categories, subcategories, sizes, colors, priceRange } = useFilters()

    const filteredProducts = useMemo(() => {
      return allProducts.filter((product: Product) => {
        if (categories.length > 0 && !categories.includes(product.category)) return false
        if (subcategories.length > 0 && !subcategories.includes(product.subcategory)) return false
        if (sizes.length > 0 && !sizes.some((size) => product.sizes?.includes(size))) return false
        if (colors.length > 0 && !colors.some((color) => product.colors?.includes(color))) return false
        if (product.price < priceRange[0] || product.price > priceRange[1]) return false
        return true
      })
    }, [allProducts, categories, subcategories, sizes, colors, priceRange])

    return <ProductGrid products={filteredProducts} />
  }
)