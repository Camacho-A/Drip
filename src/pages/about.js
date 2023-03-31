import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h2>WMNS AIR JORDAN 4 RETRO 'STARFISH'</h2>
    <p>
      Inspired by spacesuits, the Wmns Air Jordan 4 Retro 'Starfish' emerges
      with a unique construction. The shoe's upper features a black metallic
      mesh build, with raw edges revealing the Starfish underlays.
    </p>
    <p> Price: $150.00 USD</p>
  
    <button>Add to Cart</button>
    <img
      src="https://cdn.flightclub.com/3000/TEMPLATE/205832/1.jpg"
      alt="WMNS AIR JORDAN 4 RETRO 'STARFISH'"
        ></img>
        


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
