import React, { useState } from "react"
import HeroSection from "./heroSection"
import FeaturesGrid from "../featuresGrid/featuresGrid"
import "./style/index.scss"
import "./style/cards.scss"
import PriceCard from "./priceCard"
import PricingFAQ from "./pricingFAQ"


const Index = () => {
  const [safe, setSafe] = useState(true)
  return (
    <div>
      <HeroSection safe={safe} setSafe={setSafe} />
      <PriceCard safed={safe} />      
      <FeaturesGrid 
        heading="Basic features in all Plans" 
        subheading="Standard Powerful Built-in Tools" 
        inPricing
      />
      <PricingFAQ />
    </div>
  )
}

export default Index
