import { graphql } from 'gatsby'

export const generalPostFields = graphql`
fragment generalPostFields on Mdx {
    excerpt
    timeToRead
    frontmatter {
      author
      category
      date(formatString: "MMMM DD, yyyy")
      featured
      metaDescription
      metaTitle
      slug
      tags
      title
      thumbnailAlt
      thumbnail {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    } 
    body
}
`


export const authorFields = graphql`
fragment authorFields on AuthorsJson {
    description
    name
    skills
    title
    alt
    thumbnail {
      childImageSharp {
        gatsbyImageData
      }
    }
    social {
        name
        url  
    }
}
`

export const newsAuthorFields = graphql`
fragment newsAuthorFields on NewsAuthorsJson {
    description
    name
    skills
    title
    thumbnail {
      childImageSharp {
        gatsbyImageData
      }
    }
    social {
        name
        url 
    }
}
`





