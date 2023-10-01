import React from "react"
import Network from "../../assets/images/network.svg"
import VulnerabilitiesTracker from "../../assets/images/tracker.svg"
import ScoringChart from "../../assets/images/scoringchart.svg"
import PDFReport from "../../assets/images/pdf.svg"
import Exposure from "../../assets/images/exposure.svg"
import DNSHealth from "../../assets/images/dns.svg"
import CubitScore from "../../assets/images/cubit.svg"
import BrandIPReputation from "../../assets/images/brandip.svg"
import ApplicationSecurity from "../../assets/images/application_security.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { SectionHeadings } from "../helperComponents/helpers"
import "./featuresGrid.scss"

const FeaturesGrid = ({ heading, subheading, inPricing }) => {
  return (
    <div className={`feature-cards-container ${inPricing && 'in-pricing'}`}>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <SectionHeadings
        mt="0"
        mb="5"
        heading={heading}
        subheading={subheading}
      />
    </ScrollAnimation>
      <div className="feature-cards-content">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy" src={Network} className="feature-img" alt="Network Security" />
            <div>
              <h5 className="feature-card-heading">Network Security</h5>
              <p className="feature-card-para">
              We monitor your network and help you protect your data against breaches 
              and intrusions
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="1" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={ApplicationSecurity}
              className="feature-img"
              alt="Application Security"
            />
            <div>
            <h5 className="feature-card-heading">Application Security</h5>
            <p className="feature-card-para">
              We help protect your website and online services from security
              threats coming in from applications
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="2" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy" src={Exposure} className="feature-img" alt="Exposure" />
            <div>
            <h5 className="feature-card-heading">Exposure</h5>
            <p className="feature-card-para">
              We check the dark web for any exposed data from your school
              emails
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="3" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy" src={DNSHealth} className="feature-img" alt="DNS Health" />
            <div>
            <h5 className="feature-card-heading">DNS Health</h5>
            <p className="feature-card-para">
              We rate your DNS Health and how vulnerable you are to attacks like
              DDoS and DNS hijacking
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="4" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={BrandIPReputation}
              className="feature-img"
              alt="Brand & IP Reputation"
            />
            <div>
            <h5 className="feature-card-heading">Brand & IP Reputation</h5>
            <p className="feature-card-para">
              We help protect your brand and IP from abuse and reputational
              impacts
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="5" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy" src={CubitScore} className="feature-img" alt="Cubit Score" />
            <div>
            <h5 className="feature-card-heading">Cubit Score</h5>
            <p className="feature-card-para">
              We give you a cubit score to show you how well you and your
              vendors stack up
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="6" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy" src={PDFReport} className="feature-img" alt="PDF Report" />
            <div>
            <h5 className="feature-card-heading">PDF Report</h5>
            <p className="feature-card-para">
              We provide you with weekly/monthly detailed PDF Reports
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="7" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={ScoringChart}
              className="feature-img"
              alt="Scoring Chart"
            />
            <div>
            <h5 className="feature-card-heading">Scoring Chart</h5>
            <p className="feature-card-para">
              We have a scoring chart so you can sort out the priority threats
              first
            </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay="8" animateIn="fadeIn" animateOut="fadeOut">
          <div className="feature-card1">
            <img loading="lazy"
              src={VulnerabilitiesTracker}
              className="feature-img"
              alt="Vulnerabilities Tracker"
            />
            <div>
            <h5 className="feature-card-heading">Vulnerabilities Tracker</h5>
            <p className="feature-card-para">
              We alert you to and help you keep track of vulnerabilities in your
              infrastructure
            </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default FeaturesGrid
