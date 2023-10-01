import React from "react"
import { 
  graphql 
} from "gatsby"

import "../components/blogDetail/style/index.scss"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import HeroBlog from "../components/blogDetail/heroBlog"
import HeroNews from "../components/blogDetail/heroNews"
import BlogMainContent from "../components/blogDetail/blogMainContent"
import BlogCategories from "../components/blogDetail/blogCat"
import NewsCategories from "../components/blogDetail/newsCat"
import PopularCard from "../components/postCards/popularCard"
import PopularNews from "../components/postCards/popularNews"
import CtaCard from "../components/ctaCard/ctaCard"

export const query = graphql`
query BlogPost($slug: String, $nextSlug: String, $previousSlug: String, $currentCat: String, $currentAuthor: String) {
  thisPost: mdx(frontmatter: {title: {eq: $slug}}) {
    ...generalPostFields
  }
  nextPost: mdx(frontmatter: {title: {eq: $nextSlug}}) {
    ...generalPostFields
  }
  prevPost: mdx(frontmatter: {title: {eq: $previousSlug}}) {
    ...generalPostFields
  }
  authorBlog: authorsJson(name: {eq: $currentAuthor}) {
    name
    thumbnail {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  authorNews: newsAuthorsJson(name: {eq: $currentAuthor}) {
    name
    thumbnail {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  catBlog: categoriesJson(name: {eq: $currentCat}) {
    name
    color
  }
  catNews: newsCategoriesJson(name: {eq: $currentCat}) {
    name
    color
  }
}
`
const BlogTemplate = ({ data, pageContext }) => {

  const catCounter = pageContext.catCounter
  const catCountArray = Object.entries(catCounter);

  const postPrefix = pageContext?.prefix
  const allPostData = data?.allMdx

  const postData = data?.thisPost
  const nextPostData = data?.nextPost
  const prevPostData = data?.prevPost

  const currentAuthor = postPrefix === 'blog' ? data?.authorBlog : data?.authorNews
  const currentCat = postPrefix === 'blog' ? data?.catBlog : data?.catNews

  const Hero = ({ postPrefix }) => {
    return postPrefix === 'news' ? (
    <HeroNews
      postPrefix={postPrefix}
      data={postData?.frontmatter}
      read={postData?.timeToRead}
      currentAuthor={currentAuthor}
      currentCat={currentCat}
    /> 
    )
  : (
    <HeroBlog
      postPrefix={postPrefix}
      data={postData?.frontmatter}
      read={postData?.timeToRead}
      currentAuthor={currentAuthor}
      currentCat={currentCat}
    />
    )
  }

  return (
    <Layout>
      <SEO
        image={`https://www.securiwiser.com${postData?.frontmatter?.thumbnail?.publicURL}`}
        description={postData?.frontmatter?.metaDescription}
        title={postData?.frontmatter?.metaTitle}
      />
      <div className="single-post-page">
        <div>
          <Hero postPrefix={postPrefix}/>
          <BlogMainContent 
            postPrefix={postPrefix} 
            data={postData} 
            prevPostData={prevPostData}
            nextPostData={nextPostData}
          />
        </div>
        <div>
          <CtaCard />
          {postPrefix === 'news' ? 
          <>
            <NewsCategories 
              catCountArray={catCountArray}
            />
            <PopularNews postPrefix={postPrefix} data={allPostData} />
          </>
          :
          <>
            <BlogCategories 
              catCountArray={catCountArray}
            />
            <PopularCard postPrefix={postPrefix} data={allPostData} />
          </>
          }
          <CtaCard />
        </div>
      </div>
    </Layout>
  )
} 

export default BlogTemplate
