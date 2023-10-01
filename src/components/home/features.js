import React from "react"
import DFE from "../../assets/images/dfe.svg"
import Specialist from "../../assets/images/specialist.svg"
import School from "../../assets/images/school.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { SectionHeadings } from "../helperComponents/helpers"
import "./style/features.scss"

const FeaturesGrid = ({ inPricing }) => {
  return (
    <div
      className={`feature-cards-container home-feature-cards ${
        inPricing && "in-pricing"
      }`}
    >
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className={"section-heading"}>
          <h2 className="sw-heading-1">Why Securiwiser</h2>
          <p className="sw-heading-3">
            We offer tailor-made solutions for schools, including threat
            monitoring, audit tools and cyber awareness courses. Our deep
            understanding of the education industry sets us apart.
          </p>
        </div>
      </ScrollAnimation>
      <div className="feature-cards-content">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={Specialist}
              className="feature-img"
              alt="Network Security"
            />
            <div>
              <h3 className="feature-card-heading">Education specialist</h3>
              <p className="feature-card-para">
                We have an in-depth understanding of the specific challenges and
                threats faced by schools
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="1" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={School}
              className="feature-img"
              alt="Application Security"
            />
            <div>
              <h3 className="feature-card-heading">
                Cybersecurity for schools
              </h3>
              <p className="feature-card-para">
                Protect your school's networks, systems, and data from cyber
                attacks with our cybersecurity solution for schools.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="2" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={DFE}
              className="feature-img"
              alt="Exposure"
            />
            <div>
              <h3 className="feature-card-heading">DfE compliance</h3>
              <p className="feature-card-para">
                Ensure your school meets the DfE cybersecurity standards with
                our expert guidance and solutions.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default FeaturesGrid
