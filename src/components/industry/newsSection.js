import React from "react"
import "./style/style.scss"
import { SectionHeadings, ReadMore } from "../helperComponents/helpers"
import ScrollAnimation from "react-animate-on-scroll"
import SubCard from "../subscribeCard/subCard"
import PostCards from "../postCards/postCards"

const NewsSection = ({ data, postData, authorData, catData }) => {
  return ( 
    <div className="news-container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <SectionHeadings
            heading={data.heading}
            subheading={data.subheading}
            />
        </ScrollAnimation>
        <div className="news">    
            <PostCards
                postData={postData}
                authorData={authorData}
                catData={catData}
                postPrefix='news'
            />  
            <SubCard/> 
        </div>
        <ReadMore url="/news/" alignCenter>
                More news
        </ReadMore>
    </div>
  )
}

export default NewsSection
