import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import HeroSectionDark from "../components/heroSectionDark/heroSectionDark"
import "../components/industry/style/style.scss"
import Cta from "../components/cta/cta"
import EbookCta from "../components/eBook/eBookCta"
import FeaturesCards from "../components/featuredCards/featuredCards"
import FindingsImage from "../assets/images/findings-issues.svg"
import RatingsImage from "../assets/images/ratings-image.svg"
import AlertsImage from "../assets/images/alerts-image.svg"
import QuestionnaireImage from "../assets/images/questionnaire-image.svg"
import CollaborationImage from "../assets/images/collaborate-image.svg"
import ReportsImage from "../assets/images/report-image.svg"
import ScanVideo from "../assets/images/feature2.mp4"
import HeroImg from "../assets/images/hero-image-2.svg"
import VideoSection from "../components/industry/videoSection"
import { SectionHeadings } from "../components/helperComponents/helpers"
  
export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "whysecuriwiser"}} 
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`

export default function WhySecuri({ data }) {
    const pageData = [
        {
            subtitle: 'RATINGS',
            title: 'Risk assessment',
            desc: "Understand and improve your organisation’s cybersecurity posture with Securiwiser Rating system. Our automated monitors scan and collect data from the internet, providing you with a comprehensive data-driven assessment of your school’s security performance.",
            image: RatingsImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity rating',
            url: 'https://app.securiwiser.com/demo'
        },
        {
            subtitle: 'FINDINGS',
            title: 'Targeted list',
            desc: "We detect security gaps and threats within your systems and network that can pose a threat to your organisation. From web application security, and IP and brand reputation to network security and DNS health, we give you a list of the most critical issues, all of which can be managed from your dashboard.",
            image: FindingsImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity findings',
            url: 'https://app.securiwiser.com/demo'
        },
        {
            subtitle: 'ALERTS',
            title: 'Get instant alerts of any changes to your data',
            desc: 'Alerts and notifications via email and slack, allowing you to keep an eye on any changes to your cybersecurity rating.',
            image: AlertsImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity alerts',
            url: 'https://app.securiwiser.com/demo'
        },
    ];
    const pageData2 = [
        {
            subtitle: 'COMPLIANCE',
            title: 'Compliance questionnaire',
            desc: 'Securiwiser combines compliance and regulatory questionnaires with its attack surface technology. Get an in-depth comprehensive view of your cyber risks as well as third-party vendors you work with, allowing you to meet many regulatory compliance standards within your industry.',
            image: QuestionnaireImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity compliance',
            url: 'https://app.securiwiser.com/demo'
        },
        {
            subtitle: 'COMMUNICATION',
            title: 'Team collaboration',
            desc: 'Invite team members to collaborate and work together in resolving cybersecurity risks and threats.',
            image: CollaborationImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity communication',
            url: 'https://app.securiwiser.com/demo'
        },
        {
            subtitle: 'REPORTS',
            title: 'Detailed reports',
            desc: 'Receive easy-to-understand reports identifying vulnerabilities, active exploits, and advanced cyber threats to help you protect your business and improve your cybersecurity posture from the get-go! Practical remediation guidance is provided to help boost your cybersecurity rating.',
            image: ReportsImage,
            video: ScanVideo,
            imageAlt: 'cybersecurity report',
            url: 'https://app.securiwiser.com/demo'
        },
    ]
    const seoImageUrl = data?.allFile?.edges[0]?.node?.publicURL
    return (
        <Layout> 
            <SEO
                image={seoImageUrl?.length > 1 ? `https://www.securiwiser.com${seoImageUrl}` : null}
                description="Securiwiser is the service that regularly monitors many enterprises, making it the global leader in cost effective cybersecurity ratings. Find out more about us."
                title="Why Securiwiser?"
            />

            <SectionHeadings 
                heading="See how it works"
            />
            <VideoSection 
                videoId="Ee396A2xr-0"
                wrapperClass="whysecuri-video"
            />
            <FeaturesCards
                data={pageData}
            />
            <EbookCta/>
            <FeaturesCards
                data={pageData2}
            />
            <Cta/>
        </Layout>
    )
}
  