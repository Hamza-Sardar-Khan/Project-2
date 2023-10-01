import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./style/index.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroNews = ({ data, read, currentCat, currentAuthor }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRenderImage, setShouldRenderImage] = useState(false);

  useEffect(() => {
    // Check the screen width on the client side when the component mounts
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Delay rendering the image to prevent it from briefly appearing on page refresh
    const timeout = setTimeout(() => {
      setShouldRenderImage(!isMobile);
    }, 500); // Adjust the delay as needed

    // Clear the timeout on unmount to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [isMobile]);

  const category = currentCat;
  const style = {
    borderColor: category?.color,
    color: category?.color ? category?.color : "#EE4A4E",
  };

  return (
    <div className="main-hero">
      <h1>{data?.title}</h1>
      <p>
        <Link to={`/news/`}>{'News'}</Link> / {data?.title}
      </p>
      <div className="post-info">
        <div>
          <Link
            style={style}
            to={`/news/category/${data?.category
              .trim()
              .toLowerCase()
              .replace(/ /gi, "-")
              .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
          >
            {data?.category}
          </Link>
          <h2 className="m-read sw-paragraph-4 sw-font-weight-xs">
            {read} MIN READ
          </h2>
        </div>
        <div>
          By{' '}
          {shouldRenderImage && (
            <div className="img-container">
              <GatsbyImage
                image={currentAuthor?.thumbnail?.childImageSharp?.gatsbyImageData}
                alt=""
                loading="lazy"
              />
            </div>
          )}
          <Link
            id="author-name"
            to={`/news/author/${currentAuthor?.name
              .trim()
              .toLowerCase()
              .replace(/ /gi, "-")
              .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}/`}
          >
            {currentAuthor?.name}
          </Link>
          {data?.date}
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
