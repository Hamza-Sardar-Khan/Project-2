import React from "react"
import Cybersec1 from "../../assets/images/cybersec-1.svg"
import Cybersec2 from "../../assets/images/cybersec-2.svg"
import CybersecMobile from "../../assets/images/cybersec-mobile.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { Link } from "gatsby"
import "./style/eBookCta.scss"

const EBookCta = ({ eBookUrl, eBookTagline }) => {
  if (!eBookUrl) {
    eBookUrl = "/ebook/education/"
  }
  if (!eBookUrl) {
    eBookTagline = ""
  }
  return (
    <div className="ebook-section">
      <div className="ebook">
        <img  alt="ebook" src={Cybersec1}></img>
        <img  alt="ebook" src={CybersecMobile}></img>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h3>
            Download our free cyber security <span>eBook</span> {eBookTagline}
            </h3>
            <Link title="Download eBook" to={eBookUrl}>Download free eBook</Link>
          </ScrollAnimation>
        <img loading="lazy" alt="ebook" src={Cybersec2}></img>
      </div>
    </div>
  )
}

export default EBookCta
