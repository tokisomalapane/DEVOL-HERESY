
"use client"


import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { FilterProvider } from "@/context/filter-context"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CartProvider>
        <FilterProvider>
          {children}
       </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  )
}


