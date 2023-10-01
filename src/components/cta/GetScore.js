import React from "react"
import "./style/cta.scss"

const GetScore = ({ button = "" }) => {
  if (button && button.url) {
    return (
      <div className="get-score-button">
        <a
          className="sw-btn sw-btn-primary"
          role="button"
          href={button.url}
          title={button?.text ?? "Get Free Score"}
        >
          {button?.text ?? "Get Free Score"}
        </a>
      </div>
    )
  }

  return (
    <form action="https://app.securiwiser.com/demo" className="get-score">
      <input placeholder="Enter your website URL" required />
      <button href="#">Get Free Score</button>
    </form>
  )
}

export default GetScore
