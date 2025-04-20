import type { Product } from "@/types/product"

// Sample product data
const products: Product[] = [
  {
    id: "essential-tshirt-1",
    name: "Old School T-Shirt",
    description: "Our signature cotton t-shirt with a relaxed fit and premium feel.",
    price: 299.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "T-Shirts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [ "White" ],
    inStock: true,
  },
  {
    id: "essential-tshirt-2",
    name: "Old School T-Shirt",
    description: "Our signature cotton t-shirt with a relaxed fit and premium feel.",
    price: 299.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "T-Shirts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [ "Black" ],
    inStock: true,
  },
  {
    id: "essential-hoodie-1",
    name: "Everyday Hoodie",
    description: "Comfortable hoodie made from premium cotton blend for everyday wear.",
    price: 899.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hoodies",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Olive"],
    inStock: true,
  },
  {
    id: "essential-pants-1",
    name: "Relaxed Fit Pants",
    description: "Versatile pants with a comfortable relaxed fit and durable fabric.",
    price: 799.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "Pants",
    isExclusive: false,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Khaki", "Navy"],
    inStock: true,
  },
  {
    id: "exclusive-jacket-1",
    name: "Limited Edition Bomber",
    description: "Premium bomber jacket with custom embroidery, limited quantities available.",
    price: 1499.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Jackets",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Burgundy"],
    inStock: true,
  },
  {
    id: "essential-shorts-1",
    name: "Everyday Shorts",
    description: "Comfortable shorts perfect for casual wear or light activity.",
    price: 599.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "Shorts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    inStock: true,
  },
  {
    id: "essential-hat-1",
    name: "Classic Cap",
    description: "Adjustable cotton cap with embroidered logo.",
    price: 349.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hats",
    isExclusive: false,
    sizes: ["One Size"],
    colors: ["Black", "White", "Navy"],
    inStock: true,
  },
  {
    id: "exclusive-tshirt-1",
    name: "Artist Collab Tee",
    description: "Limited edition t-shirt featuring exclusive artwork from our latest collaboration.",
    price: 699.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Exclusives",
    subcategory: "T-Shirts",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    inStock: true,
  },
  {
    id: "exclusive-hoodie-1",
    name: "Premium Tech Hoodie",
    description: "Advanced technical hoodie with water-resistant finish and hidden pockets.",
    price: 1299.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Hoodies",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    inStock: true,
  },
]

// Get all products
export function getAllProducts(): Product[] {
  return products
}

// Get featured products
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

// Get products by subcategory
export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory.toLowerCase() === subcategory.toLowerCase())
}

// Get exclusive products
export function getExclusiveProducts(): Product[] {
  return products.filter((product) => product.isExclusive)
}

// Get essential products
export function getEssentialProducts(): Product[] {
  return products.filter((product) => product.category === "Essentials")
}
