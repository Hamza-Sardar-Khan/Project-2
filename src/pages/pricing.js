import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PricingPage from "../components/pricing"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "pricing"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`

const Pricing = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
        description="Cybersecurity a concern for your organization? Get your cybersecurity risk assessment report now! Securiwiser offers effective cyber risk and threat assessment services to help protect your organization from cyber-attacks"
        title="Cybersecurity Risk & Threat Assessment | Cybersecurity Report Services"
      />
      <div>
        <PricingPage />
      </div>
    </Layout>
  )
}

export default Pricing
