"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/types/product"
import Link from "next/link"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">No products found</h3>
        <p className="text-neutral-500 mt-2">Try adjusting your filters or check back later.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            {product.isExclusive && (
              <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">Exclusive</span>
            )}
          </div>
          <CardContent className="p-3 md:p-4">
            <div className="flex justify-between items-start mb-2">
              <Link href={`/product/${product.id}`} className="hover:underline">
                <h3 className="font-medium text-sm md:text-base line-clamp-1">{product.name}</h3>
              </Link>
              <span className="font-bold text-sm md:text-base">R{product.price.toFixed(2)}</span>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 mb-3 md:mb-4">{product.subcategory}</p>
            <Button onClick={() => addToCart(product, 1)} className="w-full text-xs md:text-sm" variant="outline">
              <ShoppingBag className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
