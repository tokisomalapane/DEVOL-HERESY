import { notFound } from "next/navigation"
import Link from "next/link"
import { getProductById, getAllProductIds } from "@/lib/products"
import ProductDetails from "@/components/product-details"
import RelatedProducts from "@/components/related-products"

// This generates all possible product pages at build time
export async function generateStaticParams() {
  return getAllProductIds()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params)
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <nav className="flex text-sm text-neutral-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link 
            href={`/shop/${product.category.toLowerCase()}/`} // Added trailing slash
            className="hover:text-black"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      <ProductDetails product={product} />

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts 
          currentProductId={product.id} 
          category={product.category} 
        />
      </section>
    </main>
  )
}