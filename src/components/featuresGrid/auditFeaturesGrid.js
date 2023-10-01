import React from "react"
import DfeIcon from "../../assets/images/dfe-icon.svg"
import CyberEssential from "../../assets/images/cyber-essentials.svg"
import DataProtection from "../../assets/images/data-protection.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { SectionHeadings } from "../helperComponents/helpers"
import "./featuresGrid.scss"

const AuditFeaturesGrid = ({ heading, subheading, inPricing }) => {
  return (
    <div className={`feature-cards-container ${inPricing && "in-pricing"}`}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionHeadings
          mt="0"
          mb="5"
          heading={heading}
          subheading={subheading}
          subHeadingType="sw-heading-2"
        />
      </ScrollAnimation>
      <div className="feature-cards-content">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={DfeIcon}
              className="feature-img"
              alt="DfE Cybersecurity Standards"
            />
            <div>
              <h5 className="feature-card-heading">DfE Cybersecurity Standards</h5>
              <p className="feature-card-para">
              Ensure your school is adhering to the  DfE’s Cybersecurity guidelines 
              and best practices for securing educational technology.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="1" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={DataProtection}
              className="feature-img"
              alt="General Data Protection Regulation"
            />
            <div>
              <h5 className="feature-card-heading">
                General Data Protection Regulation
              </h5>
              <p className="feature-card-para">
              Find out if your school is handling and processing personal data 
              in accordance with the regulation's requirements.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="2" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={CyberEssential}
              className="feature-img"
              alt="TCyber Essentials"
            />
            <div>
              <h5 className="feature-card-heading">
                Cyber Essentials
              </h5>
              <p className="feature-card-para">
              Find out if your school is meeting the requirements for Cyber Essentials certification.  
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default AuditFeaturesGrid
