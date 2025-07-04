import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DEVOL HERESY</h3>
            <p className="text-neutral-400 mb-4">This Isnt That</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/devol.heresy.merch/" className="text-white hover:text-neutral-400 transition">
                <Instagram className="h-5 w-5" />
              </Link>
            
              <Link href="https://www.facebook.com/people/Devol-Heresy-Clothing/100064125063373/?locale=mk_MK" className="text-white hover:text-neutral-400 transition">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCdKIudxHkTXw2Xu1gf4pnOg" className="text-white hover:text-neutral-400 transition">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/shop/essentials" className="hover:text-white transition">
                  Essentials
                </Link>
              </li>
              <li>
                <Link href="/shop/exclusives" className="hover:text-white transition">
                  Exclusives
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/shop/essentials/t-shirts" className="hover:text-white transition">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop/essentials/hoodies" className="hover:text-white transition">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop/essentials/pants" className="hover:text-white transition">
                  Pants
                </Link>
              </li>
              <li>
                <Link href="/shop/essentials/shorts" className="hover:text-white transition">
                  Shorts
                </Link>
              </li>
              <li>
                <Link href="/shop/essentials/jackets" className="hover:text-white transition">
                  Jackets
                </Link>
              </li>
              <li>
                <Link href="/shop/essentials/hats" className="hover:text-white transition">
                  Hats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              {/*<li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>*/}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} DEVOL HERESY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
