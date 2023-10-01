import React, { useState, useEffect } from "react"
import EBookCta from "../eBook/eBookCta"
import Search from "../../assets/images/search.svg"
import PostCards from "../postCards/postCards"
import ListCategories from "./listCategories"
import { Dropdown } from "react-bootstrap"
import Arrow from "../../assets/images/arrow-down.svg"
import "./style/tabs.scss"

const TabsSection = ({ blogData, postPrefix }) => {
  let blogDataCat = ''
  let authorData = ''

  if (postPrefix === 'news') {
    blogDataCat = blogData.allNewsCategoriesJson
    authorData = blogData.allNewsAuthorsJson
  } else {
    blogDataCat = blogData.allCategoriesJson
    authorData = blogData.allAuthorsJson
  }

  const featuredData = blogData?.allMdx?.nodes
    .filter(catfilter => catfilter?.frontmatter?.featured)
    .slice(0, 3)

  const [searchFilter, setSearchFilter] = useState()
  const [searchKey, setSearchKey] = useState()
  useEffect(() => {
    setSearchFilter(blogData.allMdx)
  }, [blogData])

  const [selectCat, setSelectCat] = useState("Featured")
  return (
    <div className="tabs-section">
      <div className="blog-tabs">
        <div className="search-space">
          <div className="mobile-search">
            <input
              type="text"
              placeholder="Search The Blog"
              className="sw-nav-links sw-font-weight-xs"
              value={searchKey}
              onChange={e => {
                setSearchKey(e.target.value)
                if (e.target.value) {
                  const results = blogData.allMdx?.nodes.filter(catfilter =>
                    catfilter?.frontmatter?.title
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                  setSearchFilter(results)
                } else {
                  setSearchFilter(blogData.allMdx)
                }
              }}
            />
            <img  src={Search} alt="Dropdown" />
          </div>
        </div>
        <div className="mobile-tabs">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              {selectCat}
              <img  src={Arrow} alt="Dropdown" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setSelectCat("Featured")}
                href="#/Featured"
              >
                Featured
              </Dropdown.Item>
              {blogDataCat.nodes.map((cat, counter) => {
                return (
                  <Dropdown.Item
                    href={`#${cat.name.replace(/ /gi, "_")}`}
                    className="sw-nav-links tabs-name"
                    onClick={() => setSelectCat(cat.name)}
                  >
                    {cat.name}
                  </Dropdown.Item>
                )        
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="allcatlist">
          <a href="#Featured" className="sw-nav-links tabs-name is-active">
            Featured
          </a>

          {blogDataCat.nodes.map((cat, counter) => {
            if (cat.name === "Cybersecurity") {
              return (
                <a
                  href={`#${cat.name.replace(/ /gi, "_")}`}
                  className="sw-nav-links tabs-name"
                >
                  {cat.name}
                </a>
              )
            }
          })}

          {blogDataCat.nodes.map((cat, counter) => {
            if (cat.name !== "Cybersecurity") {
              let catName = cat.name;
              if (cat.name === "Attack Surface Management") {
                catName = "Attack Surface";
              } 
              if (cat.name === "Compliance and Regulations") {
                catName = "Compliance"
              }
              if (cat.name === "Data Breaches") {
                catName = "Breaches"
              }
              if (cat.name === "Third-Party Risk Management") {
                catName = "Third-Party Risk"
              }
              return (
                <a
                  href={`#${cat.name.replace(/ /gi, "_")}`}
                  className="sw-nav-links tabs-name"
                >
                  {catName}
                </a>
              )
            }
          })}
        </div>
        <div className="desktop-search">
          <input
            type="text"
            placeholder="Search The Blog"
            className="sw-nav-links sw-font-weight-xs"
            onChange={e => {
              setSearchKey(e.target.value)
              if (e.target.value) {
                const results = blogData.allMdx?.nodes.filter(catfilter =>
                  catfilter?.frontmatter?.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
                setSearchFilter(results)
              } else {
                setSearchFilter(blogData.allMdx)
              }
            }}
          />
          <img loading="lazy" className="img-search" src={Search} alt="Search" />
        </div>
      </div>


{/*  

   ////////////////    M A I N   C O N T E N T 
    
*/}

      {!searchKey && (
        <div className="posts-featured" id="Featured">
          <PostCards
            postData={featuredData}
            authorData={authorData}
            postPrefix={postPrefix}
            catData={blogDataCat}
          />
        </div>
      )}

      <>
        {!searchKey && (
          <EBookCta eBookUrl="/ebooks/" />
        )}
      </>
      {!searchKey && ( 
        <>
          {blogDataCat.nodes.map((cat, counter) => {
            if (cat.name === "Cybersecurity" || cat.name === 'Cyber Attacks') {
              return (
                <>
                <ListCategories 
                  postPrefix={postPrefix} 
                  category={cat} 
                  authorData={authorData}
                  data={searchFilter} 
                  count="2" 
                />
                </>
              )
            }
          })}
          {blogDataCat.nodes.map((cat, counter) => {
            if (cat.name === "Compliance and Regulations" || cat.name === "Ransomware") {
              return (
                <>
                <ListCategories 
                  postPrefix={postPrefix} 
                  category={cat} 
                  authorData={authorData}
                  data={searchFilter} 
                  count="3" 
                />
                </>
              )
            }
          })}
          {blogDataCat.nodes.map((cat, counter) => {
            if (
              cat.name !== "Cybersecurity" 
              && cat.name !== "Compliance and Regulations" 
              && cat.name !== 'Cyber Attacks' 
              && cat.name !== 'Ransomware'
            ) {
              return (
                <ListCategories
                  postPrefix={postPrefix}
                  category={cat}
                  data={searchFilter}
                  authorData={authorData}
                  count={
                    (cat.name === "Third-Party Risk Management" 
                    || cat.name === "Attack Surface Management" 
                    || cat.name === "Bug Bounties" 
                    || cat.name === "Vulnerabilities") ? 2 : 3}
                />
              )
            }
          })}
        </>
      )}

{/*  

   ////////////////    S E A R C H     R E S U L T S 
    
*/}
        {searchKey &&
          <div className="posts-featured" id="search-results">
            <PostCards
              postData={searchFilter}
              authorData={authorData}
              postPrefix={postPrefix}
              catData={blogDataCat}
            />
          </div>
        }
      <div></div>
    </div>
  )
}

export default TabsSection
