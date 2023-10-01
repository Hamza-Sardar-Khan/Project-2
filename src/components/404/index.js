import { Link } from "gatsby"
import React from "react"
import Image404 from "../../assets/images/404image.png"
import "./style.scss"

const Index = () => {
  return (
    <div className="error-page">
      <div className="error-page-option">
        <p>OOPS!</p>
        <p>THIS PAGE IS LOST IN SPACE</p>

        <div className="option-link">
          <Link className="links" to="/">
            GO HOME
          </Link>
          {/* <Link className="links">BACK HOME</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Index
