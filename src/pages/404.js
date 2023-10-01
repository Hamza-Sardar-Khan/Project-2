import * as React from "react"
import ErrorPage from "../components/404/"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    {/* <Seo title="404: Not found" /> */}
    {/* <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    <ErrorPage />
  </Layout>
)

export default NotFoundPage
