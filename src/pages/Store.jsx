import React, { useContext } from "react"
import { ProductContext } from "../components/context/Context"
import StoreProducts from "../components/StoreProducts"

export default function Store() {
  const productsData = useContext(ProductContext)
  
  return (
    <div className="store">
      <StoreProducts category={productsData} />
    </div>
  )
}
