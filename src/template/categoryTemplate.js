import React from "react"
import { 
  graphql 
} from "gatsby"

import Layout from "../components/layout"
import CategoryPage from "../components/categoryPage"
import SEO from "../components/layout/seo"

export const query = graphql`
query($slug: String!, $dataPath: String!){
  allMdx(
    sort: { fields: frontmatter___date, order: DESC }
    filter: { frontmatter: {category: {eq: $slug}}, fileAbsolutePath: {regex: $dataPath}}
  )     
  {
    nodes {
      ...generalPostFields
    }
  }
  allCategoriesJson(filter: {name: {eq: $slug}}) {
    nodes {
      name
      color
      description
    }
  }
  allNewsCategoriesJson(filter: {name: {eq: $slug}}) {
    nodes {
      name
      description
      color
    }
  }
  allAuthorsJson {
    nodes {
      name
      thumbnail {
        childImageSharp {
          gatsbyImageData
        }        
      }
    }
  }
  allNewsAuthorsJson {
    nodes {
      name
      thumbnail {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`




const CategoryTemplate = ({ data, pageContext }) => {

  let catData = '';
  let postPrefix = '';
  let authorData = '';

  if (pageContext.dataPath === '/content/posts/') {
    catData = data?.allCategoriesJson?.nodes[0]
    authorData = data?.allAuthorsJson
    postPrefix = 'blog'
  } else {
    catData = data?.allNewsCategoriesJson?.nodes[0]
    authorData = data?.allNewsAuthorsJson
    postPrefix = 'news'
  }
  const postData = data?.allMdx?.nodes

  return (
    <Layout> 
      <SEO
        description={catData?.description}
        title={catData?.name}
      />
      <CategoryPage 
        postData={postData}
        catData={catData}
        authorData={authorData}
        postPrefix={postPrefix}
      />
    </Layout>
  )
}

export default CategoryTemplate
