"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CartItem } from "@/context/cart-context"
import { PhoneIcon as BrandWhatsapp } from "lucide-react"
import { AlertCircle } from "lucide-react"

interface WhatsAppCheckoutProps {
  cartItems: CartItem[]
  total: number
  note: string
  onCancel: () => void
}

export default function WhatsAppCheckout({ cartItems, total, note, onCancel }: WhatsAppCheckoutProps) {
  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!firstName.trim()) newErrors.firstName = "First name is required"
    if (!surname.trim()) newErrors.surname = "Surname is required"
    if (!email.trim()) newErrors.email = "Email is required"
    if (email && !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please enter a valid email"
    if (!phone.trim()) newErrors.phone = "Phone number is required"
    if (!address.trim()) newErrors.address = "Shipping address is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCheckout = () => {
    if (!validateForm()) return

    // Format the order details for WhatsApp
    let message = `*New Order from DEVOL HERESY*\n\n`
    message += `*Customer Details*\n`
    message += `Name: ${firstName} ${surname}\n`
    message += `Email: ${email}\n`
    message += `Phone: ${phone}\n`
    message += `Address: ${address}\n\n`

    message += `*Order Items*\n`
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} - ${item.quantity} x R${item.product.price.toFixed(2)}\n`
      if (item.product.selectedSize) message += `   Size: ${item.product.selectedSize}\n`
      if (item.product.selectedColor) message += `   Color: ${item.product.selectedColor}\n`
      message += `   Subtotal: R${(item.product.price * item.quantity).toFixed(2)}\n\n`
    })

    message += `*Subtotal: R${total.toFixed(2)}*\n`
    message += `*Delivery Fee: To be calculated based on distance to ${address}*\n\n`

    if (note) {
      message += `*Note:* ${note}\n\n`
    }

    message += `Thank you for your order!`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    // Note: In a real app, you'd replace this with your business WhatsApp number
    window.open(`https://wa.me/+27694691973?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-sm md:text-base">Customer Information</h3>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="firstName" className="text-xs md:text-sm">
              First Name*
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
              className={`text-sm ${errors.firstName ? "border-red-500" : ""}`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="surname" className="text-xs md:text-sm">
              Surname*
            </Label>
            <Input
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter your surname"
              required
              className={`text-sm ${errors.surname ? "border-red-500" : ""}`}
            />
            {errors.surname && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.surname}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-xs md:text-sm">
            Email*
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`text-sm ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-xs md:text-sm">
            Phone Number*
          </Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
            className={`text-sm ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="address" className="text-xs md:text-sm">
            Shipping Address*
          </Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your shipping address"
            required
            className={`text-sm ${errors.address ? "border-red-500" : ""}`}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.address}
            </p>
          )}
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <Button onClick={handleCheckout} className="w-full bg-green-600 hover:bg-green-700 text-sm md:text-base">
          <BrandWhatsapp className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Checkout via WhatsApp
        </Button>

        <Button variant="outline" className="w-full text-sm md:text-base" onClick={onCancel}>
          Back
        </Button>
      </div>
    </div>
  )
}
