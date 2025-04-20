"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Thabo Mbeki",
    location: "Johannesburg",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The quality of DEVOL HERESY clothing is exceptional. I've been wearing their t-shirts for over a year now and they still look brand new after multiple washes.",
  },
  {
    id: 2,
    name: "Lerato Khumalo",
    location: "Cape Town",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I love the exclusive collections! The designs are unique and the fabric quality is top-notch. Definitely worth every Rand spent.",
  },
  {
    id: 3,
    name: "Michael van der Merwe",
    location: "Durban",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "DEVOL HERESY has become my go-to brand for everyday wear. The fit is perfect and the styles are versatile enough for both casual and semi-formal occasions.",
  },
  {
    id: 4,
    name: "Nomsa Dlamini",
    location: "Pretoria",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Heritage Collection is amazing! It's wonderful to see South African culture represented so beautifully in fashion. I get compliments every time I wear my DEVOL HERESY jacket.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile and update visible testimonials
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      updateVisibleTestimonials(currentIndex, mobile)
    }

    // Initial check
    if (typeof window !== "undefined") {
      checkIfMobile()
      window.addEventListener("resize", checkIfMobile)
      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [currentIndex])

  function updateVisibleTestimonials(startIndex: number, mobile: boolean) {
    const count = mobile ? 1 : 3
    const result = []

    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % testimonials.length
      result.push(testimonials[index])
    }

    setVisibleTestimonials(result)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    setCurrentIndex(newIndex)
    updateVisibleTestimonials(newIndex, isMobile)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    setCurrentIndex(newIndex)
    updateVisibleTestimonials(newIndex, isMobile)
  }

  // Add swipe functionality for mobile
  useEffect(() => {
    if (typeof window === "undefined") return

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      // Swipe left (next)
      if (touchEndX < touchStartX - 50) {
        handleNext()
      }
      // Swipe right (previous)
      if (touchEndX > touchStartX + 50) {
        handlePrevious()
      }
    }

    const element = document.getElementById("testimonials-carousel")
    if (element) {
      element.addEventListener("touchstart", handleTouchStart, false)
      element.addEventListener("touchend", handleTouchEnd, false)

      return () => {
        element.removeEventListener("touchstart", handleTouchStart)
        element.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">What Our Customers Say</h2>

        <div id="testimonials-carousel" className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-neutral-600 text-sm md:text-base">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-4">
            <Button onClick={handlePrevious} variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button onClick={handleNext} variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile indicator dots */}
          <div className="flex justify-center mt-4 space-x-2 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  updateVisibleTestimonials(index, isMobile)
                }}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-neutral-300"
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
