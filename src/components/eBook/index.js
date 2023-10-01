import React from "react"
import "./style/style.scss"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import DownloadIcon from "../../assets/images/download-icon.svg"

const Index = () => {
    const EbHero = () => {
        return (
            <div className="eb-hero">
                <h1>eBooks</h1>
                <h2>Insights on cybersecurity and vendor risk management</h2>
            </div>
        )
    }
    return (
        <div className="ebooks-page">
            <EbHero/>
            <div className="eb-cards">
                <div>
                    <Link to="/ebook/education/">
                        <StaticImage 
                            src="../../assets/images/ebook_edu.png" 
                            alt="Cybersecurity Guide for the Educational Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Educational Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/education/">
                                <img loading="lazy" src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/ebook/finance/">
                        <StaticImage 
                            src="../../assets/images/ebook_fin.png" 
                            alt="Cybersecurity Guide for the Financial Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Financial Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/finance/">
                                <img loading="lazy" src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/ebook/health/">
                        <StaticImage 
                            src="../../assets/images/ebook_health.png" 
                            alt="Cybersecurity Guide for the Health Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Health Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/health/">
                                <img src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/ebook/government/">
                        <StaticImage 
                            src="../../assets/images/ebook_gov.png" 
                            alt="Cybersecurity Guide for the Government Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Government Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/government/">
                                <img loading="lazy" src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/ebook/technology/">
                        <StaticImage 
                            src="../../assets/images/ebook_tech.png" 
                            alt="Cybersecurity Guide for Technology Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Technology Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/technology/">
                                <img loading="lazy" src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/ebook/retail/">
                        <StaticImage 
                            src="../../assets/images/ebook_retail.png" 
                            alt="Cybersecurity Guide for the Retail Services"
                        />
                    </Link>
                    <div className="eb-card-info">
                        <h3>Cybersecurity Guide for the Retail Services</h3>
                        <p>Social engineering in a greater sense is the psychological manipulation of an...</p>
                        <div>
                            <Link to="/ebook/retail/">
                                <img loading="lazy" src={DownloadIcon} alt=""/>
                                Download eBook
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
