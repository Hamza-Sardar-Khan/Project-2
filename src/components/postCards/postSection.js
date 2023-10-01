import React from "react"
import "./style/postSection.scss"
import { SectionHeadings, ReadMore } from "../helperComponents/helpers"
import ScrollAnimation from "react-animate-on-scroll"
import PostCards from "./postCards"

const PostSection = ({ postData, authorData, catData, heading, subheading }) => {
  let blogHeading = "Keeping a pulse on Security"
  let blogSubHeading = "What's new"
  if (heading) {
    blogHeading = heading
  }
  if (subheading) {
    blogSubHeading = subheading
  }
  return ( 
    <div className="post-section">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <SectionHeadings
            heading={blogHeading}
            subheading={blogSubHeading}
          />
        </ScrollAnimation>
        <PostCards 
            postData={postData}
            authorData={authorData}
            catData={catData}
        />
        <ReadMore url="/blog/" alignCenter>
            More articles
        </ReadMore>
    </div>
  )
}

export default PostSection