import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import GetScore from "../cta/GetScore"
import "./style.scss"

const HeroSectionDark = ({
  slug,
  title,
  description,
  category = "",
  image,
  imageAlt,
  variant,
  button,
}) => {
  const DisplayCategory = () => {
    if (category !== "") {
      return (
        <div className="category">
          <div>{category}</div>
        </div>
      )
    }
    if (variant === "industry") {
      let breadcrumb = slug
      if (breadcrumb === "retail") {
        breadcrumb = "retail & services"
      }
      return (
        <div className="category">
          <div>Industry</div>
          <div className="arrow-right"></div>
          <div>{breadcrumb}</div>
        </div>
      )
    } else if (variant === "feature") {
      return (
        <div className="category">
          <div>{slug}</div>
        </div>
      )
    }
  }
  return (
    <div className={`dark-hero ${variant}`}>
      <div className={`dark-hero-wrapper`}>
        <div className="dark-hero-content">
          <DisplayCategory />
          <h1 className="hero-heading">{title}</h1>
          <p className="sw-text">{description}</p>
          {slug === "ratings" ? (
            <GetScore button={button} />
          ) : (
            <div className="get-score-button">
              <a
                className="sw-btn sw-btn-primary sw-btn-lg"
                role="button"
                href={button.url}
                title={button?.text}
              >
                {button?.text}
              </a>
            </div>
          )}
        </div>
        <div className="hero-img-wrapper">
          <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown">
            <img loading="lazy"
              className="hero-img"
              width="793px"
              height="441px"
              src={image?.publicURL ? image.publicURL : image}
              alt={imageAlt}
            />
            {/*
            <video className="hero-img-1" loop="true" autoplay="autoplay" muted>
              <source src={herosw} type="video/mp4" />
            </video>*/}
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionDark
