import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "./context/CartContext"

export default function CartCounterTotal() {
  const [cartData] = useContext(CartContext)
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    setSubTotal(
      cartData.map((item) => +item.qty).reduce((sum, ele) => sum + ele) * 499
    )
  }, [cartData])

  return (
    <div className="cart__counterDiv">
      <div className="cart__counter">
        <h2>Your Cart</h2>
        <div className="cart__counter-details">
          <div>
            <p>Subtotal</p>
            <p>
              $
              {cartData
                .map((item) => +item.qty)
                .reduce((sum, ele) => sum + ele) * 499}
            </p>
          </div>
          <div>
            <p>Shipping fee</p>
            <p>$5</p>
          </div>
          <div>
            <p>Coupon</p>
            <p>-</p>
          </div>
        </div>
        <hr />
        <div className="cart__counter-total">
          <h2>TOTAL</h2>
          <h2>${subTotal + 20}</h2>
        </div>
        <div className="checkout-btnsDiv">
          <Link to='/orderplaced'><button className="cart__checkout-btn">Check-out</button></Link>
          <button className="cart__checkout-goBack">
            <NavLink to={"/cart"} className="link">
              Go back
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}
