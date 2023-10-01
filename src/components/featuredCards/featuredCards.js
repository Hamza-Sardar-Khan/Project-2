import React, { useEffect } from "react"
import CheckIcon from "../../assets/images/icon-circle-tick.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { ReadMore } from "../helperComponents/helpers"
import "./style/featured.scss"

const FeaturesCards = ({ data, slug }) => {
  const pageData = data
  function checkIfVisible(element) {
    const isVisible =
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
        ? true
        : false
    return isVisible
  }
  useEffect(() => {
    ;[...document.getElementsByClassName("featured-videos-home")].forEach(
      vid => {
        if (checkIfVisible(vid)) {
          const vidSrc = vid.firstChild
          vidSrc.src = vidSrc.dataset.src
        }
        vid.load()
      }
    )
  }, [])
  function FeaturedCard({
    headingFirst,
    headingSecond,
    list,
    title,
    subtitle,
    desc,
    infoTitle,
    info,
    image,
    imageAlt,
    video,
    url = "",
    btnText = "Get Started",
    order,
    animateDirection,
  }) {
    let rateClass = ""
    if (slug === "ratings") {
      rateClass = "order-ratings"
    } else {
      rateClass = ""
    }
    console.log(info)
    const FeaturedCardIndustry = () => {
      return (
        <>
          <div className="image-wrapper">
            <ScrollAnimation
              animateIn={animateDirection}
              animateOut={animateDirection}
            >
              <img
              loading="lazy"
                className="img-1"
                width="373.03px"
                height="219.15px"
                src={image?.publicURL ? image.publicURL : image}
                alt={imageAlt}
              />
            </ScrollAnimation>
          </div>
          <div className="info-section">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h2 className="sw-heading-1">{title}</h2>
              <p className="sw-text">{desc}</p>
              {info !== null && typeof info === "object" && info.length > 0 ? (
                info.map(info => {
                  console.log("first")
                  return (
                    <div className="checkmark">
                      <img loading="lazy" alt="" src={CheckIcon} />
                      <div>
                        <p className="sw-text">{info}</p>
                        {/* <p className='sw-text'>{info}</p> */}
                      </div>
                    </div>
                  )
                })
              ) : (
                <div></div>
              )}
              <ReadMore url={url}>{btnText}</ReadMore>
            </ScrollAnimation>
          </div>
        </>
      )
    }

    const FeaturedCardWhySecuri = () => {
      return (
        <>
          <div className="image-wrapper">
            <ScrollAnimation
              animateIn={animateDirection}
              animateOut={animateDirection}
            >
              <img loading="lazy"
                className={video ? "featured-images-home" : "img-1"}
                width="373.03px"
                height="219.15px"
                src={image?.publicURL ? image.publicURL : image}
                alt={imageAlt}
              />
              {video && (
                <video loading="lazy"
                  width="852"
                  height="478"
                  className="featured-videos-home"
                  loop="true"
                  autoPlay="autoplay"
                  poster={image}
                  muted
                >
                  <source data-src={video} type="video/mp4" />
                </video>
              )}
            </ScrollAnimation>
          </div>
          <div className="info-section">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <span className="sw-subtitle">{subtitle}</span>
              <h2 className="sw-heading-1">{title}</h2>
              <p className="sw-text">{desc}</p>
              {info !== null && typeof info === "object" && info.length > 0 ? (
                info.map(info => {
                  console.log("first")
                  return (
                    <div className="checkmark">
                      <img alt="" src={CheckIcon} />
                      <div>
                        <p className="sw-text">{info}</p>
                        {/* <p className='sw-text'>{info}</p> */}
                      </div>
                    </div>
                  )
                })
              ) : (
                <div></div>
              )}
              <ReadMore url={url}>{btnText}</ReadMore>
            </ScrollAnimation>
          </div>
        </>
      )
    }

    const FeaturedHomepage = () => {
      return (
        <>
          <div className="image-wrapper">
            <ScrollAnimation
              animateIn={animateDirection}
              animateOut={animateDirection}
            >
              <img loading="lazy"
                className="featured-images-home"
                width="373.03px"
                height="219.15px"
                src={image?.publicURL ? image.publicURL : image}
                alt={imageAlt}
              />
              <video loading="lazy"
                width="852"
                height="478"
                className="featured-videos-home"
                loop="true"
                autoplay="autoplay"
                poster={image}
                muted
              >
                <source data-src={video} type="video/mp4" />
              </video>
            </ScrollAnimation>
          </div>
          <div className="info-section">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h2 className="sw-heading-1">
                {headingFirst}
                <br />
                {headingSecond}
              </h2>
              <ul>
                {info !== null &&
                typeof info === "object" &&
                info.length > 0 ? (
                  info.map(info => {
                    console.log("first")
                    return (
                      <div className="checkmark">
                        <img loading="lazy" alt="" src={CheckIcon} />
                        <div>
                          <p className="sw-text">{info}</p>
                          {/* <p className='sw-text'>{info}</p> */}
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div></div>
                )}
              </ul>
              <ReadMore url={url}>{btnText}</ReadMore>
            </ScrollAnimation>
          </div>
        </>
      )
    }
    return (
      <div className={`featured-card ${order} ${rateClass}`}>
        {subtitle && subtitle.length > 0 ? (
          <FeaturedCardWhySecuri />
        ) : list && list.length > 0 ? (
          <FeaturedHomepage />
        ) : (
          <FeaturedCardIndustry />
        )}
      </div>
    )
  }
  function FeaturedCards() {
    return (
      <div className="featured-card-section">
        {pageData.map((pageData, index) =>
          index % 2 ? (
            <FeaturedCard
              key={index}
              headingFirst={pageData.headingFirst}
              headingSecond={pageData.headingSecond}
              list={pageData.list}
              title={pageData.title}
              subtitle={pageData.subtitle}
              desc={pageData.desc}
              infoTitle={pageData.infoTitle}
              info={pageData.info}
              image={pageData.image}
              video={pageData.video}
              imageAlt={pageData.imageAlt}
              url={pageData.url}
              btnText={pageData?.btnText}
              animateDirection="bounceInLeft"
            />
          ) : (
            <FeaturedCard
              key={index}
              headingFirst={pageData.headingFirst}
              headingSecond={pageData.headingSecond}
              list={pageData.list}
              title={pageData.title}
              subtitle={pageData.subtitle}
              desc={pageData.desc}
              infoTitle={pageData.infoTitle}
              info={pageData.info}
              image={pageData.image}
              video={pageData.video}
              imageAlt={pageData.imageAlt}
              url={pageData.url}
              btnText={pageData?.btnText}
              order="reverse-order"
              animateDirection="bounceInRight"
            />
          )
        )}
      </div>
    )
  }

  return (
    <>
      <FeaturedCards />
    </>
  )
}

export default FeaturesCards
