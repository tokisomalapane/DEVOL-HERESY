"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ShopFilters() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  const categories = [
    { id: "essentials", label: "Essentials" },
    { id: "exclusives", label: "Exclusives" },
  ]

  const subcategories = [
    { id: "t-shirts", label: "T-Shirts" },
    { id: "hoodies", label: "Hoodies" },
    { id: "jackets", label: "Jackets" },
    { id: "pants", label: "Pants" },
    { id: "shorts", label: "Shorts" },
    { id: "hats", label: "Hats" },
  ]

  const sizes = [
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" },
  ]

  const colors = [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "gray", label: "Gray" },
    { id: "navy", label: "Navy" },
    { id: "olive", label: "Olive" },
    { id: "burgundy", label: "Burgundy" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subcategories">
          <AccordionTrigger>Product Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {subcategories.map((subcategory) => (
                <div key={subcategory.id} className="flex items-center space-x-2">
                  <Checkbox id={`subcategory-${subcategory.id}`} />
                  <Label htmlFor={`subcategory-${subcategory.id}`}>{subcategory.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger>Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size.id}`} />
                  <Label htmlFor={`size-${size.id}`}>{size.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
