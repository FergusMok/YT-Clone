import React from 'react';
import VideoItem from './VideoItem'
import {useSelector} from 'react-redux'


const VideoList = () => {

    const videos = useSelector( state => state.videosState )
    
    const renderedList = videos.map( video => {
        return (
            <VideoItem 
            key = {video.etag} video = {video}
            />
        );

    })
    return <div className ="ui relaxed divided list"> 
            {renderedList} 
        </div>
}

export default VideoList