import React from "react"

import PDFReport from "../../assets/images/pdf.svg"
import TailoredSolution from "../../assets/images/tailored-solution.svg"
import ComlianceIcon from "../../assets/images/compliance-icon.svg"
import Wallet from "../../assets/images/wallet.svg"
import Allinone from "../../assets/images/allinone.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { SectionHeadings } from "../helperComponents/helpers"
import "./featuresGrid.scss"

const AboutFeaturesGrid = () => {
  return (
    <div className={`about-feature-cards-container`}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionHeadings mt="0" mb="5" heading={"What sets us apart"} />
      </ScrollAnimation>
      <div className="about-feature-cards-content">
        <ScrollAnimation delay="1" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card">
            <img loading="lazy"
              src={TailoredSolution}
              className="feature-img"
              alt="Tailored Solutions"
            />
            <div>
              <h5 className="feature-card-heading">Tailored Solutions</h5>
              <p className="feature-card-para">
                Our solutions are customized to meet the specific needs of each
                school, ensuring that their unique requirements are met.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="2" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card">
            <img loading="lazy"
              src={ComlianceIcon}
              className="feature-img"
              alt="Compliance Assistance"
            />
            <div>
              <h5 className="feature-card-heading">Compliance Assistance</h5>
              <p className="feature-card-para">
                We help schools meet the DfE's cybersecurity standards and
                ensure that they are fully compliant with all relevant
                regulations and guidelines.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="3" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card">
            <img  loading="lazy" src={Wallet} className="feature-img" alt="Cost-Effective" />
            <div>
              <h5 className="feature-card-heading">Cost-Effective</h5>
              <p className="feature-card-para">
                We offer cost-effective solutions and value for money, allowing
                schools to enhance their cybersecurity posture without breaking
                the budget.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="3" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card">
            <img loading="lazy" src={Allinone} className="feature-img" alt="One-Stop Shop" />
            <div>
              <h5 className="feature-card-heading">One-Stop Shop</h5>
              <p className="feature-card-para">
                From automated threat monitoring to cyber awareness training, we
                make it easy and convenient to get the protection you need.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default AboutFeaturesGrid
