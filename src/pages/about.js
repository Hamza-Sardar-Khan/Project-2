import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutUsPage from "../components/aboutUs"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "about"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`

const AboutUs = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
      <Layout> 
        <SEO
          image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
          description="Securiwiser is a cybersecurity service provider offering the best cybersecurity consulting & cyber risk monitoring services. We can assist you with effective cybersecurity tools to monitor & protect your business from cyber-attack. Get in touch with us today! "
          title="Best Cybersecurity Service Provider | Cybersecurity Consulting Firm"
        />
      <AboutUsPage />
    </Layout>
  )
}

export default AboutUs
