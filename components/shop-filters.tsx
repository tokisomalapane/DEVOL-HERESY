"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useFilters } from "@/context/filter-context"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation" // Added for navigation
import { useEffect } from "react" // Added for effect handling

interface ShopFiltersProps {
  onFilterChange?: (filters: {
    categories: string[]
    subcategories: string[]
    sizes: string[]
    colors: string[]
    priceRange: [number, number]
  }) => void
}



export default function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const {
    categories: selectedCategories,
    subcategories: selectedSubcategories,
    sizes: selectedSizes,
    colors: selectedColors,
    priceRange,
    setCategories,
    setSubcategories,
    setSizes,
    setColors,
    setPriceRange,
    clearAll 
  } = useFilters()

  const router = useRouter() // Initialize router

  const filterOptions = {
    categories: [
      { id: "Essentials", label: "Essentials" },
      { id: "Exclusives", label: "Exclusives" },
    ],
    subcategories: [
      { id: "T-Shirts", label: "T-Shirts" },
      { id: "Hoodies", label: "Hoodies" },
      { id: "Jackets", label: "Jackets" },
      { id: "Pants", label: "Pants" },
      { id: "Shorts", label: "Shorts" },
      { id: "Hats", label: "Hats" },
    ],
    sizes: [
      { id: "S", label: "S" },
      { id: "M", label: "M" },
      { id: "L", label: "L" },
      { id: "XL", label: "XL" },
      { id: "XXL", label: "XXL" },
    ],
    colors: [
      { id: "Black", label: "Black" },
      { id: "White", label: "White" },
      { id: "Gray", label: "Gray" },
      { id: "Navy", label: "Navy" },
      { id: "Olive", label: "Olive" },
      { id: "Camoflauge", label: "Camoflauge" },
    ]
  }

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    
    if (selectedCategories.length > 0) {
      params.set('categories', selectedCategories.join(','))
    }
    
    if (selectedSubcategories.length > 0) {
      params.set('subcategories', selectedSubcategories.join(','))
    }

    params.set('minPrice', priceRange[0].toString())
    params.set('maxPrice', priceRange[1].toString())
    
    // Push new URL without page reload
    router.push(`/shop?${params.toString()}`, { scroll: false })

    if (onFilterChange) {
    onFilterChange({
      categories: selectedCategories,
      subcategories: selectedSubcategories,
      sizes: selectedSizes,
      colors: selectedColors,
      priceRange
    })
    }
  }, [selectedCategories, selectedSubcategories, router])

  const renderFilterSection = (
    value: string,
    title: string,
    items: {id: string, label: string}[],
    selectedItems: string[],
    onChange: (id: string) => void
  ) => (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={`${value}-${item.id}`}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={() => onChange(item.id)}
              />
              <Label htmlFor={`${value}-${item.id}`}>{item.label}</Label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => {
            clearAll()
            router.push('/shop', { scroll: false })
          }} 
          className="w-full"
        >
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={Object.keys(filterOptions)}>
        {renderFilterSection(
          "categories",
          "Categories",
          filterOptions.categories,
          selectedCategories,
          (id) => setCategories(
            selectedCategories.includes(id)
              ? selectedCategories.filter(c => c !== id)
              : [...selectedCategories, id]
          )
        )}

        {renderFilterSection(
          "subcategories",
          "Product Type",
          filterOptions.subcategories,
          selectedSubcategories,
          (id) => setSubcategories(
            selectedSubcategories.includes(id)
              ? selectedSubcategories.filter(s => s !== id)
              : [...selectedSubcategories, id]
          )
        )}

        {renderFilterSection(
          "sizes",
          "Sizes",
          filterOptions.sizes,
          selectedSizes,
          (id) => setSizes(
            selectedSizes.includes(id)
              ? selectedSizes.filter(s => s !== id)
              : [...selectedSizes, id]
          )
        )}

        {renderFilterSection(
          "colors",
          "Colors",
          filterOptions.colors,
          selectedColors,
          (id) => setColors(
            selectedColors.includes(id)
              ? selectedColors.filter(c => c !== id)
              : [...selectedColors, id]
          )
        )}

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={10000}
                step={10}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>R{priceRange[0]}</span>
                <span>R{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}