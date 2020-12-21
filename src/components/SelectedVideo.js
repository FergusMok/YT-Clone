import React from 'react'
import {useSelector} from 'react-redux'


const SelectedVideo = () => {

    const selectedVideo = useSelector( state => state.selectedVideoState ) 

    if (!selectedVideo) {
        return <div></div>
    } else {
        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
        return (
        <div>
            <div className = "ui embed">
                <iframe title = "video player" src = {videoSrc}/>
            </div>
            <div className = "ui segment">
                <h3 className = "ui header">
                    {selectedVideo.snippet.title}
                </h3>
            <p>{selectedVideo.snippet.description}</p>
            </div>
        
        </div>
        );
    }
}

export default SelectedVideo;
