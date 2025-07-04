import React, { Suspense } from "react"
import ShopPage from "@/components/shop-page"

export default function ShopPageWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading shop page...</div>}>
      <ShopPage />
    </Suspense>
  )
}
