"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { cartItems } = useCart()
  const isMobile = useMobile()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Essentials", path: "/shop/essentials" },
    { name: "Exclusives", path: "/shop/exclusives" },
    { name: "About", path: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl md:text-2xl">
              DEVOL HERESY
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-neutral-900 ${
                  pathname === link.path ? "text-black" : "text-neutral-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Improved for better mobile experience */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 shadow-lg absolute w-full left-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium py-3 transition-colors hover:text-neutral-900 ${
                    pathname === link.path ? "text-black border-l-4 border-black pl-3" : "text-neutral-500 pl-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
