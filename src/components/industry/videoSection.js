import React from "react"
import Vid from "../videoPlayer/videoPlayer"

const VideoSection = ({ videoId, wrapperClass}) => {
    if ( videoId ) {
        return ( 
            <div className={wrapperClass}>
                <Vid src={videoId}/>
            </div>
        )
    }
}

export default VideoSection