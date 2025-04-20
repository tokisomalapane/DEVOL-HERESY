import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Meet the Founder</h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img
                className="h-64 w-full object-cover md:h-full md:w-full"
                src="/placeholder.svg?height=600&width=400"
                alt="Founder of DEVOL HERESY"
              />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-sm text-black font-semibold">
                Founder & Creative Director
              </div>
              <h3 className="mt-1 text-xl md:text-2xl font-bold leading-tight">Mpumelelo Magabela</h3>
              <p className="mt-4 text-neutral-600 text-sm md:text-base">
                David founded DEVOL HERESY in 2020 with a vision to create authentic South African streetwear that
                celebrates our diverse culture and heritage. With a background in fashion design and a passion for urban
                culture, David has grown DEVOL HERESY from a small local brand to a recognized name in the South African
                fashion scene.
              </p>

              <div className="mt-6">
                <h4 className="font-medium mb-2 text-sm md:text-base">Contact Details</h4>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:closavedme@gmail.com" className="hover:underline">
                    closavedme@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href="tel:+27694691973" className="hover:underline">
                      +27 69 469 1973
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2 text-sm md:text-base">Follow ClothingSavedMe</h4>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" asChild className="h-9 w-9">
                    <Link href="https://www.instagram.com/clothingsavedme_/" aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="h-9 w-9">
                    <Link href="https://www.facebook.com/clothingsavedme" aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="h-9 w-9">
                    <Link href="https://x.com/clothingsavedme" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
