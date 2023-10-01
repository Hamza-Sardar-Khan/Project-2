import React from "react"
import Layout from "../components/layout"
import TermsAndConditions from "../components/TermsAndConditions"
import SEO from "../components/layout/seo"

const termsAndConditions = () => {
  return (
    <Layout>
      <SEO
        description="If you use Securiwiser, you acknowledge that you have read and agree to the Terms of Use."
        title="Securiwiser Terms of Use "
      />
      <TermsAndConditions />
    </Layout>
  )
}

export default termsAndConditions
