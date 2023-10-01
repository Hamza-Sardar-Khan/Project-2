import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroSection from "./heroSection"
import TabsSection from "./tabsSection"
import "./style/index.scss"
const Index = ({ postPrefix }) => {
  if (!postPrefix) {
    postPrefix = 'blog'
  }
  const blogData = useStaticQuery(graphql`
    query AllPost {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/posts/"}}
        sort: { fields: frontmatter___date, order: DESC }
        ) {
        nodes {
          ...generalPostFields
        }
      }
      allCategoriesJson {
        nodes {
          name
          color
          icon
          description
        }
      }
      allAuthorsJson {
        nodes {
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
      }
    }
  `)
  return (
    <>
      <HeroSection />
      <TabsSection postPrefix={postPrefix} blogData={blogData} />
    </>
  )
}

export default Index
