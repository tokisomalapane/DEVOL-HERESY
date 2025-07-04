import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] bg-neutral-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="max-h-0"> 
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-4"> . </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                
                This Isnt That
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  <Link href="/shop/exclusives">Explore Exclusives</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/IMG_20250701_222402.jpg?height=1080&width=1920"
        alt="Fashion model wearing DEVOL HERESY clothing"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  )
}
