import React from "react"
import {
  graphql
} from "gatsby"
import Layout from "../components/layout"
import AuthorDetails from "../components/authorsPage/authorDetails"
import SEO from "../components/layout/seo"

export const query = graphql`
query($slug: String!, $dataPath: String!){
  allMdx(
    sort: { fields: frontmatter___date, order: DESC }
    filter: { frontmatter: {author: {eq: $slug}}, fileAbsolutePath: {regex: $dataPath}}
  )     
  {
    nodes {
      ...generalPostFields
    }
  }
  allAuthorsJson(filter: {name: {eq: $slug}}) {
    nodes {
      ...authorFields
      social {
        name
        url 
      }
    }
  }
  allNewsAuthorsJson(filter: {name: {eq: $slug}}) {
    nodes {
      ...newsAuthorFields
      social {
        name
        url 
      }
    }
  }
  allCategoriesJson {
    nodes {
      name
      color
    }
  }
  allNewsCategoriesJson {
    nodes {
      name
      color
    }
  }
}
`

const AuthorTemplate = ({ data, pageContext }) => {

  let authorData = '';
  let postPrefix = '';
  let catData = '';
  if (pageContext.dataPath === '/content/posts/') {
    authorData = data?.allAuthorsJson?.nodes[0]
    postPrefix = 'blog'
    catData = data?.allCategoriesJson
  } else {
    authorData = data?.allNewsAuthorsJson?.nodes[0]
    postPrefix = 'news'
    catData = data?.allNewsCategoriesJson
  }
  const postData = data?.allMdx?.nodes


  return (
    <Layout>
      <SEO
        description={authorData?.description}
        title={authorData?.name}
      />
      <AuthorDetails
        postData={postData}
        authorData={authorData}
        catData={catData}
        postPrefix={postPrefix}
      />
    </Layout>
  )
}

export default AuthorTemplate
