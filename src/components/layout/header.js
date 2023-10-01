import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Dropdown, NavDropdown, Col, Row } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { GatsbyImage } from "gatsby-plugin-image"
import NavLogo from "../../assets/images/nav-bar-logo1.svg"
import ChevronDown from "../../assets/images/chevron-down.svg"
import { ReadMore } from "../helperComponents/helpers"
import MenuBlogIcon from "../../assets/images/menu-blog-icon.svg"
import MenuBookIcon from "../../assets/images/menu-ebook-icon.svg"
import MenuNewsIcon from "../../assets/images/menu-news-icon.svg"
import RatingsIcon from "../../assets/images/ratings-icon.svg"
import AlertsIcon from "../../assets/images/alerts-icon.svg"
import FindingsIcon from "../../assets/images/findings-icon.svg"
import ReportIcon from "../../assets/images/report-icon.svg"
import QuestionnairesIcon from "../../assets/images/assessment-icon.svg"
import CollaborationIcon from "../../assets/images/communicate-icon.svg"
import SecuriAuditIcon from "../../assets/images/securi-audit-icon.svg"
import SecuriDetectIcon from "../../assets/images/securi-detect-icon.svg"
import SecuriLearnIcon from "../../assets/images/securi-learn-icon.svg"
import AboutIcon from "../../assets/images/about-icon.svg"
import WhyIcon from "../../assets/images/why-icon.svg"
import ContactIcon from "../../assets/images/contact-icon.svg"

import "./style/header.scss"

const Header = ({ data }) => {
  const headerData = [
    {
      products: [
        {
          title: "securiAudit",
          desc: "Automate and streamline the process of conducting security assessments.",
          img: SecuriAuditIcon,
          url: "/audit/",
        },
        {
          title: "securiDetect",
          desc: "Monitor, detect, analyze and respond to security threats in real-time.",
          img: SecuriDetectIcon,
          url: "/detect/",
        },
        {
          title: "securiLearn",
          desc: "Educate staff on safe online behavior and how to mitigate security risks.",
          img: SecuriLearnIcon,
          url: "/learn/",
        },
      ],
      features: [
        {
          title: "Ratings",
          desc: "Get a comprehensive rating on your school’s cybersecurity posture.",
          img: RatingsIcon,
          url: "/detect/",
        },
        {
          title: "Findings",
          desc: "Automated scans to detect vulnerabilities and cyber threats.",
          img: FindingsIcon,
          url: "/findings/",
        },
        {
          title: "Questionnaires",
          desc: "Assess the strength of your organisation's cybersecurity programs.",
          img: QuestionnairesIcon,
          url: "/audit/",
        },
      ],
      featuresTwo: [
        {
          title: "Alerts",
          desc: "Alerts and notifications to help you stay on top of your cybersecurity.",
          img: AlertsIcon,
          url: "/alerts/",
        },
        {
          title: "Reporting",
          desc: "Daily reports on the key trends related to your security.",
          img: ReportIcon,
          url: "/reporting/",
        },
        {
          title: "Collaboration",
          desc: "Easily manage cybersecurity threats as a team.",
          img: CollaborationIcon,
          url: "/collaboration/",
        },
      ],
    
      resources: [
        {
          title: "Blog",
          desc: "Learn about the latest issues in cybersecurity and how they affect you.",
          img: MenuBlogIcon,
          url: "/blog/",
        },
        {
          title: "News",
          desc: "Stay up to date with security research and global news about data breaches.",
          img: MenuNewsIcon,
          url: "/news/",
        },
        {
          title: "eBook",
          desc: "Insights on cybersecurity and vendor risk management.",
          img: MenuBookIcon,
          url: "/ebook/education/",
        },
      ],
      products2: [
        {
          title: "About Us",
          desc: "Providing solutions to protect schools from security threats and data breaches.",
          img: AboutIcon,
          url: "/about/",
        },
        {
          title: "Why Securiwiser?",
          desc: "Find out how we are helping school's accross the UK to manage their security.",
          img: WhyIcon,
          url: "#",
        },
        {
          title: "Contact Us",
          desc: "Send an email to our support team for cybersecurity solutions and inquiries.",
          img: ContactIcon,
          url: "/contact/",
        },
      ],
    },
  ]

  const latestPosts = data
  const [nav, setNav] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  const downNav = () => {
    if (window.scrollY >= 80) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", downNav)
    }
  }, [])

  const ScrollHandle = () => {
    const fullSite = document.querySelector("html")
    setMenuActive(!menuActive)
    if (menuActive === false) {
      fullSite.className = "disableScroll"
    } else if (menuActive === true) {
      fullSite.className = ""
    }
  }

  function dropDownAnim() {
    const dropDowns = document.querySelectorAll(".dropdown-menu")
    const menuIds = [
      "products",
      "features",
      "solutions",
      "resources",
      "products2",
    ]
    for (var i = 0; i < dropDowns.length; ++i) {
      dropDowns[i].id = menuIds[i]
    }
  }
  useEffect(() => {
    dropDownAnim()
  })

  const DropDownItem = ({ url, img, title, desc }) => {
    return (
      <Dropdown.Item className="dropdown-image-item" as={Link} to={url}>
        <img loading="lazy" alt="icon" src={img} />
        <div>
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </Dropdown.Item>
    )
  }

  return (
    <div className={`${nav ? " main-nav shadow" : " main-nav"}`}>
      <Navbar expand="xxl">
        <Link className="name-logo" to="/">
          <img  src={NavLogo} alt="logo" />
        </Link>
        <div className="buttons d-block d-xxl-none btn-single">
          <a
            className="sw-btn sw-btn-primary sw-btn-sm"
            href="https://app.securiwiser.com/demo"
          >
            Create Account
          </a>
        </div>
        <Navbar.Toggle
          onClick={ScrollHandle}
          id="burger"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown
              className="sw-nav-links"
              title={
                <div>
                  Products <img  src={ChevronDown} alt="dropdown"></img>
                </div>
              }
              class="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <Col xs="12" xxl="12" className="text-left">
                <Dropdown.Header>Products</Dropdown.Header>
                <Dropdown.Divider />
                <div className="to-fade">
                  <Fade damping={0.2} duration={500} delay={300} cascade>
                    {headerData[0].products.map(item => (
                      <DropDownItem
                        title={item.title}
                        desc={item.desc}
                        img={item.img}
                        url={item.url}
                      />
                    ))}
                  </Fade>
                </div>
              </Col>
            </NavDropdown>
            <NavDropdown
              className="sw-nav-links"
              title={
                <div>
                  Features <img loading="lazy" src={ChevronDown} alt="dropdown"></img>
                </div>
              }
              class="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <Row>
                <Col xs="12" xxl="6" className="text-left">
                  <Dropdown.Header>
                    {"  "}
                    Key Features
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <div className="to-fade">
                    <Fade damping={0.2} duration={500} delay={300} cascade>
                      {headerData[0].features.map(item => (
                        <DropDownItem
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                          url={item.url}
                        />
                      ))}
                    </Fade>
                  </div>
                </Col>
                <Col xs="12" xxl="6" className="text-left">
                  <Dropdown.Header>
                    {"  "}
                    &nbsp;
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <div className="to-fade">
                    <Fade damping={0.2} duration={500} delay={700} cascade>
                      {headerData[0].featuresTwo.map(item => (
                        <DropDownItem
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                          url={item.url}
                        />
                      ))}
                    </Fade>
                  </div>
                </Col>
              </Row>
            </NavDropdown>
            <NavDropdown
              className="sw-nav-links"
              title={
                <div>
                  Resources <img src={ChevronDown} alt="dropdown"></img>
                </div>
              }
              class="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <Row>
                <Col xs="12" xxl="6" className="text-left">
                  <Dropdown.Header>
                    {"  "}
                    Resources
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <div className="to-fade">
                    <Fade damping={0.2} duration={500} delay={300} cascade>
                      {headerData[0].resources.map(item => (
                        <DropDownItem
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                          url={item.url}
                        />
                      ))}
                    </Fade>
                  </div>
                </Col>
                <Col xs="12" xxl="6" className="text-left d-none d-xxl-block">
                  <Dropdown.Header>
                    {"  "}
                    Latest blog posts
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <div className="to-fade">
                    <Fade damping={0.2} duration={500} delay={700} cascade>
                      {latestPosts.allMdx.nodes.map(post => (
                        <Dropdown.Item
                          className="dropdown-blog"
                          as={Link}
                          to={`/blog/${post?.frontmatter?.title
                            .trim()
                            .toLowerCase()
                            .replace(/ /gi, "-")
                            .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
                        >
                          <div>
                            <GatsbyImage
                              image={
                                post?.frontmatter?.thumbnail?.childImageSharp
                                  ?.gatsbyImageData
                              }
                              alt={`/blog/${post?.frontmatter?.title
                                .trim()
                                .toLowerCase()
                                .replace(/ /gi, "-")
                                .replace(
                                  /[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi,
                                  ""
                                )}/`}
                            />
                            <p>{post?.frontmatter?.title}</p>
                          </div>
                        </Dropdown.Item>
                      ))}
                    </Fade>
                  </div>
                  <ReadMore url="/blog/">View all blog posts</ReadMore>
                </Col>
              </Row>
            </NavDropdown>
            <NavDropdown
              className="sw-nav-links"
              title={
                <div>
                  Company <img src={ChevronDown} alt="dropdown"></img>
                </div>
              }
              class="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <Col xs="12" xxl="12" className="text-left">
                <Dropdown.Header>Company</Dropdown.Header>
                <Dropdown.Divider />
                <div className="to-fade">
                  <Fade damping={0.2} duration={500} delay={300} cascade>
                    {headerData[0].products2.map(item => (
                      <DropDownItem
                        title={item.title}
                        desc={item.desc}
                        img={item.img}
                        url={item.url}
                      />
                    ))}
                  </Fade>
                </div>
              </Col>
            </NavDropdown>
            <Nav.Item>
            <Nav.Link
  as={Link}
  className="text-left"
  to="https://app.securiwiser.com/login/"
  activeStyle={{
    backgroundColor: "#F5FBFF",
  }}
  style={{ marginTop: '6.5px' }}
>
  Login
</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="buttons">
            <a
              className="sw-btn sw-btn-primary"
              href="https://app.securiwiser.com/demo"
            >
              Request Demo
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
