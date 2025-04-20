export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  subcategory: string
  isExclusive: boolean
  sizes: string[]
  colors: string[]
  inStock: boolean
}
