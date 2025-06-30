"use client"

import { useState } from "react"
import type { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MinusIcon, PlusIcon, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(
      
        product,
        quantity,
        selectedSize,
        selectedColor,
      
      
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div>
        <div className="mb-4">
          {product.isExclusive && (
            <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">Exclusive</span>
          )}
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <p className="text-xl md:text-2xl font-bold mt-2">R{product.price.toFixed(2)}</p>
        </div>

        <p className="text-neutral-600 mb-6 text-sm md:text-base">{product.description}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-9 w-9 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-md border border-neutral-200 bg-white text-center peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white hover:bg-neutral-100 peer-data-[state=checked]:hover:bg-black/90 text-sm"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Color</h3>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <div key={color} className="flex items-center">
                  <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                  <Label
                    htmlFor={`color-${color}`}
                    className="flex h-9 px-3 md:h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-200 bg-white text-center peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white hover:bg-neutral-100 peer-data-[state=checked]:hover:bg-black/90 text-sm"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="h-9 w-9 md:h-10 md:w-10"
              >
                <MinusIcon className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <span className="w-10 md:w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-9 w-9 md:h-10 md:w-10"
              >
                <PlusIcon className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>

          <Button onClick={handleAddToCart} className="w-full h-10 md:h-12 text-sm md:text-base">
            <ShoppingBag className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Add to Cart
          </Button>
        </div>

        <div className="mt-6 md:mt-8 border-t border-neutral-200 pt-4 md:pt-6">
          <div className="space-y-3 md:space-y-4">
            <div>
              <h3 className="font-medium text-sm md:text-base">Shipping</h3>
              <p className="text-xs md:text-sm text-neutral-500">Delivery fee based on distance to your location</p>
            </div>
            <div>
              <h3 className="font-medium text-sm md:text-base">Returns</h3>
              <p className="text-xs md:text-sm text-neutral-500">Free same day returns for unworn items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
