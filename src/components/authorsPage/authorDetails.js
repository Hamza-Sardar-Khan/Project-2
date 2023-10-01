import React, { useState, useEffect } from "react"
import AuthorCard from "./authorCard"
import PostCards from "../postCards/postCards"
import { ReadMore } from "../helperComponents/helpers.js"

const AuthorDetails = ({ postData, authorData, catData, postPrefix }) => {

  console.log(catData, 'cat data')
  const [origData, setOrigData] = useState([])
  const [pagData, setPageData] = useState([])
  const [counter, setcounter] = useState(9)

  const addData = count => {
    setPageData(origData?.slice(0, count))
  }

  useEffect(() => {
    setOrigData(postData)
    const result = postData
    setPageData(result.slice(0, counter))
  }, [postData, counter])
  return (
    <div className="authors-section">
      <div className="authors-page">
        <div>
          <AuthorCard 
            key={counter}
            postData={(postData.filter(
              post => post.frontmatter.author === authorData.name)
            ).length}
            postPrefix={postPrefix}
            authorData={authorData}
            singleAuthor
          />
        </div>
        <div>
          <PostCards
            postData={pagData}
            authorData={authorData}
            postPrefix={postPrefix}
            catData={catData}
          /> 
        </div>
      </div>
      {(pagData.length < origData.length)  &&
            <div
              className="show-results"
              onClick={() => {
                addData(counter + 9)
                setcounter(counter + 9)
              }}
            >
            <ReadMore>
              Show more <strong>{origData.length-counter}</strong> articles 
            </ReadMore>
            </div>
      }
    </div>
  )
}

export default AuthorDetails


