import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "./contactUsForm"
import "./contactUs.scss"

const Index = () => {
  return (
    <div className="contact-section">
      <div className="contact-inner">
        <div className="contact-about">
          <h1 className="fome-heading sw-heading-1">
            Contact our team
          </h1>
          <StaticImage 
            src="../../assets/images/sales-form-lifestyle.jpg" 
            alt="contact"
            width={636}
            height={294}
          />
          <h2>
            We take pride in customer satisfaction and make it a priority because we know that many others do not. We know how frustrating it can be to experience poor customer support.
          </h2>
          <p>
            Securiwiser is one of the top performing cyber security companies offering cyber risk solutions and assessment reports in real-time. We provide a range of cybersecurity services including vulnerability assessment, risk identification, and management, etc. that help businesses to stay protected from the risk of cyber-attacks. We work with the most effective cybersecurity solution providers. Get in touch with us today on <a href='mailto:info@securiwiser.com'>info@securiwiser.com</a>.
          </p>
        </div>
        <div className="form-section section-card">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Index
