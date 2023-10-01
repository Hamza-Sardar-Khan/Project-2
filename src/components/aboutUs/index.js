import React from "react"
import HeroSection from "./heroSection.js"
import AboutSection from "./aboutSection.js"
import Cta from "../cta/cta.js"
import "./style/index.scss"

const Index = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Cta
        heading="Ready to improve your "
        headingBold="education security "
        headingRest="today?"
        subheading="Try Securiwiser for free"
      />
    </div>
  )
}

export default Index
