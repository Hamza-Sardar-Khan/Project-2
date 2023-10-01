import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Shakhiyah from "../components/shakhsiyah"
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
          description="Securiwiser enabled Shakhsiyah Schools to build a robust vendor risk management program."
          title="Shakhsiyah Schools | Case Study"
        />
      <Shakhiyah />
    </Layout>
  )
}

export default AboutUs
