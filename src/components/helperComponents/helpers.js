import React from "react"
import PointerIcon from "../../assets/images/arrow-triangle.svg"
import { Link } from "gatsby"
import "./style/helper.scss"

const ReadMore = ({ children, url, alignCenter, external }) => {
  let setClass = ""
  if (alignCenter === true) {
    setClass = "read-more text-center"
  } else {
    setClass = "read-more"
  }
  if (external) {
    return (
      <a
        href={url}
        className={setClass}
        title={children}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <img src={PointerIcon} alt="" />
      </a>
    )
  } else {
    return (
      <Link className={setClass} to={url} title={children}>
        {children}
        <img src={PointerIcon} alt="" />
      </Link>
    )
  }
}

const SectionHeadings = ({
  heading,
  subheading,
  headingBold,
  headingRest,
  mt,
  mb,
  subHeadingType = "sw-heading-2",
}) => {
  let sectionClass
  mt && mb
    ? (sectionClass = `section-heading mt-${mt} mb-${mb}`)
    : mt
    ? (sectionClass = `section-heading mt-${mt}`)
    : mb
    ? (sectionClass = `section-heading mb-${mb}`)
    : (sectionClass = `section-heading`)
  return (
    <div className={sectionClass}>
      <h2 className="sw-heading-1">
        {heading}
        <span className="sw-font-weight-md">{headingBold}</span>
        {headingRest}
      </h2>
      <p className={subHeadingType}>{subheading}</p>
    </div>
  )
}

export { ReadMore, SectionHeadings }
