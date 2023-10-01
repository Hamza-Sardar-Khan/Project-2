import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPage from "../components/blog"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "blogpage"}}
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`
const MainBlog = ({ data }) => {
  const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
  return (
    <Layout>
      <SEO
        image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
        description="Stay up to date with the top cyber security blogs. Here, you can find the most important information and tips on cybersecurity awareness to protect your data from being hacked. Explore the best cybersecurity blogs here!"
        title="Best Cybersecurity Blogs | Important Tips on Cyber Security"
      />
      <div>
        <BlogPage postPrefix="blog" />
      </div>
    </Layout>
  )
}

export default MainBlog
