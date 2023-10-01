import React from "react"
import HeroBanner from "./heroBanner"
import AllCards from "./allCards"
import "./style/index.scss"

const Index = ({ postData, catData, authorData, postPrefix }) => {
  return (
    <div>
      <HeroBanner
        postData={postData}
        catData={catData}
      />
      <AllCards 
        postPrefix={postPrefix} 
        postData={postData} 
        catData={catData}
        authorData={authorData}
      />
    </div>
  )
}

export default Index
