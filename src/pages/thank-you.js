import React from "react"
import { Link } from "gatsby"
import TrueImg from "../assets/images/true.jpg"
import Layout from "../components/layout"
const ThankYou = () => {
  return (
    <Layout>
      <div className="thank-you-page">
        <img className="true-img" src={TrueImg} alt="Thank you" />
        <h1 className="sw-headind-1 sw-font-weight-md thank-heading">
          Thank you for contacting us!
        </h1>
        <p className="thank-para sw-paragraph-1 sw-font-weight-md ">
          Your submission is received and we will contact you soon.
        </p>

        <Link to="/contact/" className="thank-link sw-link-5">
          BACK TO CONTACT
        </Link>
      </div>
    </Layout>
  )
}

export default ThankYou
