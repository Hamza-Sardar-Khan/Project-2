import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./style/postRelated.scss"

const PopularCard = () => {
    const popularPosts = useStaticQuery(graphql`
        query popularQuery {
            allMdx
            (
                limit: 5
                filter: {frontmatter: { category: {in: ["Cybersecurity"]} } }
                sort: {fields: frontmatter___date, order: DESC}
                skip: 3
            )
            {
                nodes {
                    frontmatter {
                        author
                        date(formatString: "MMMM DD, yyyy")
                        title
                        category
                    } 
                }  
            }  
        }
    `)

    return (
        <div className="related-posts-card">
            <div className="card-info">
                <div className="card-info-mid">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div className="card-info-bottom">
                {popularPosts.allMdx.nodes.map((p, counter) => {
                    return (
                        <Link
                            key={counter}
                            to={`/blog/${p.frontmatter.title
                            .trim()
                            .toLowerCase()
                            .replace(/ /gi, "-")
                            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                        >
                            <h4>
                                {p.frontmatter.title}
                            </h4>
                            <p>
                                {p.frontmatter.date}
                                <span>
                                    {p.frontmatter.author}
                                </span>
                            </p>      
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularCard