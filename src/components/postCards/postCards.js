import React from "react"
import PostCard from "./postCard"
import "./style/postCards.scss"
import Radium from "radium"
import SubCard from "../subscribeCard/subCard"


const PostCards = ({ postData, authorData, catData, postPrefix, withSubcribe }) => {
  if (!postPrefix) {
    postPrefix = 'blog'
  }
  const style = {
      borderColor: catData?.color,
      color: catData?.color ? catData?.color : "#EE4A4E",
  }
  return ( 
    <div className="post-cards"> 
      {postData?.map(item => {
        return (
          <PostCard 
            catData={catData?.nodes?.length > 1 && (catData.nodes.filter(
              cat => cat?.name === item?.frontmatter?.category
            )?.[0])}
            style={style}
            postItem={item}
            postPrefix={postPrefix}
            authorItem={authorData?.nodes?.length > 1 ? (authorData.nodes.filter(
            author => author?.name === item?.frontmatter?.author
            )?.[0]) : (authorData)}
          />
        )
      })}
      {withSubcribe && <SubCard/>}
    </div>
  )
}

export default Radium(PostCards)
