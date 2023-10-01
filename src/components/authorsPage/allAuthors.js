import React from "react"
import AuthorCard from "./authorCard"
import "./style/allAuthors.scss"

const AllAuthors = ({ postData, authorData, postPrefix }) => {
  if (!postPrefix) {
    postPrefix = 'blog'
  }
  return (
    <div className="post-authors">
      {authorData.nodes.map((item, counter) => (
          <AuthorCard 
            key={counter}
            postData={(postData.nodes.filter(
              post => post.frontmatter.author === item.name)
            ).length}
            postPrefix={postPrefix}
            authorData={item}
          />
      ))}
    </div>
  )
}

export default AllAuthors
