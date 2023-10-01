import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutCard = ({ authorData, title }) => {
    return (
        <div className="about-card">
            <div className="card-top">
                <h1>{title} Authors</h1>
            </div>
            <div className="card-main">
                {authorData.nodes.map((item) => {
                    {/* <img src={item?.thumbnail?.publicURL} alt="author"/>  */}
                    return (
                    <GatsbyImage 
                        image={item?.thumbnail?.childImageSharp?.gatsbyImageData} 
                        alt="author"
                    />
                    )
                })}
                <p>
                Despite our ongoing research efforts to discover cyberattacks and enable defence, 
                we often feel that we, as members of a global community, fail to achieve an adequate 
                level of cybersecurity. Our blog authors provide important topics in cybersecurity 
                you should be reading to know every detail about cyber security risks & vulnerabilities
                </p>
            </div>
        </div>
    )
}

export default AboutCard