import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Home from "../components/home"
import SEO from "../components/layout/seo"



const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description="Discover and eliminate cybersecurity threats, risks, and vulnerabilities with Securiwiser. With automatic cybersecurity scans, we provide threat detection and vulnerability assessment in real-time. Try today!"
        title="Cybersecurity Threat Detection | Risk & Vulnerability Assessment"
      />
      <Home />
    </Layout>
  )
}

export default IndexPage
