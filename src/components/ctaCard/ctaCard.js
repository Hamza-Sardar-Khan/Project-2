import React from "react"
import HowSecure from "../../assets/images/get-your-free-score.svg"
import "./style.scss"

const CtaCard = () => {
  return (
    <div className="cta-side-card">
      <h3>
        How secure is
      </h3>
      <p>
        your business?
      </p>
      <img rel="preload"  src={HowSecure} alt="Security test" as="image" />
      <form action="https://app.securiwiser.com/demo">
        <div className="input-hero">
          <input
            className="inputs sw-link-3 sw-font-weight-xs"
            placeholder="Enter a domain"
            type="text"
            name="text"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-2 sw-nav-links sw-primary-btn-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default CtaCard
