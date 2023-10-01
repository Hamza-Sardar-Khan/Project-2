import React from "react"
import { Link } from "gatsby"
import Facebook from "../../assets/images/facebook.svg"
import Twitter from "../../assets/images/twitter.svg"
import Instagram from "../../assets/images/Instagram.svg"
import LogoSymbol from "../../assets/images/logo-symbol1.svg"
import "./style/footer.scss" 

const Footer = () => {
  const footerData = [
    {
      heading: 'SECURIWISER',
      list: [
        {
          title: 'Status',
          url: 'https://status.securiwiser.com/'
        },
        {
          title: 'Features',
          url: '/detect/'
        },
        {
          title: 'Release Notes',
          url: 'https://securiwiser.noticeable.news/'
        },
        {
          title: 'Sitemap',
          url: '/sitemap.xml'
        },
      ],
    },
    {
      heading: 'PRODUCTS',
      list: [
        {
          title: 'securiAudit',
          url: '/audit/'
        },
        {
          title: 'securiDetect',
          url: '/detect/'
        },
        {
          title: 'securiLearn',
          url: '/learn/'
        },
        {
          title: 'Signup',
          url: 'https://app.securiwiser.com/demo'
        },
      ],
    },
    {
      heading: 'RESOURCES',
      list: [
        {
          title: 'Blog',
          url: '/blog/'
        },
        {
          title: 'News',
          url: '/news/'
        },
        {
          title: 'Authors',
          url: '/authors/'
        },
        {
          title: 'eBook',
          url: '/ebook/education/'
        },
      ],
    },
    {
      heading: 'COMPANY',
      list: [
        {
          title: 'About',
          url: '/about/'
        },
        {
          title: 'Why Us?',
          url: '#'
        },
        {
          title: 'Contact',
          url: '/contact/'
        },
        {
          title: 'Support',
          url: 'https://securiwisersupport.freshdesk.com/support/solutions'
        },
      ],
    },
    {
      heading: 'LEARN',
      list: [
        {
          title: 'How schools can safeguard themselves against cyberattacks',
          url: '/blog/how-schools-can-safeguard-themselves-against-cyberattacks/'
        },
        {
          title: 'Why cybersecurity risks in schools are rising',
          url: '/blog/why-cybersecurity-risks-in-schools-are-rising/'
        },
        {
          title: 'The costs and risks of poor cybersecurity in schools',
          url: '/blog/the-costs-and-risks-of-poor-cybersecurity-in-schools/'
        },
      ]
    }
  ];

  const FooterLink = ({ title, url }) => {
    if ( url.includes("https") ) {
      return (
        <a href={url} title={title} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      )
    }
    else {
      return (
        <Link to={url}>
          {title}
        </Link>
      )
    }
  }

  return (
    <>
    <div className="footer-container">
      <div className="footer-container-content">
        <div>
          <img loading="lazy"  alt="logo" src={LogoSymbol}/>
        </div>
        <div>
          {footerData.map((item, index) => 
          <div>
            <h3>{item.heading}</h3>
            <ul>
              {item.list.map((listItem) =>
                <li>
                  <FooterLink url={listItem.url} title={listItem.title}/>
                </li>
              )}
            </ul>
          </div>
          )}
        </div>
      </div>
    </div>
    <div className="footer-sub-container">
      <div className="footer-sub-container-content">
      <div>
        <p>© 2022 by Just Get Visible Ltd</p>
        <p>Company Registered in England & Wales: 09882516</p>
      </div>
        <div>
          <Link to="/privacy-policy/">Privacy</Link>
          <Link to="/cookie-policy/">Cookie</Link>
          <Link to="/terms-of-use/">Terms of Service</Link>
        </div>
        <div>
          <a title="Twitter" href="https://twitter.com/securiwiser"><img alt="twitter" src={Twitter}/></a>
          <a title="Facebook" href="https://www.facebook.com/securiwiser"><img alt="facebook" src={Facebook}/></a>
          <a title="Instagram" href="https://www.instagram.com/securiwiser/"><img alt="instagram" src={Instagram}/></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

