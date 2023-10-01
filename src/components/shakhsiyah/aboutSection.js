import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./style/index.scss";
import face from './img/face.png';
import ShareButtons from "../blogDetail/shareButtons.js";
import { Link } from "react-scroll";

import { ReadMore } from "../helperComponents/helpers";

const AboutSection = () => {
  const [activeId, setActiveId] = useState("");
  const [offset, setOffset] = useState(-200); // Estado para almacenar el valor del desplazamiento

  const handleSetActive = (to) => {
    setActiveId(to);
  };

  const getLinkClassName = (to) => {
    return activeId === to ? "default active" : "default";
  };

  const handleOffsetChange = (event) => {
    setOffset(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="about-section-shakh" id="about-section">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="container">
            <div className="left_container">
              <div>
                <div className="person_info">
                  <img  loading="lazy"  src={face} alt="Person's Face" />
                  <h3>Fuaad Aidarus</h3>
                  <h6>Securiwiser Cybersecurity Analyst</h6>
                </div>
                <div className="info">
                  <p>
                    www.shakhsiyahschools.uk <br />
                    <b>Industry:</b> Education<br />
                    <b>Employee count:</b> 20-50<br />
                  </p>
                </div>
                <div className="share_container">
                  <div className="social-buttons">
                    <ShareButtons
                      title=""
                      postPrefix="shakhsiyah"
                      cssClass="social-share-top"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container_to_responsive">
              <div className="info">
                <h2 id="Overview">Overview</h2>
                <p id="Overview">
                  Securiwiser has assisted in streamlining Shakhsiyah Schools
                  security processes and is also empowering new security
                  offerings. With the resulting increase in operational
                  efficiency, Shakhsiyah Schools is positioned for impressive,
                  and most importantly, secure growth.
                </p>

                <h2 id="Challenges">Challenges</h2>
                <p id="Challenges">
                  Securiwiser has assisted in streamlining Shakhsiyah Schools
                  security processes and is also empowering new security
                  offerings. With the resulting increase in operational
                  efficiency, Shakhsiyah Schools is positioned for impressive,
                  and most importantly, secure growth.
                </p>

                <h2 id="Strategy">Strategy and Goals</h2>
                <p id="Strategy">
                  Securiwiser has assisted in streamlining Shakhsiyah Schools
                  security processes and is also empowering new security
                  offerings. With the resulting increase in operational
                  efficiency, Shakhsiyah Schools is positioned for impressive,
                  and most importantly, secure growth.
                </p>

                <h2 id="Solutions">Solutions</h2>
                <p id="Solutions">
                  Securiwiser has assisted in streamlining Shakhsiyah Schools
                  security processes and is also empowering new security
                  offerings. With the resulting increase in operational
                  efficiency, Shakhsiyah Schools is positioned for impressive,
                  and most importantly, secure growth.
                </p>

                <h2 id="Results">The Final Results</h2>
                <p id="Results">
                  Securiwiser has assisted in streamlining Shakhsiyha Schools
                  security processes and is also empowering new security
                  offerings. With the resulting increase in operational
                  efficiency, Shakhsiyah Schools is positioned for impressive,
                  and most importantly, secure growth.
                </p>
              </div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Case Study Content</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          to="Overview"
                          spy={true}
                          className={getLinkClassName("Overview")}
                          offset={offset} // Usar el estado del desplazamiento
                          duration={500}
                          onSetActive={handleSetActive}
                        >
                          Overview
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          to="Challenges"
                          spy={true}
                          className={getLinkClassName("Challenges")}
                          offset={offset} // Usar el estado del desplazamiento
                          duration={500}
                          onSetActive={handleSetActive}
                        >
                          Challenges
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          to="Strategy"
                          spy={true}
                          className={getLinkClassName("Strategy")}
                          offset={offset} // Usar el estado del desplazamiento
                          duration={500}
                          onSetActive={handleSetActive}
                        >
                          Strategy and Goals
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          to="Solutions"
                          className={getLinkClassName("Solutions")}
                          spy={true}
                          offset={offset} // Usar el estado del desplazamiento
                          duration={500}
                          onSetActive={handleSetActive}
                        >
                          Solutions
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          className={getLinkClassName("Results")}
                          to="Results"
                          spy={true}
                          offset={offset} // Usar el estado del desplazamiento
                          duration={500}
                          onSetActive={handleSetActive}
                        >
                          The Final Results
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="footer_link">
          <ReadMore>
            <a href="https://app.securiwiser.com/demo">
              Are you in the education sector? Request a demo
            </a>
          </ReadMore>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
