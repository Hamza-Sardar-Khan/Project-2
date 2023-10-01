import React from "react"
import PointerIcon from "../../assets/images/arrow-triangle.svg"
import { Link } from "gatsby"

import { SectionHeadings } from "../helperComponents/helpers"
import ScrollAnimation from "react-animate-on-scroll"

import "./style/managementCards.scss"

const Cards = ({ data }) => {
  return (
    <div className="management-cards">
      {data?.map(cardData => {
        return (
          <div className="management-card" key={cardData.slug}>
            <Link to="#" aria-label="Read more about">
              <img loading="lazy"
                src={cardData.image}
                alt="securiwiser"
                width="450"
                height="250"
              />
            </Link>
            <div className="management-card-info">
              <div className="management-card-info-top">
                <img loading="lazy" src={cardData.icon} alt={cardData.slug} />
                <span>{cardData.name}</span>
              </div>

              <div className="management-card-info-mid">
                <h3>{cardData?.title}</h3>
                <p>{cardData?.desc}</p>
              </div>
            </div>
            <div className="management-card-info-bottom">
              <a
                href={cardData.slug}
                className="sw-btn sw-btn-outline sw-btn-primary"
              >
                <spa>{cardData.name}</spa>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.628906 0.152344V15.0988L16.0566 7.62756L0.628906 0.152344Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ManagementCards = ({ data }) => {
  return (
    <div className="management-section">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionHeadings
          heading={"All-in-one cybersecurity compliance software"}
          subheading={""}
        />
      </ScrollAnimation>
      <Cards data={data} />
    </div>
  )
}

export default ManagementCards
