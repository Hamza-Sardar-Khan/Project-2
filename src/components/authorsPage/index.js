import React from "react"
import AllAuthors from "./allAuthors"
import AboutCard from "./aboutCard"

import "./style/style.scss"
const Index = ({ data, postPrefix }) => {
  const postData = data?.allMdx
  let authorData
  let title
  if (postPrefix === 'blog') {
    authorData = data?.allAuthorsJson
    title = 'Blog'
  } else {
    authorData = data?.allNewsAuthorsJson
    title = 'News'
  }
  return (
  <div className="authors-section">
    <div className="authors-page">
      <div>
        <AboutCard 
          authorData={authorData}
          postPrefix={postPrefix}
          title={title}
        />
      </div>
      <div>
        <AllAuthors 
          postData={postData} 
          authorData={authorData}
          postPrefix={postPrefix}
        />
      </div>
    </div>
  </div>
  )
}

export default Index
