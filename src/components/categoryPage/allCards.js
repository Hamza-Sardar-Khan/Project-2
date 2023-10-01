import React, {useState, useEffect} from "react"
import PostCards from "../postCards/postCards"
import { ReadMore } from "../helperComponents/helpers.js"
import "./style/index.scss"

const AllCards = ({ postData, authorData, catData, postPrefix }) => {

  if (!postPrefix) {
    postPrefix = 'blog'
  }

  const [origData, setOrigData] = useState([]);
  const [pagData, setPageData] = useState([]);
  const [counter, setcounter] = useState(9)

  const addData = (count) => {
    setPageData(origData?.slice(0, count))
  }

  useEffect(() => {
    setOrigData(postData)
    const result = postData
    setPageData(result.slice(0,counter))
  },[postData, counter])

  return (
    <div className="all-cards">
        <PostCards
          postData={pagData}
          authorData={authorData}
          postPrefix={postPrefix}
          catData={catData}
        /> 
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

export default AllCards
