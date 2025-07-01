import type { Product } from "@/types/product"

// Sample product data
const products: Product[] = [
  {
    id: "essential-tshirt-1",
    name: "Old School T-Shirt",
    description: "Our signature cotton t-shirt with a relaxed fit and premium feel.",
    price: 299.99,
    image: "/Devol Essentials/IMG_20250524_115106.jpg?height=500&width=500",
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
    image: "/Devol Essentials/IMG_20250524_113248.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "T-Shirts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [ "Black" ],
    inStock: true,
  },
  {
    id: "essential-tshirt-3",
    name: "New School T-Shirt",
    description: "Our signature cotton t-shirt with a relaxed fit and premium feel.",
    price: 299.99,
    image: "/Devol Essentials/IMG_20250524_113835.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "T-Shirts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [ "White" ],
    inStock: true,
  },
  {
    id: "essential-tshirt-4",
    name: "New School T-Shirt",
    description: "Our signature cotton t-shirt with a relaxed fit and premium feel.",
    price: 299.99,
    image: "/Devol Essentials/IMG_20250524_115131.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "T-Shirts",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [ "Black" ],
    inStock: true,
  },
  {
    id: "essential-puffer-1",
    name: "Ep Puffer Jacket",
    description: "Versatile Jacket with a comfortable relaxed fit and durable fabric.",
    price: 599.99,
    image: "/Devol Essentials/IMG_20250524_113419.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Jackets",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "essential-puffer-2",
    name: "SL Puffer Jacket",
    description: "Versatile Jacket with a comfortable relaxed fit and durable fabric.",
    price: 499.99,
    image: "/Devol Essentials/IMG_20250524_114132.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Jackets",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "formal-pants-1",
    name: "Formal Pants",
    description: "Premium formal pants with custom embroidery, limited quantities available.",
    price: 799.99,
    image: "/Devol Essentials/IMG_20250524_114200.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Pants",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "essential-hat-1",
    name: "Denim Hat",
    description: "Denim Hat perfect for casual wear on sunny days.",
    price: 249.99,
    image: "/Devol Essentials/IMG_20250524_114034.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hats",
    isExclusive: false,
    sizes: ["One Size"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "essential-hat-2",
    name: "Denim Hat",
    description: "Denim Hat perfect for casual wear on sunny days.",
    price: 249.99,
    image: "/Devol Essentials/IMG_20250524_114034.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hats",
    isExclusive: false,
    sizes: ["One Size"],
    colors: ["Blue"],
    inStock: true,
  },
  {
    id: "essential-cap-1",
    name: "5 Panel Cap",
    description: "Adjustable cotton cap with embroidered logo.",
    price: 249.99,
    image: "/Devol Essentials/IMG_20250524_114507.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hats",
    isExclusive: false,
    sizes: ["One Size"],
    colors: ["Black", "White"],
    inStock: true,
  },
  {
    id: "essential-hoodie-1",
    name: "Essential Hoodie",
    description: "Comfortable hoodie made from premium cotton blend for everyday wear.",
    price: 499.99,
    image: "/Devol Essentials/IMG_20250630_182938.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hoodies",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "essential-hoodie-2",
    name: "Essential Hoodie",
    description: "Comfortable hoodie made from premium cotton blend for everyday wear.",
    price: 499.99,
    image: "/Devol Essentials/IMG_20250630_183111.jpg?height=500&width=500",
    category: "Essentials",
    subcategory: "Hoodies",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    inStock: true,
  },
  

  //exclusives
  {
    id: "exclusive-hoodie-1",
    name: "Exclusive Hoodie",
    description: "Comfortable hoodie made from premium cotton blend for everyday wear.",
    price: 499.99,
    image: "/Devol Essentials/IMG_20250524_114006.jpg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Hoodies",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "exclusive-camopants-1",
    name: "Camo Pants",
    description: "Advanced technical Camouflage Cargo pants.",
    price: 799.99,
    image: "/Exclusive /IMG_20250524_114229.jpg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Pants",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camoflauge"],
    inStock: true,
  },
  {
    id: "exclusive-cmspants-1",
    name: "CMS Pants",
    description: "Advanced technical Camouflage Cargo pants.",
    price: 699.99,
    image: "/Exclusive /IMG_20250524_114307.jpg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Pants",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    inStock: true,
  },
  {
    id: "exclusive-cargopants-1",
    name: "Cargo Pants",
    description: "Premium cargo pants .",
    price: 599.99,
    image: "/Exclusive /IMG_20250524_114339.jpg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Pants",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "exclusive-camopants-2",
    name: "MLT Camo Pants",
    description: "Advanced technical MLT Camouflage Cargo pants.",
    price: 799.99,
    image: "/Exclusive /IMG_20250524_113634.jpg?height=500&width=500",
    category: "Exclusives",
    subcategory: "Pants",
    isExclusive: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camoflauge"],
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
