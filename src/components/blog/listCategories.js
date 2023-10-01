import React from "react"
import PostCards from "../postCards/postCards"
import PopularCard from "../postCards/popularCard"
import PopularNews from "../postCards/popularNews"
import SubCard from "../subscribeCard/subCard"
import CtaCard from "../ctaCard/ctaCard"
import { ReadMore } from "../helperComponents/helpers"
import "./style/tabs.scss"

const ListCategories = ({ data, authorData, category, count, postPrefix }) => {
  const dataItems = data?.nodes
  .filter(
    catfilter => catfilter?.frontmatter?.category === category.name
  )
  .slice(0, (0, count || 11000))
  return (
    <div
      className="cybersecrity-section"
      id={category.name.replace(/ /gi, "_")}
    >
      <div className="category-name">
        <h6>
          <div>
            {category.name} (
            <span>
              {
                data?.nodes.filter(
                  data => data?.frontmatter?.category === category.name
                ).length
              }
            </span>
            )
          </div>
        </h6>
        <ReadMore url={`/${postPrefix}/category/${category.name
            .trim()
            .toLowerCase()
            .replace(/ /gi, "-")
            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
        >
          View all {category.name.toLowerCase()} posts
        </ReadMore>
      </div>
      <div className="cy-posts">
        <PostCards
          postData={dataItems}
          authorData={authorData}
          postPrefix={postPrefix}
          catData={category} 
        />   
        {(category.name === "Cybersecurity" || category.name === "Cyber Attacks") && (
          postPrefix === "blog" ? (
            <PopularCard/>
          ) :
          ( 
            <PopularNews/>
          )       
        )}
        {(category.name === "Third-Party Risk Management" || category.name === "Vulnerabilities") && <CtaCard />}
        {(category.name === "Attack Surface Management" || category.name === "Bug Bounties") && <SubCard />}
      </div>  
    </div>
  )
}

export default ListCategories
