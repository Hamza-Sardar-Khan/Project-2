import React from "react"
import Layout from "../components/layout"
import EbooksHome from "../components/eBook"
import SEO from "../components/layout/seo"

const EbooksPage = () => {
  return (
    <Layout>
      <SEO
        description="Looking for some exciting page-turning cyber security ebooks?"
        title="Cybersecurity Free eBooks"
      />
      <EbooksHome/>
    </Layout>
  )
}

export default EbooksPage
