import React from "react"
import "./style/insidePostCta.scss"

import { StaticImage } from "gatsby-plugin-image"

const InPostCta = () => {
    return (
        <div className="inside-post-cta">
            <StaticImage className="image" src="../../assets/images/cta-man.jpg" alt="" />
            <div className="info">
                <h3>See How We Can Help You Stay Up-To Date For Your Companies <span>Cyber Security</span></h3>
                <ul>
                    <li>
                        <span>Free Report</span> - Get a 20+ page report of your cyber posture 
                    </li>
                    <li>
                        <span>Free Rating</span> - Get insights and data into your cybersecurity posture 
                    </li>
                    <li>
                        <span>Transparency</span> - See what hackers see
                    </li>
                </ul>
                <a title="Sign up" href="https://app.securiwiser.com/demo">Create A Free Account</a>
            </div>
        </div>
    )
}

export default InPostCta