import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About DEVOL H</h1>

        <div className="prose prose-lg">
          <p className="mb-6">
            Founded in 2023, DEVOL H is a contemporary clothing brand dedicated to creating premium essentials and
            exclusive pieces for the modern individual.
          </p>

          <p className="mb-6">
            Our mission is to provide high-quality, stylish clothing that combines comfort, durability, and timeless
            design. We believe that good clothing should be accessible to everyone, which is why we focus on creating
            versatile pieces that can be worn in various settings and occasions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Philosophy</h2>

          <p className="mb-6">
            At DEVOL H, we are committed to ethical manufacturing practices and sustainable production methods. We
            carefully select our materials and work with partners who share our values of fair labor and environmental
            responsibility.
          </p>

          <p className="mb-6">
            We believe that clothing is more than just fabric—it's a form of self-expression. Our designs are created to
            help you express your unique style while providing the comfort and quality you deserve.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Essentials</h3>
              <p className="mb-4">
                Our Essentials collection features high-quality basics designed for everyday wear. From t-shirts and
                hoodies to pants and shorts, these pieces are the foundation of any wardrobe.
              </p>
              <Button asChild variant="outline">
                <Link href="/shop/essentials">Shop Essentials</Link>
              </Button>
            </div>

            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Exclusives</h3>
              <p className="mb-4">
                Our Exclusives collection features limited edition pieces designed for those who want to stand out.
                These unique items are produced in small quantities and often sell out quickly.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/shop/exclusives">Shop Exclusives</Link>
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Community</h2>

          <p className="mb-6">
            We're more than just a clothing brand—we're a community of like-minded individuals who appreciate quality,
            style, and sustainability. Follow us on social media to stay updated on our latest releases,
            behind-the-scenes content, and community events.
          </p>

          <div className="flex justify-center my-8">
            <Button asChild size="lg">
              <Link href="/shop">Explore Our Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
