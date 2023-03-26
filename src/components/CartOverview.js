import React, { useState } from "react"

import { useShoppingCart } from "use-shopping-cart"

const buttonStyles = {
  fontSize: "22px",
  //   color: "white",
    fontWeight: "bold",
  textAlign: "center",
  outline: "none",
  padding: "14px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#008ce7",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  fontFamily: "Fredericka the Great",
  margin: "auto 12px",
  cursor: "pointer",
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart()

  return (
    <div>
      {/* This is where we'll render our cart */}
      <p className="total">Number of Items in Cart: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? "Loading..." : "Checkout"}
      </button>
      <button style={buttonStyles} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  )
}

export default Cart
