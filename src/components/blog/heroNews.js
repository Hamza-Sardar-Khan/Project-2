import React from "react"
import { Link } from "gatsby"
import Radium from "radium"
import { GatsbyImage } from "gatsby-plugin-image"

const HeroNews = ({ postItem, authorItem, catItem }) => {
    const style = {
        borderColor: catItem?.color,
        color: catItem?.color ? catItem?.color : "#EE4A4E",
    }
    return (
        <div className="news-hero-card">
            <Link
                to={`/news/${postItem[0].frontmatter?.title
                .trim()
                .toLowerCase()
                .replace(/ /gi, "-")
                .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
            >
{/*                 <img 
                    src={postItem[0].frontmatter?.thumbnail?.publicURL} 
                    alt={postItem[0].frontmatter?.title} 
                /> */}
                 <GatsbyImage 
                    image={postItem[0].frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData} 
                    alt={postItem[0].frontmatter?.title} 
                /> 
            </Link>
            <div>
                <div className="card-info">
                    <div className="card-info-top">
                        <Link
                            to={`/news/${postItem[0].frontmatter?.title
                            .trim()
                            .toLowerCase()
                            .replace(/ /gi, "-")
                            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                        >
                            <h3>{postItem[0].frontmatter?.title}</h3>
                        </Link>
                        <p>{postItem[0].excerpt}</p>
                    </div>
                    <div className="card-info-mid">
                        <Link
                            style={style}
                            to={`/news/category/${postItem[0].frontmatter?.category
                            .trim()
                            .toLowerCase()
                            .replace(/ /gi, "-")
                            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                        >
                            {postItem[0].frontmatter?.category}
                        </Link>
                        <span>{postItem[0].timeToRead} MIN READ</span>
                    </div>
                </div>
                <div className="card-info-bottom">
                    {/* <img alt="author" src={authorItem?.thumbnail?.publicURL}  /> */}
                    <GatsbyImage 
                        image={authorItem?.thumbnail?.childImageSharp?.gatsbyImageData} 
                        alt=""
                    /> 
                    <div>
                        <p>{authorItem?.name}</p>
                        <p>{postItem[0]?.frontmatter?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radium(HeroNews)