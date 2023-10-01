import React from "react"
import { Link } from "gatsby"
import Radium from "radium"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const PostCard = ({ postItem, authorItem, postPrefix, catData, style }) => {
  if (catData) {
    style = {
      borderColor: catData?.color,
      color: catData?.color ? catData?.color : "#EE4A4E",
    }
  }
  return (
    <div className="post-card" key={postItem}>
      <Link
        to={`/${postPrefix}/${postItem.frontmatter?.title
          .trim()
          .toLowerCase()
          .replace(/ /gi, "-")
          .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
      >
        {/* <img 
                    src={postItem.frontmatter.thumbnail?.publicURL} 
                    alt={postItem.frontmatter?.title} 
                /> */}
        <GatsbyImage
          image={
            postItem.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData
          }
          alt={postItem.frontmatter?.title}
        />
      </Link>
      <div className="card-info">
        <div className="card-info-top">
          <Link
            style={style}
            to={`/${postPrefix}/category/${postItem.frontmatter?.category
              .trim()
              .toLowerCase()
              .replace(/ /gi, "-")
              .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
          >
            {postItem.frontmatter?.category}
          </Link>
          <span>{postItem.timeToRead} MIN READ</span>
        </div>

        <div className="card-info-mid">
          <Link
            to={`/${postPrefix}/${postItem.frontmatter?.title
              .trim()
              .toLowerCase()
              .replace(/ /gi, "-")
              .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
          >
            <h3>{postItem.frontmatter?.title}</h3>
          </Link>
          <p>{postItem.excerpt}</p>
        </div>
      </div>
      <div className="card-info-bottom">
        {authorItem?.thumbnail?.childImageSharp?.gatsbyImageData ? (
          <GatsbyImage
            image={authorItem?.thumbnail?.childImageSharp?.gatsbyImageData}
            alt={postItem.frontmatter?.title}
          />
        ) : (
          <StaticImage
            alt=""
            src="../../assets/images/placeholder-author.svg"
          />
        )}
        <div>
          <p>
            <Link
              to={`/${postPrefix}/author/${authorItem?.name
                .trim()
                .toLowerCase()
                .replace(/ /gi, "-")
                .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
            >
              {authorItem?.name}
            </Link>
          </p>
          <p>{postItem?.frontmatter?.date}</p>
        </div>
      </div>
    </div>
  )
}

export default Radium(PostCard)
