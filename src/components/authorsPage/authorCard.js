import React from "react"
import { ReadMore } from "../helperComponents/helpers.js"
import InLogo from "../../assets/images/in-logo.svg"
import { GatsbyImage } from "gatsby-plugin-image"

const AuthorCard = ({ postData, authorData, postPrefix, singleAuthor }) => {
    return (
        <div className="author-card">
            <div className="card-main">
                <p>Author</p>
                <div>
                    <GatsbyImage 
                        image={authorData?.thumbnail?.childImageSharp?.gatsbyImageData} 
                        alt="author"
                    />
                    {/* <img src={authorData?.thumbnail?.publicURL} alt="author"/>  */}
                    {singleAuthor ? <h1 className="author-name">{authorData?.name}</h1> : <h2 className="author-name">{authorData?.name}</h2>}
                </div>
                <span>{authorData?.title}</span>
                {singleAuthor ? <h2 className="author-desc">{authorData?.description}</h2> : <h4 className="author-desc">{authorData?.description}</h4>}
            </div>
            <div className="card-bottom">
                <a target="_blank" href={authorData?.social[0].url}><img src={InLogo} alt=""/>LinkedIn</a>
                <ReadMore
                    url={`/${postPrefix}/author/${authorData?.name
                    .trim()
                    .toLowerCase()
                    .replace(/ /gi, "-")
                    .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                    >
                    View posts ({postData})
                </ReadMore>
            </div>
        </div>
    )
}

export default AuthorCard