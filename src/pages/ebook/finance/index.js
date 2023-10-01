import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/layout/seo"
import EBookPage from "../../../components/eBook/eBookPage"

const Index = () => {
  return (
    <Layout>
      <SEO
        description="Insights on cybersecurity and vendor risk management"
        title="FREE Cybersecurity for Educational Services"
      />
      <EBookPage 
        title="Finance" 
      />
    </Layout>
  )
}

export default Index
