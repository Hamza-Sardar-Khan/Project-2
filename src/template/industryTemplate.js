import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/heroSectionDark/heroSectionDark"
import VideoSection from "../components/industry/videoSection"
import "../components/industry/style/style.scss"
import Cta from "../components/cta/cta"
import NewsSection from "../components/industry/newsSection"
import EBookCta from "../components/eBook/eBookCta"
import FeaturesCards from "../components/featuredCards/featuredCards"
import PostSection from "../components/postCards/postSection"

export const query = graphql`
  query ($slug: String!) {
    allFile(filter: { sourceInstanceName: { eq: "seo-images" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allIndustriesJson(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        description
        button {
          url
          text
        }
        image {
          publicURL
        }
        imageAlt
        videoId
        eBookUrl
        eBookTagline
        blogHeading
        blogSubHeading
        metaDescription
        metaTitle
        cta {
          heading
          headingBold
          headingRest
          subheading
          button {
            url
            text
          }
        }
        features {
          desc
          image {
            publicURL
          }
          imageAlt
          infoTitle
          info
          title
        }
        newsPosts {
          heading
          subheading
        }
      }
    }
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { tags: { eq: $slug } }
      }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        timeToRead
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM DD, yyyy")
          tags
          thumbnailAlt
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allAuthorsJson {
      nodes {
        name
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allCategoriesJson {
      nodes {
        name
        color
      }
    }
    news: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/news-posts/" }
        frontmatter: { tags: { eq: $slug } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
    ) {
      nodes {
        timeToRead
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM DD, yyyy")
          tags
          thumbnailAlt
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allNewsAuthorsJson {
      nodes {
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        name
      }
    }
    allNewsCategoriesJson {
      nodes {
        name
        color
      }
    }
  }
`
export default function IndustryTemplate({ data }) {
  const industryData = data?.allIndustriesJson?.nodes[0]
  const featuresData = data?.allIndustriesJson?.nodes[0]?.features
  const blogData = data?.allMdx
  const ctaData = data?.allIndustriesJson?.nodes[0]?.cta[0]
  const industrySlug = industryData.slug

  const seoImages = data?.allFile?.edges
  let seoImageUrl = ""
  seoImages.map(image => {
    if (image.node.publicURL.includes(industrySlug)) {
      seoImageUrl = image.node.publicURL
    }
  })
  return (
    <Layout>
      <SEO
        image={
          seoImageUrl?.length > 1
            ? `https://www.securiwiser.com${seoImageUrl}`
            : null
        }
        description={industryData?.metaDescription}
        title={industryData?.metaTitle}
      />
      <HeroSection
        title={industryData.title}
        description={industryData.description}
        slug={industryData.slug}
        image={industryData.image}
        imageAlt={industryData.imageAlt}
        button={industryData?.button}
        direction="direction-row"
        variant="industry"
      />
      <VideoSection
        videoId={industryData.videoId}
        wrapperClass="industry-video"
      />
      <PostSection
        postData={blogData?.nodes}
        authorData={data?.allAuthorsJson}
        catData={data?.allCategoriesJson}
        heading={industryData.blogHeading}
        subheading={industryData.blogSubHeading}
      />
      <FeaturesCards data={featuresData} />
      <EBookCta
        eBookUrl={industryData?.eBookUrl}
        eBookTagline={industryData?.eBookTagline}
      />
      <NewsSection
        data={industryData?.newsPosts}
        postData={data.news.nodes}
        authorData={data?.allNewsAuthorsJson}
        catData={data?.allNewsCategoriesJson}
      />
      <Cta
        heading={ctaData.heading}
        headingBold={ctaData.headingBold}
        headingRest={ctaData.headingRest}
        subheading={ctaData.subheading}
        button={industryData?.button}
      />
    </Layout>
  )
}
