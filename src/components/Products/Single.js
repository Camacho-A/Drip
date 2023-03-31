import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"



export default props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        sneaker: stripePrice {
          product {
            id
            name
            images
          }
        }
      }
    `}
    render={({ sneaker }) => (
      <div>
        {sneaker.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            images: price.product.images[0],
          }
          return <SkuCard key={price.product.images[0]} sku={newSku} />
        })}
      </div>
    )}
  />
)
