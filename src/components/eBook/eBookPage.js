import React from "react"
import "./style/style.scss"
import { StaticImage } from "gatsby-plugin-image";
import RegisterForm from "./registerForm"

const EbookPage = ({ title, file }) => {
    const Form = () => {
        return  (
            <RegisterForm slug={title} /> 
        ) 
    }
    return  (
        <div className="ebooks-register-page">
            <div className="hero-top">
                <h1><span>FREE</span> Cybersecurity for {title} Services</h1>
                <h2>Insights on cybersecurity and vendor risk management</h2>
            </div>
            <div className="hero-bottom">
                <StaticImage 
                    src="../../assets/images/ebook-edu-full.png" 
                    alt="Cybersecurity Guide for the Educational Services"
                />
                <Form/>
            </div>
        </div>
    ) 
}

export default EbookPage
