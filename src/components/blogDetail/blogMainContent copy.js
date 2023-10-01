import React from "react"
import { Link } from "gatsby"
import "./style/index.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import ShareButtons from "./shareButtons"
import InPostCta from "./inPostCta"
import { GatsbyImage } from "gatsby-plugin-image"
const shortcodes = { InPostCta }

const BlogMainContent = ({ data, prevPostData, nextPostData, postPrefix }) => {
  if (!postPrefix) {
    postPrefix = 'blog'
  }
  return (
    <div className="single-blog-content">
      <ShareButtons 
        title={data.frontmatter.title} 
        postPrefix={postPrefix}
        cssClass="social-share-top"
      />
{/*       <img 
        src={data?.frontmatter?.thumbnail?.publicURL} 
        alt={data?.frontmatter?.title} 
        className="img"
      /> */}
      <GatsbyImage 
        image={data?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData} 
        alt={data?.frontmatter?.title} 
        className="img"
      /> 
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data?.body}</MDXRenderer>
      </MDXProvider>
      <ShareButtons 
        title={data.frontmatter.title} 
        postPrefix={postPrefix}
        cssClass="social-share-bottom"
      />
      <div className="custom-pagination">
        {nextPostData && (
          <div className="pager">
            <h3>Next Article</h3>
            <Link
              to={`/${postPrefix}/${nextPostData.frontmatter?.title
                .trim()
                .toLowerCase()
                .replace(/ /gi, "-")
                .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
            >
              {nextPostData.frontmatter?.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogMainContent
