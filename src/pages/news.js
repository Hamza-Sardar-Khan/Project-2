import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NewsPage from "../components/blog/newsPage"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "newspage"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`

const MainNews = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
        description="News on web security assaults, defences, and vulnerabilities that affect businesses, consumers, researchers, governments, and people."
        title="Cybersecurity news and views"
      />
      <div>
        <NewsPage postPrefix="news"/>
      </div>
    </Layout>
  )
}

export default MainNews
