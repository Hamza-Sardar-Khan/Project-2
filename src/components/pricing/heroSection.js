import React from "react"
import Switch from "react-switch"
import ScrollAnimation from "react-animate-on-scroll"

const HeroSection = ({ setSafe, safe }) => {
  return (
    <div className="hero-section pricing">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="hero-section-detail">
          <h1 className="sw-headind-1 sw-font-weight-md main-headin ">
            Risk-free, affordable plans!
          </h1>
          <h2 className="sw-paragraph-6 sw-font-weight-xs sub-heading">
            No transaction fees, 7 days satisfaction guarantee.
          </h2>
          <div className="price-detail-selection">
            <div className="save">Save up to 30%</div>
            <div className="prices">
              <div className="price-detail-montly">
                <p className="" style={{ color: safe ? null : "#2870ef" }}>
                  Monthly
                </p>
                &nbsp;&nbsp;&nbsp;
                <Switch
                  onChange={() => setSafe(!safe)}
                  checked={safe}
                  handleDiameter={5}
                  offColor="#2870EF"
                  onColor="#2870EF"
                  offHandleColor="#fff"
                  onHandleColor="#fff"
                  height={25}
                  width={50}
                  borderRadius={6}
                  checkedIcon={null}
                  uncheckedIcon={null}
                />
              </div>
              <div className="price-detail-yearly">
                <p className="" style={{ color: safe ? null : "black" }}>
                  Yearly
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default HeroSection
