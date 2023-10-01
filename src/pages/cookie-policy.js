import React from "react"
import Layout from "../components/layout"
import CookiePolicy from "../components/cookiesPolicy"
import SEO from "../components/layout/seo"

const Privacy = () => {
  return (
    <Layout>
      <SEO
        description="This policy explains what cookies are, what kind of cookies we use, and how to turn them off in your browser, as well as providing some useful links for further reading."
        title="Cookies on Securiwiser"
      />
      <CookiePolicy />
    </Layout>
  )
}

export default Privacy
