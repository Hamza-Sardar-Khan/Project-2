import React from "react"
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookIcon,
    TwitterIcon
  } from "react-share"

const ShareButtons = ({ title, postPrefix, cssClass }) => {
    return (
        <div className={`${cssClass}`}>
            <span>Share</span>
            <div className="social-buttons">
                <FacebookShareButton
                    url={`${
                    typeof window !== "undefined" && window.location.origin
                    }/${postPrefix}/${title
                    .trim()
                    .toLowerCase()
                    .replace(/ /gi, "-")
                    .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
                >
                <FacebookIcon/>
                </FacebookShareButton>

                <TwitterShareButton
                    url={`${
                    typeof window !== "undefined" && window.location.origin
                    }/${postPrefix}/${title
                    .trim()
                    .toLowerCase()
                    .replace(/ /gi, "-")
                    .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
                >
                <TwitterIcon/>
                </TwitterShareButton>

                <LinkedinShareButton
                    url={`${
                    typeof window !== "undefined" && window.location.origin
                    }/${postPrefix}/${title
                    .trim()
                    .toLowerCase()
                    .replace(/ /gi, "-")
                    .replace(/[`~!@#$%^&*()_|+\=?;‘:'’",<>]/gi, "")}`}
                >
                <LinkedinIcon/>
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default ShareButtons