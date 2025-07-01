"use client"

import { createContext, useContext, useState } from 'react'

type FilterContextType = {
  categories: string[]
  subcategories: string[]
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
  setCategories: (val: string[]) => void
  setSubcategories: (val: string[]) => void
  setSizes: (val: string[]) => void
  setColors: (val: string[]) => void
  setPriceRange: (val: [number, number]) => void
  clearAll: () => void
}

type FilterProviderProps = {
  children: React.ReactNode
  initialFilters?: {
    category?: string
    subcategory?: string
    sizes?: string[]
    colors?: string[]
    priceRange?: [number, number]
  }
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children, initialFilters }: FilterProviderProps) {
  // Initialize state with URL parameters if they exist
  const [categories, setCategories] = useState<string[]>(
    initialFilters?.category ? [initialFilters.category] : []
  )
  const [subcategories, setSubcategories] = useState<string[]>(
    initialFilters?.subcategory ? [initialFilters.subcategory] : []
  )
  const [sizes, setSizes] = useState<string[]>(initialFilters?.sizes || [])
  const [colors, setColors] = useState<string[]>(initialFilters?.colors || [])
  const [priceRange, setPriceRange] = useState<[number, number]>(
    initialFilters?.priceRange || [0, 10000]
  )

  const clearAll = () => {
    setCategories([])
    setSubcategories([])
    setSizes([])
    setColors([])
    setPriceRange([0, 10000])
  }

  return (
    <FilterContext.Provider
      value={{
        categories,
        subcategories,
        sizes,
        colors,
        priceRange,
        setCategories,
        setSubcategories,
        setSizes,
        setColors,
        setPriceRange,
        clearAll,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  return context
}