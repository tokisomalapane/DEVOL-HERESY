"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const collaborations = [
  {
    id: 1,
    title: "Summer Collection with Local Artists",
    description: "A unique collaboration featuring artwork from South African artists.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 2,
    title: "Street Culture Series",
    description: "Celebrating urban culture with bold designs and authentic expression.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 3,
    title: "Heritage Collection",
    description: "Honoring South African heritage with traditional patterns and modern cuts.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 4,
    title: "Sports Edition",
    description: "Performance wear designed with local athletes for ultimate comfort and style.",
    image: "/placeholder.svg?height=800&width=1200",
  },
]

export default function CollaborationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const isMobile = useMobile()

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? collaborations.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === collaborations.length - 1 ? 0 : prevIndex + 1))
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
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

    const element = document.getElementById("collaboration-carousel")
    if (element) {
      element.addEventListener("touchstart", handleTouchStart, false)
      element.addEventListener("touchend", handleTouchEnd, false)

      return () => {
        element.removeEventListener("touchstart", handleTouchStart)
        element.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  const currentCollaboration = collaborations[currentIndex]

  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Our Collaborations</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Fullscreen overlay */}
          {isFullscreen && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 text-white"
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={currentCollaboration.image || "/placeholder.svg"}
                alt={currentCollaboration.title}
                className="max-h-screen max-w-full object-contain px-4"
              />
              <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{currentCollaboration.title}</h3>
                <p className="text-base md:text-lg">{currentCollaboration.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          )}

          {/* Regular view */}
          <div id="collaboration-carousel" className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <img
              src={currentCollaboration.image || "/placeholder.svg"}
              alt={currentCollaboration.title}
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
            >
              <Maximize className="h-5 w-5" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{currentCollaboration.title}</h3>
              <p className="text-sm md:text-base">{currentCollaboration.description}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {collaborations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-neutral-300"
                } transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
