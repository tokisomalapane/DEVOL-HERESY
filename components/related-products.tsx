"use client"

import { useEffect, useState } from "react"
import type { Product } from "@/types/product"
import { getAllProducts } from "@/lib/products"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Link from "next/link"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    // Get products from the same category, excluding the current product
    const allProducts = getAllProducts()
    const filtered = allProducts
      .filter((product) => product.category === category && product.id !== currentProductId)
      .slice(0, 4) // Limit to 4 related products

    setRelatedProducts(filtered)
  }, [currentProductId, category])

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
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
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <Link href={`/product/${product.id}`} className="hover:underline">
                <h3 className="font-medium">{product.name}</h3>
              </Link>
              <span className="font-bold">R{product.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-neutral-500 mb-4">{product.subcategory}</p>
            <Button onClick={() => addToCart(product, 1)} className="w-full" variant="outline">
              <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
