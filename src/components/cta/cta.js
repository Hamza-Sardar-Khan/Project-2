import React from "react"
import { SectionHeadings } from "../helperComponents/helpers"
import GetScore from "./GetScore"
import "./style/cta.scss"


const Cta = ({
  heading,
  headingBold,
  headingRest,
  subheading,
  button = "",
}) => {
  return (
    <div className="cta-container">
     
        {heading && subheading ? (
          <SectionHeadings
            heading={heading}
            headingBold={headingBold}
            headingRest={headingRest}
            subheading={subheading}
          />
        ) : (
          <SectionHeadings
            heading={"Secure your "}
            headingBold={"school "}
            headingRest={"today for free?"}
            subheading={"Try Securiwiser for free"}
          />
        )}
      
      <GetScore button={button} />
    </div>
  )
}

export default Cta
