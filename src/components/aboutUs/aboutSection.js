import React from "react"
import { ReadMore } from "../helperComponents/helpers.js"
import ScrollAnimation from "react-animate-on-scroll"
import "./style/index.scss"
import Vid from "../videoPlayer/videoPlayer.js"
import AboutFeaturesGrid from "../featuresGrid/aboutFeaturesGrid.js"

const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h2 className="sw-heading-1">We understand the education sector</h2>
        </ScrollAnimation>
        <div className="about-text">
          <p>
            At Securiwiser, we understand the importance of protecting sensitive
            information and ensuring the safety of students, teachers and staff
            in the digital world. That's why we launched a cybersecurity
            solution aimed at supporting the digital transformation efforts of
            schools in the UK. We committed to providing the best cybersecurity
            tools and support to schools.
          </p>
          <p>
            Our team of experienced professionals combines a passion for
            technology with a deep understanding of the education sector. We
            offer innovative solutions and expert guidance to schools looking to
            enhance their cybersecurity posture, all while ensuring that
            students can continue to learn and grow without unnecessary
            interruptions.
          </p>
        </div>

        <AboutFeaturesGrid />
      </div>

      <div class="about-media-wrapper">
        <div className="about-media">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div>
              <h2 className="sw-heading-1">
                We're more than just a service provider
              </h2>
              <p className="sw-text">
                We're partners in your school's cybersecurity success, and are
                dedicated to providing exceptional support and guidance with
                every step of the way to ensure your school becomes cyber
                resilient.
              </p>
            </div>
          </ScrollAnimation>
          <div>
            <Vid src="Ee396A2xr-0" provider="youtube" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
