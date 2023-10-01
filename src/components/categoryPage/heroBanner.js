import React from "react"
import "./style/index.scss"
import Radium from "radium"

const HeroBanner = ({ postData, catData }) => {
  const style = {
    backgroundColor: catData?.color ? catData.color : '#e5f4ff',
    color: catData?.color ? 'white' : '#37384f'
  }
  return (
    <div className="hero-banner" style={style}>
      <div className="banner-about">
        <h1 className="banner-heading sw-headind-1 sw-font-weight-md ">
          {catData?.name} (
          {postData.length}
          )
        </h1>
        <h2 className="banner-paragrag sw-paragraph-6 sw-font-weight-xs">
          {catData?.description}
        </h2>
      </div>
    </div>
  )
}

export default Radium(HeroBanner)
