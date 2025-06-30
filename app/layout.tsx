// app/layout.tsx
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import  Providers  from "@/components/providers.client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devol H | Premium Clothing Brand",
  description: "Shop the latest essentials and exclusive clothing items.",
  generator: 'v0.dnpm rev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
