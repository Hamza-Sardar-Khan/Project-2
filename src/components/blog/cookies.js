import React from "react"
import "./style/card.scss"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { Link } from "gatsby"
const Index = ({ setCookies }) => {
  const location = useLocation()

  return (
    <div  className="cookies-policy">
      <div className="content">
        <div className="des">
          <h3>COOKIES POLICY</h3>
          <div className="link-decs">
            <p>
              This site must use cookies to offer a better browsing experience.{" "}
              Find out more on
            </p>
            <Link
              className="cookies-link"
              to="https://www.securiwiser.com/cookie-policy/"
            >
              how we use cookies.
            </Link>
          </div>
        </div> 
        <div className="dual">
          <button
            className="sw-primary-btn sw-nav-links sw-font-weight-md btn-1"
            onClick={() => {
              initializeAndTrack(location)
              if (typeof window != "undefined") {
                window.localStorage.setItem("cookie-set", "true")
                setCookies()
              }
            }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index
