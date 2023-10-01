import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Icon from "../../assets/images/testimonial-icon.svg"
import Trustpilot from "../../assets/images/trust.svg"
import { ReadMore, SectionHeadings } from "../helperComponents/helpers"
import "./style/hacker.scss"

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <SectionHeadings
                    heading="What our customers say about us"
                    subheading="Don't just take our word for it"
                />
            </ScrollAnimation>
            <div className="testimonials">
                <div>
                    <img loading="lazy" alt="quote" src={Icon}></img>
                    <p>Excellent tool, informative, useful and exactly what I've been looking for!</p>
                    <p>“As someone who develops and manages multiple sites this is the perfect tool to manage the security for my sites. The main dashboard is simple and informative and tells me exactly what I need to see...”</p>
                    <span>Haameem</span>
                    <span>Web developer</span>
                </div>
                <div>
                    <img loading="lazy" alt="quote" src={Icon}></img>
                    <p>Perfect for non technical person like myself</p>
                    <p>“I own an online academic institution with 1000+ students. With most of our student being children its essential we stay on top of our online security to protect our users. We are not very technical and don't...”</p>
                    <span>Ali Salama</span>
                    <span>Owner of Eaalim Institute</span>
                </div>   
                <div>
                    <img loading="lazy" alt="quote" src={Icon}></img>
                    <p>I love the typosquatting detection!</p>
                    <p>“In my industry, there are always new businesses that pop up with similar names to ours and pretend to even be us. They steal our business and it has really affected us. The typosquatting...”</p>
                    <span>Michael.J</span>
                    <span>Tree Surgeon</span>
                </div>         
            </div>
            <div className="trust">
                <img  loading="lazy"  alt="trustpilot" src={Trustpilot}/>
                <p></p>
            </div>
            <ReadMore url="https://uk.trustpilot.com/review/securiwiser.com" external>
                More customer stories
            </ReadMore>
        </div>
    )
}

export default Testimonials


