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

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<string[]>([])
  const [subcategories, setSubcategories] = useState<string[]>([])
  const [sizes, setSizes] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])

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