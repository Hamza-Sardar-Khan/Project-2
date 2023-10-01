import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/heroSectionDark/heroSectionDark"
import "../components/industry/style/style.scss"
import Cta from "../components/cta/cta"
import FeaturesCards from "../components/featuredCards/featuredCards"
import FeaturesGrid from "../components/featuresGrid/featuresGrid"
import EBookCta from "../components/eBook/eBookCta"
import AuditFeaturesGrid from "../components/featuresGrid/auditFeaturesGrid"
import LearnFeaturesGrid from "../components/featuresGrid/learnFeaturesGrid"
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
    allFeaturesJson(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        description
        category
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
        metaDescription
        metaTitle
        blogHeading
        blogSubHeading
        cta {
          heading
          headingBold
          headingRest
          subheading
        }
        features {
          desc
          image {
            publicURL
          }
          imageAlt
          title
          subtitle
          url
          info
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
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        timeToRead
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM DD, yyyy")
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
    allCategoriesJson {
      nodes {
        color
        name
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
  }
`
export default function FeaturesTemplate({ data, pageContext }) {
  const allData = data?.allFeaturesJson?.nodes[0]
  const blogData = data?.allMdx
  const industryData = data?.allIndustriesJson?.nodes[0]
  const featuresData = data?.allFeaturesJson?.nodes[0]?.features
  const featureSlug = allData.slug
  const seoImages = data?.allFile?.edges
  const ctaData = data?.cta
  let seoImageUrl = ""

  seoImages.map(image => {
    if (image.node.publicURL.includes(featureSlug)) {
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
        description={allData?.metaDescription}
        title={allData?.metaTitle}
      />
      <HeroSection
        title={allData.title}
        description={allData.description}
        category={allData?.category}
        slug={allData.slug}
        image={allData.image}
        imageAlt={allData.imageAlt}
        button={allData?.button}
        direction="direction-row"
        variant="feature"
      />
      {pageContext.slug === "detect" && (
        <FeaturesGrid
          heading=" Identify potential security weaknesses and threats before they become critical issues"
          subheading="Checking over 80+ end-points"
        />
      )}
      {pageContext.slug === "audit" && (
        <AuditFeaturesGrid
          heading="Ready-made security assessment questionnaires for schools"
          subheading="Use questionnaires based on regulations and best practices related to the education sector."
        />
      )}
      {pageContext.slug === "learn" && (
        <LearnFeaturesGrid
          heading="Build a cyber resilient workforce" 
          subheading="securiLearn helps schools to reduce their vulnerability to cyber threats by providing a comprehensive platform for training all staff with access to the school’s IT network on the fundamentals of cybersecurity."
        />
      )}
      <FeaturesCards data={featuresData} slug={pageContext.slug} />
      {pageContext.slug === "learn" && (
        <PostSection
          heading={"Keeping a pulse on education security"}
          subheading={"What's new"}
          postData={blogData.nodes}
          authorData={blogData.allAuthorsJson}
          catData={blogData.allCategoriesJson}
        />
      )}
      <EBookCta
        eBookUrl={industryData?.eBookUrl}
        eBookTagline={industryData?.eBookTagline}
      />
      {typeof ctaData !== "undefined" ? (
        <Cta
          heading={ctaData[0].heading}
          headingBold={ctaData[0].headingBold}
          headingRest={ctaData[0].headingRest}
          subheading={ctaData[0].subheading}
          button={allData?.button}
        />
      ) : (
        <Cta button={allData?.button} />
      )}
    </Layout>
  )
}
