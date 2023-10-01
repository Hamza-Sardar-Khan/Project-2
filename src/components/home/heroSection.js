import React, { useState } from "react"
import VideoModal from "./videomodal"
import ScrollAnimation from "react-animate-on-scroll"

import "./style/hero-styles.scss"

const HomeHeroSection = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className={`home-dark-hero home-feature`}>
      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className={`home-hero-wrapper`}>
        <div className="home-hero-content">
          <h1 className="hero-heading">Cybersecurity Made Easy for Schools</h1>
          <p className="sw-text">
            We provide comprehensive cybersecurity solutions for schools to
            ensure they stay cyber safe and meet DfE standards.
          </p>

          <div className="button-container">
  <div className="get-score-button">
    <a
      className="sw-btn sw-btn-primary sw-btn-lg"
      role="button"
      href="https://app.securiwiser.com/login"
      title={"Get a Free Audit"}
    >
      {"Get a Free Audit"}
    </a>
  </div>
  <div className="link-btn hero-btn sw-nav-links" onClick={() => setModalShow(true)}>
  Watch Video <PlayBtn />
</div>
</div>
        </div>
        <div className="home-hero-img-wrapper">
          <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown">
            <div className="home-hero-img"></div>
          </ScrollAnimation>
        </div>
        <div className="hero-dummy"></div>
      </div>
    </div>
  )
}

const PlayBtn = () => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_0_380" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000488281 0.570496H23.5363V24.106H0.000488281V0.570496Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_0_380)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7685 3.14001C6.69534 3.14001 2.57049 7.26486 2.57049 12.338C2.57049 17.4112 6.69534 21.5361 11.7685 21.5361C16.8417 21.5361 20.9665 17.4112 20.9665 12.338C20.9665 7.26486 16.8417 3.14001 11.7685 3.14001ZM11.7685 24.1061C5.27927 24.1061 0.000488281 18.8273 0.000488281 12.338C0.000488281 5.84879 5.27927 0.570007 11.7685 0.570007C18.2578 0.570007 23.5365 5.84879 23.5365 12.338C23.5365 18.8273 18.2578 24.1061 11.7685 24.1061Z" fill="#37384f"/>
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5438 12.3383L7.85742 17.1802V7.4964L17.5438 12.3383Z" fill="#37384f"/>
    </svg>
  )
}

export default HomeHeroSection
