import React from "react"
import "./style/stats.scss"
import ScrollAnimation from "react-animate-on-scroll"

const GlobalPandemic = () => {
  return ( 
    <ScrollAnimation duration={2} animateIn="fadeIn" animateOut="fadeOut">
      <div className="pandemic-container">
        <div class="pandemic-stats">
          <div>
            <p>Increase in cyber attacks past 2 years</p>
            <span>114%</span>
            <p>(Source: Fenews)</p>
          </div>
          <div>
            <p>No. of attacks on schools per week</p>
            <span>2297</span>
            <p>(Source: Infosecurity)</p>
          </div>
          <div>
            <p>Schools reporting a phishing attack</p>
            <span>88%</span>
            <p>(Source: Gov.uk)</p>
          </div>
          <div>
            <p>Schools breached by cyber attacks</p>
            <span>70%</span>
            <p>(Source: Gov.uk)</p>
          </div>
          <div>
            <p>No. of ransomware attacks per day</p>
            <span>4000</span>
            <p>(Source: FBI)</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default GlobalPandemic
