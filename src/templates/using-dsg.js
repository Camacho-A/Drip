import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = (sku) => (
  <Layout>
   
    <p>{sku.name}</p>
    <p>
      Image
      
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)



export const Head = () => <Seo title="About" />

export default UsingDSG
