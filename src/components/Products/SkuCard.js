import React from "react"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem",
  marginBottom: "1.2rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "350px",
}
const buttonStyles = {
  fontSize: "18px",
  textAlign: "center",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#C1292E",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  fontFamily: "Fredericka the Great",
  margin:"auto",
}

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()

  return (
    <div style={cardStyles}>
          <h4>{ sku.name }</h4>
          <img src={sku.images} />
      <p>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price, 10),
          currency: sku.currency,
        })}
      </p>
      <button style={buttonStyles} onClick={() => addItem(sku)}>
        ADD TO CART
      </button>
    </div>
  )
}

export default SkuCard
