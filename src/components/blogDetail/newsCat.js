import React from "react"
import "./style/blogCategories.scss"
import { Link } from "gatsby"


const NewsCategories = ({ catCountArray }) => {
    return (
        <div className="blog-categories-card">
            <div className="card-info">
                <div className="card-info-mid">
                    <h3>{'News categories'}</h3>
                </div>
            </div>
            <div className="card-info-bottom">
                {catCountArray.map((cat, counter) => {
                    return (
                        <Link
                            key={counter}
                            to={`/news/category/${cat[0]
                            .trim()
                            .toLowerCase()
                            .replace(/ /gi, "-")
                            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                        >
                            <h4>
                                {cat[0]}
                                <span>
                                    ({cat[1]})
                                </span>
                            </h4>    
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default NewsCategories