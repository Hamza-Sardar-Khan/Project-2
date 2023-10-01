import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./style/index.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import ShareButtons from "./shareButtons";
import InPostCta from "./inPostCta";
import { GatsbyImage } from "gatsby-plugin-image";

const shortcodes = { InPostCta };

const BlogMainContent = ({ data, prevPostData, nextPostData, postPrefix }) => {
  if (!postPrefix) {
    postPrefix = "blog";
  }

  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="single-blog-content">
      <ShareButtons
        title={data.frontmatter.title}
        postPrefix={postPrefix}
        cssClass="social-share-top"
      />
      <div className={`img-container ${isMobile ? "hidden" : ""}`}>
        <GatsbyImage
          image={data.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title}
          className="img"
          loading="lazy"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          breakpoints={[768, 992, 1200]}
          sizes="(max-width: 320px) 100vw, 1200px"
        />
      </div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.body}</MDXRenderer>
      </MDXProvider>
      <ShareButtons
        title={data.frontmatter.title}
        postPrefix={postPrefix}
        cssClass="social-share-bottom"
      />
      <div className="custom-pagination">
        {prevPostData && (
          <div className="pager">
            <h3>Previous Article</h3>
            <Link
              to={`/${postPrefix}/${prevPostData.frontmatter?.title
                .trim()
                .toLowerCase()
                .replace(/ /gi, "-")
                .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
            >
              {prevPostData.frontmatter?.title}
            </Link>
          </div>
        )}
        {nextPostData && (
          <div className="pager">
            <h3>Next Article</h3>
            <Link
              to={`/${postPrefix}/${nextPostData.frontmatter?.title
                .trim()
                .toLowerCase()
                .replace(/ /gi, "-")
                .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
            >
              {nextPostData.frontmatter?.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogMainContent;
