import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HomeHeroSection from "./heroSection"
import GlobalPandemic from "../cyberStats/globalPandemic"
import Cybercrime from "./cybercrime"
import EBookCta from "../../components/eBook/eBookCta"
import Testimonials from "./testimonials"
import PostSection from "../postCards/postSection"
import Cta from "../cta/cta"
import { SectionHeadings } from "../helperComponents/helpers"
import "./style/index.scss"
import FeaturesCards from "../featuredCards/featuredCards"
import DashImage from "../../assets/images/dashboard-image.svg"
import FindingsImage from "../../assets/images/findings-image.svg"
import AuditImage from "../../assets/images/audit-image1.svg"
import ScanImage from "../../assets/images/scan-company-image.svg"
import ScanVideo from "../../assets/images/feature2.mp4"
import FindingsVideo from "../../assets/images/feature3.mp4"
import AllVideo from "../../assets/images/feature1.mp4"
import TrainingMainImage from "../../assets/images/training-main-image1.svg"
import ComplianceImage from "../../assets/images/questionnaire-compliance.svg"
import TrainingImage from "../../assets/images/training-image-new3.svg"
import ManAuditImg from "../../assets/images/man-audit2.svg"
import ManAuditIcon from "../../assets/images/audit-icon.svg"
import ManDetectImg from "../../assets/images/man-detect2.svg"
import ManDetectIcon from "../../assets/images/detect-icon.svg"
import ManLearnImg from "../../assets/images/man-learn2.svg"
import ManLearnIcon from "../../assets/images/learn-icon.svg"
import FeaturesGrid from "./features"
import ManagementCards from "./managementCards"

const Index = () => {
  const blogData = useStaticQuery(graphql`
    query AllPostHome {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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
          name
          color
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
  `)

  const pageData = [
    {
      title: "Assess your compliance with just a few clicks",
      desc: "Easy to use audit tools to help your school meet cybersecurity standards without having to worry about the complexity.",
      image: AuditImage,
      video: FindingsVideo,
      imageAlt: "cybersecurity rating",
      url: "/audit/",
      btnText: "Learn more about compliance",
      info: [
        "Audit tools to assess GDPR, DAP 2018 & more",
        "Discover risks and improve cyber resilience",
        "Get an action plan to help you remedy problems",
      ],
    },
    {
      title: "Put your cybersecurity on autopilot",
      desc: "Securiwiser's automated monitoring keeps an eye on your digital infrastructure and technology so you can focus on running your school.",
      image: TrainingImage,
      imageAlt: "Security score",
      url: "/detect/",   
      btnText: "Learn more about cyber monitoring",
      info: [
        "Real-time cyber threat and vulnerability monitoring",
        "Prevent data breaches and cyberattacks",
        "Weekly reports with insights and recommendations",
      ],
    },
    {
      title: "Bite-sized cybersecurity awareness courses",
      desc: "Equip your staff members with the knowledge and skills necessary to identify and protect against online threats.",
      image: TrainingMainImage,
      imageAlt: "Cybersecurity posture",
      url: "/learn/",
      btnText: "Learn more about courses",
      info: [
        "Password security & authentication",
        "Phishing and social engineering",
        "Malware, ransomware and other cyber threats",
      ],
    },
  ]
  const managementCardsData = [
    {
      name: "securiAudit",
      slug: "/audit/",
      image: ManAuditImg,
      icon: ManAuditIcon,
      title: "Cybersecurity compliance",
      desc: "Assess your school’s compliance with the DfE’s and NSCS cybersecurity standards with our audit tools.",
    },
    {
      name: "securiDetect",
      slug: "/detect/",
      image: ManDetectImg,
      icon: ManDetectIcon,
      title: "Attack surface management",
      desc: "Prevent data breaches and keep your data safe by continuously monitoring and remedying cyber threats.",
    },
    {
      name: "securiLearn",
      slug: "/learn/",
      image: ManLearnImg,
      icon: ManLearnIcon,
      title: "Awareness and training",
      desc: "Empower your staff and students to stay safe online with our interactive cybersecurity training  courses.",
    },
  ]

  return (
    <div>
      <HomeHeroSection />
      <FeaturesGrid />
      <ManagementCards data={managementCardsData} />
      <SectionHeadings
        heading="It's become a cyber pandemic"
        subheading="Do something about it before it's too late."
      />
      <GlobalPandemic />
      <SectionHeadings
        heading="Helping to protect school’s data"
        subheading="With the growing use of technology in education, it's more important
      than ever for schools to take cybersecurity seriously. This is why we
      have tailored Securiwiser to the unique needs of your school. From
      compliance assessments to employee training, we have the expertise to
      help you protect your school from cyber threats."
        subHeadingType="sw-heading-3"
      />
      <FeaturesCards data={pageData} />
      <EBookCta />
      <PostSection
        heading={"Keeping a pulse on education security"}
        subheading={"What's new"}
        postData={blogData.allMdx.nodes}
        authorData={blogData.allAuthorsJson}
        catData={blogData.allCategoriesJson}
      />
      <Cta />
    </div>
  )
}

export default Index
