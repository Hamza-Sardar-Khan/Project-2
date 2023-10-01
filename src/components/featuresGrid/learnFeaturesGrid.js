import React from "react"
import Network from "../../assets/images/network.svg"
import SecurityIcon from "../../assets/images/security-icon.svg"
import DataIcon from "../../assets/images/data-icon.svg"
import DigitalIcon from "../../assets/images/digital-icon.svg"
import Exposure from "../../assets/images/exposure.svg"
import DNSHealth from "../../assets/images/dns.svg"
import CubitScore from "../../assets/images/cubit.svg"
import BrandIPReputation from "../../assets/images/brandip.svg"
import ApplicationSecurity from "../../assets/images/application_security.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { SectionHeadings } from "../helperComponents/helpers"
import "./featuresGrid.scss"

const LearnFeaturesGrid = ({ heading, subheading, inPricing }) => {
  return (
    <div className={`feature-cards-container ${inPricing && "in-pricing"}`}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionHeadings
          mt="0"
          mb="5"
          heading={heading}
          subheading={subheading}
        />
      </ScrollAnimation>
      <div className="feature-cards-content">
        <ScrollAnimation delay="1" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={DigitalIcon}
              className="feature-img"
              alt="Digital Transformation"
            />
            <div>
              <h5 className="feature-card-heading">Digital Transformation</h5>
              <p className="feature-card-para">
                Our platform supports the digital transformation efforts of
                schools in the UK.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="2" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={DataIcon}
              className="feature-img"
              alt="Protect Student Data"
            />
            <div>
              <h5 className="feature-card-heading">Protect Student Data</h5>
              <p className="feature-card-para">
                Learn the skills and knowledge you need to protect sensitive
                data such as student information.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="3" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={SecurityIcon}
              className="feature-img"
              alt="Improve Security Culture"
            />
            <div>
              <h5 className="feature-card-heading">Improve Security Culture</h5>
              <p className="feature-card-para">
                Reduce the risk of cyberattacks and minimize downtime, saving
                you time and money in the long run.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default LearnFeaturesGrid
