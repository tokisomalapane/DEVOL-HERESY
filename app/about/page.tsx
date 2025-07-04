import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About DEVOL H</h1>

        <div className="prose prose-lg">
          <p className="mb-6">
            Founded in 2019,Devol Heresy was born from a passion for authenticity, 
            creativity, and bold self-expression. 
          </p>

          <p className="mb-6">
            We set out to create more than just clothing we wanted to build a brand 
            that speaks to individuals who move with purpose and style.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Philosophy</h2>

          <p className="mb-6">
            At Devol Heresy , every piece starts from scratch. From fabric selection 
            to final stitch, our process is rooted in originality and craftsmanship. 
          </p>

          <p className="mb-6">
            We don’t follow trends — we set them. Our fashion-forward designs combine 
            elevated streetwear with timeless style, offering standout pieces that feel 
            as good as they look.
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
              <Button asChild variant="outline" className="border-white text-black hover:bg-white/10">
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
