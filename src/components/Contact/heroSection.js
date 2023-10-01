import React from "react"
import ContactForm from "./contactUsForm"
import "./contactUs.scss"

const HeroSection = () => {
  return (
    <div className="main-section-cont">
      <div className="hero-section-about-cont">
        <div className="detail-section-cont">
          <h2 className="main-heading sw-headind-1 sw-font-weight-xs">
            Don’t be shy.
          </h2>
          <h1 className="sub-heading sw-headind-1 sw-font-weight-md">
            Get in touch
          </h1>

          <a className="cont-heading sw-paragraph-1 sw-font-weight-xs" href="#">
            Lets Connect
          </a>

          <p className="about-para-1 sw-paragraph-6 sw-font-weight-xs">
            We take pride in customer satisfaction and make it a priority
            because we know that many others do not. We know how frustrating it
            can be to experience poor customer support.
          </p>
          <p className="about-para-2 sw-paragraph-6 sw-font-weight-xs">
            Securiwiser is one of the top performing cyber security companies
            offering cyber risk solutions and assessment reports in real-time.
            We provide a range of cybersecurity services including vulnerability
            assessment, risk identification, and management, etc. that help
            businesses to stay protected from the risk of cyber-attacks. We work
            with the most effective cybersecurity solution providers. Get in
            touch with today!
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default HeroSection
