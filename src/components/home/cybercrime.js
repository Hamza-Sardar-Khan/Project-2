import React from "react"
import Cybersec1 from "../../assets/images/cybersec-1.svg"
import Cybersec2 from "../../assets/images/cybersec-2.svg"
import CybersecMobile from "../../assets/images/cybersec-mobile.svg"
import ScrollAnimation from "react-animate-on-scroll"
import "./style/hacker.scss"

const Cybercrime = () => {
  return (
    <div className="cybercrime-section">
      <div className="cybercrime">
        <img alt="cybercrime" src={Cybersec1}></img>
        <img alt="cybercrime" src={CybersecMobile}></img>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h3>
              Cybercrime is expected to <span>cost</span> the world <span>$6 trillion</span>.<br className="d-none d-xl-block"/> By 2025, this figure will climb to <span>$10.5 trillion</span>.
            </h3>
            <p>
              Packetlabs at August 2021
            </p>
          </ScrollAnimation>
        <img alt="cybercrime" src={Cybersec2}></img>
      </div>
    </div>
  )
}

export default Cybercrime
