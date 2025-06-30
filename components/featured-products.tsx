"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/types/product"
import { getFeaturedProducts } from "@/lib/products"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    setProducts(getFeaturedProducts())
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
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
            <p className="text-sm text-neutral-500 mb-4">{product.category}</p>
            <Button asChild className="w-full" variant="outline">
              <Link href={`/product/${product.id}`}>
                <ShoppingBag className="mr-2 h-4 w-4" /> View Product
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}