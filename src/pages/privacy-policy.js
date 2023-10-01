import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PrivacyPolicy from "../components/privacyPolicy"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "privacy"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`
const Privacy = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
        description="What information is gathered when you use Securiwiser, how it is used, where it is stored, and what rights you have."
        title="Privacy Policy - Securiwiser"
      />
      <PrivacyPolicy />
    </Layout>
  )
}

export default Privacy
