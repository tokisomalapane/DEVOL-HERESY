"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import WhatsAppCheckout from "@/components/whatsapp-checkout"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
  const [note, setNote] = useState("")
  const [showCheckout, setShowCheckout] = useState(false)

  const total = getCartTotal()
  const shipping = 0 // Changed from conditional value
  const grandTotal = total // Removed shipping addition

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 text-neutral-300" />
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Your cart is empty</h1>
          <p className="text-neutral-500 mb-6 md:mb-8 text-sm md:text-base">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild size="lg" className="text-sm md:text-base">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          {/* Mobile cart view */}
          <div className="lg:hidden space-y-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="border rounded-lg p-4">
                <div className="flex items-start mb-3">
                  <div className="w-20 h-20 rounded overflow-hidden mr-3">
                    <img
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {item.product.selectedSize && `Size: ${item.product.selectedSize}`}
                      {item.product.selectedColor && `, Color: ${item.product.selectedColor}`}
                    </p>
                    <p className="text-sm font-medium mt-1">R{item.product.price.toFixed(2)}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-neutral-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-bold">R{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop cart view */}
          <div className="hidden lg:block border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-center p-4">Price</th>
                  <th className="text-center p-4">Quantity</th>
                  <th className="text-right p-4">Total</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.product.id} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded overflow-hidden mr-4">
                          <img
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-neutral-500">
                            {item.product.selectedSize && `Size: ${item.product.selectedSize}`}
                            {item.product.selectedColor && `, Color: ${item.product.selectedColor}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-4">R{item.product.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                    <td className="text-right p-4">R{(item.product.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4 text-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-500 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
            <Button asChild variant="outline" size="sm" className="text-xs md:text-sm">
              <Link href="/shop">
                <ArrowLeft className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={() => clearCart()} className="text-xs md:text-sm">
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 md:mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-right">
                  To be calculated
                  <br />
                  <span className="text-xs text-neutral-500">Based on delivery distance</span>
                </span>
              </div>
              <div className="border-t pt-3 mt-3 font-bold flex justify-between">
                <span>Total</span>
                <span>R{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <label htmlFor="note" className="block text-sm font-medium mb-2">
                Order Notes (optional)
              </label>
              <Textarea
                id="note"
                placeholder="Special instructions for your order"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full text-sm"
              />
            </div>

            {!showCheckout ? (
              <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)}>
                Proceed to Checkout
              </Button>
            ) : (
              <WhatsAppCheckout
                cartItems={cartItems}
                total={grandTotal}
                note={note}
                onCancel={() => setShowCheckout(false)}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
