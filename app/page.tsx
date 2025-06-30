import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"
import CategoryShowcase from "@/components/category-showcase"
import HeroSection from "@/components/hero-section"
import CollaborationSection from "@/components/collaboration-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import SocialMediaSection from "@/components/social-media-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/shop" className="flex items-center text-lg hover:underline">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Shop By Category</h2>
          <CategoryShowcase />
        </div>
      </section>

      <CollaborationSection />

      <section className="container mx-auto py-16 px-4">
        <div className="bg-black text-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Collection</h2>
            <p className="text-lg mb-6">Discover our limited edition pieces designed for those who stand out.</p>
            <Link
              href="/shop/exclusives"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition"
            >
              Shop Exclusives
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transform rotate-3"></div>
              <img
                src="/Exclusive /IMG_20250524_114229.jpg?height=320&width=320"
                alt="Exclusive collection preview"
                className="absolute inset-0 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

    
      <TeamSection />
      <SocialMediaSection />
    </main>
  )
}
