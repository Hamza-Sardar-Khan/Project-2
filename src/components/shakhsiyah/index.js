import React from "react"
import AboutSection from "./aboutSection.js"
import Cta from "../cta/cta.js"
import "./style/index.scss"
import HeroSectionDark from "../heroSectionDark/heroSectionDark.js"
import EBookCta from "../eBook/eBookCta.js"
import page from './img/page.svg'
import logo from './img/logo.svg'
const Index = () => {
  var button = {
    url: "#about-section",
    text: "Read more"
  };
  return (
    <div>
      <HeroSectionDark school="Shakhsiyah Schools " liteTitle ="Case Studies"logo={logo} button={button} slug="tsta" title="Shakhsiyah Schools" description="Securiwiser enabled Shakhsiyah Schools to build a robust vendor risk management program." category="CASE STUDY" image={page} imageAlt="page" />
      <AboutSection />
      <EBookCta/>
      <Cta
        heading="Ready to improve your "
        headingBold="school security "
        headingRest="today?"
        subheading="Try Securiwiser for free"
      />
    </div>
  )
}

export default Index
