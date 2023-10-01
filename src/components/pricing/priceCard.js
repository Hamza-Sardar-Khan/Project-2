import React from "react"
import Tik from "../../assets/images/tik.svg"
import ScrollAnimation from "react-animate-on-scroll"
const PriceCard = ({ safed }) => {
  return (
    <>
      <div className="price_card_section">
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceInLeft">
          <div className="basic_card secondary_cards">
            <h1>Basic</h1>
            <h3>
              For companies just getting started with cyber security.
            </h3>
            <h4 className="free">
              FREE
            </h4>
            <a
              style={{ textDecoration: "none" }}
              href="https://app.securiwiser.com/demo"
            >
              <button>Create Free Account</button>
            </a>
            <p className="plus"> </p>
            <ul>
              <li>
                <img  loading="lazy"  alt="" src={Tik} />
                <p>Weekly Scans</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>100+ Security Checks</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Monthly PDF Report</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Vulnerability Tracker</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Scoring Chart</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>1 Domain</p>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="premium_card_section">
            <h6>Most Popular</h6>
            <div className="basic_card premium_card">
              <h1>Premium</h1>
              <h3>
                For companies that need to monitor online security with
                confidence.
              </h3>
              <h4>
                <sup>£</sup>
                {safed ? "20" : "29"}
                <span>
                  /month/domain
                </span>
              </h4>
              {safed ? (
                  <p>Billed Annually</p>
              ) : (
                <p>Billed Monthly</p>
              )}
              <a
                style={{ textDecoration: "none" }}
                href="https://app.securiwiser.com/demo"
              >
                <button>Start Free Trial</button>
              </a>
              <p className="plus">Basic features plus:</p>
              <hr />
              <ul>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Daily Scans</p>
                </li>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Portfolios</p>
                </li>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Weekly PDF Report</p>
                </li>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Compare companies risk</p>
                </li>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Scoring Chart</p>
                </li>
                <li>
                  <img loading="lazy"  alt="" src={Tik} />
                  <p>Invite Team Members</p>
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInRight">
          <div className="basic_card secondary_cards business">
            <h1>Business</h1>
            <h3>
              For companies that need to work across third-party compliance
            </h3>
            <h4>
              <sup>£</sup>
              {safed ? "35" : "49"}
              <span>
                /month/domain
              </span>
            </h4>

            {safed ? (
              <>
                <p> Billed Annually</p>
              </>
            ) : (
              <p>Billed Monthly</p>
            )}
            <a
              style={{ textDecoration: "none" }}
              href="https://app.securiwiser.com/demo"
            >
              <button className="business_btn">Start Free Trial</button>
            </a>
            <p className="plus">Premium features plus:</p>
            <hr />
            <ul>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Compliance Forms</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Whitelabel Report</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Vulnerability Tracker</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>Dark Web Search</p>
              </li>
              <li>
                <img loading="lazy"  alt="" src={Tik} />
                <p>API Access</p>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default PriceCard
