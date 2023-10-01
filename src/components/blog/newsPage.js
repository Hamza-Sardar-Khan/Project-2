import React from "react"
import { useStaticQuery, graphql } from "gatsby" 
import TabsSection from "./tabsSection"
import HeroNews from "./heroNews"
import "./style/index.scss"
const NewsPage = ({ postPrefix }) => {
  if (!postPrefix) {
    postPrefix = 'news'
  }
  const newsData = useStaticQuery(graphql`
    query AllNewsPost {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/news-posts/"}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          ...generalPostFields
        }
      }
      allNewsCategoriesJson {
        nodes {
          name
          color
        }
      }
      allNewsAuthorsJson {
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
    const latestFeatured = newsData?.allMdx?.nodes
      .filter(catfilter => catfilter?.frontmatter?.featured)
      .slice(0, 1)

    const authorData = newsData?.allNewsAuthorsJson?.nodes.filter(
      author => author?.name === latestFeatured[0]?.frontmatter?.author
      )?.[0]

    const catData = newsData?.allNewsCategoriesJson?.nodes.filter(
      cat => cat?.name === latestFeatured[0]?.frontmatter?.category
    )?.[0]

  return (
    <>
      <HeroNews postItem={latestFeatured} authorItem={authorData} catItem={catData} />
      <TabsSection postPrefix={postPrefix} blogData={newsData} />
    </>
  )
}

export default NewsPage
