import Link from "next/link"

const categories = [
  { name: "T-Shirts", path: "/shop?subcategory=T-Shirts", image: "/Devol Essentials/IMG_20250524_113248.jpg?height=400&width=300" },
  { name: "Hoodies", path: "/shop?subcategory=Hoodies", image: "/Devol Essentials/IMG_20250524_114006.jpg?height=400&width=300" },
  { name: "Jackets", path: "/shop?subcategory=Jackets", image: "/Devol Essentials/IMG_20250524_114132.jpg?height=400&width=300" },
  { name: "Pants", path: "/shop?subcategory=Pants", image: "/Devol Essentials/IMG_20250524_114200.jpg?height=400&width=300" },
  { name: "Shorts", path: "/shop?subcategory=Shorts", image: "/coming-soon-2070393_640.png?height=400&width=300" },
  { name: "Hats", path: "/shop?subcategory=Hats", image: "/Devol Essentials/IMG_20250524_114034.jpg?height=400&width=300" },
]

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.path} className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <h3 className="text-white font-medium text-lg">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
