import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Authors from "../components/authorsPage"
import SEO from "../components/layout/seo"

export const query = graphql`
query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/content/posts/"}}
    ) {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "MMMM DD, yyyy")
        }
      }
    }
    allAuthorsJson {
      nodes {
        ...authorFields
      }
    }    
}
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        description="Are you interested in finding the best news on cybersecurity? Check out the best blogs on cybersecurity by the top content writer & blog authors. Securiwiser’s blog authors deliver you the best blogs to read on important topics about cyber security. Visit now! "
        title="Best Cyber Security Blog Authors | Top Cybersecurity Content Writers"
      />
      <Authors data={data} postPrefix='blog' />
    </Layout>
  )
}

export default IndexPage
