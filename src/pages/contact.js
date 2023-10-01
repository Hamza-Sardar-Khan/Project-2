import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactPage from "../components/Contact"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "contact"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`

const Contact = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
        description="If you are searching for the top cyber security service providers and companies, you've come to the right place! Security assessment, procedures, and risk solutions are all aspects of the cybersecurity services we provide. Please contact us right away!"
        title="Cyber Security Assessment Company | Cyber Security Solution Providers "
      />
      <ContactPage />
    </Layout>
  )
}

export default Contact
