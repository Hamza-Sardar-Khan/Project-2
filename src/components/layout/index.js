import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "../../assets/scss/globalStyles.scss"
import Delayed from "../helperComponents/Delayed"
import Cookies from '../blog/cookies';
import PostCta from "../blogDetail/postCta"


const Index = ({ children }) => {
  const headerBlog = useStaticQuery(graphql`
  query LatestPosts {
    allMdx(
      filter: {frontmatter: {featured: {eq: false}}, fileAbsolutePath: {regex: "/content/posts/"}}, 
      limit: 3
    ) {
      nodes { 
        frontmatter {
          title
          thumbnailAlt
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
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
`)
  const newsAuthors = headerBlog?.allNewsAuthorsJson
  const blogAuthors = headerBlog?.allAuthorsJson
  const [checkCookies, setCookies] = useState("")
  useEffect(() => {
    if (typeof window != "undefined") {
      setCookies(window.localStorage.getItem("cookie-set"))
    }
  }, [checkCookies])
  return (
    <>
      <Header data={headerBlog} />
      <main>{children}</main>
      <Footer />
      <Delayed waitBeforeShow={1200}>
        {!checkCookies ?
          (
            <>
              <PostCta newsAuthors={newsAuthors} blogAuthors={blogAuthors} hasCookies />
              <Cookies setCookies={setCookies} />
            </>
          )
          : <PostCta newsAuthors={newsAuthors} blogAuthors={blogAuthors} />}
      </Delayed>
    </>
  )
}

export default Index
