import React from "react"
import AboutSection from './about_section';
import './style/glossarry_style.scss'
import Glossary_content from "./glossary_content";
const Index = () => {
  return (
    <div>
    <div className="App">
      <div className='page-wrapper-inner'>
        <nav class="breadcrumb">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <ul>
                  <li><a href="/">Home</a></li> 
                  /
                  <li class="current"><a href="/glossary/"> Glossary</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <AboutSection />
        <div className='GlossaryTerms-row'>
          <div className='scroll-wrapper'>
            <h2 class="introtext">
              <a href="#A" data-anchor="#A">A</a>
              <a href="#B" data-anchor="#B">B</a>
              <a href="#C" data-anchor="#C">C</a>
              <a href="#D" data-anchor="#D">D</a>
              <a href="#E" data-anchor="#E">E</a>
              <a href="#F" data-anchor="#F">F</a>
              <a href="#G" data-anchor="#G">G</a>
              <a href="#H" data-anchor="#H">H</a>
              <a href="#I" data-anchor="#I">I</a>
              <a href="#J" data-anchor="#J">J</a>
              <a href="#K" data-anchor="#K">K</a>
              <a href="#L" data-anchor="#L">L</a>
              <a href="#M" data-anchor="#M">M</a>
              <a href="#N" data-anchor="#N">N</a>
              <a href="#O" data-anchor="#O">O</a>
              <a href="#P" data-anchor="#P">P</a>
              <a href="#Q" data-anchor="#Q">Q</a>
              <a href="#R" data-anchor="#R">R</a>
              <a href="#S" data-anchor="#S">S</a>
              <a href="#T" data-anchor="#T">T</a>
              <a href="#U" data-anchor="#U">U</a>
              <a href="#V" data-anchor="#V">V</a>
              <a href="#W" data-anchor="#W">W</a>
              <a href="#X" data-anchor="#X">X</a>
              <a href="#Y" data-anchor="#Y">Y</a>
              <a href="#Z" data-anchor="#Z">Z</a>
            </h2>
            <p className="space">&nbsp;</p>
            <Glossary_content/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Index
