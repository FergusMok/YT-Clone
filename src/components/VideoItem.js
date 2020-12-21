import React from 'react';
import "./VideoItem.css"
import {useDispatch} from 'react-redux'
import {changeSelectedVideo} from "../redux/SelectedVideo"


const VideoItem = (props) => {
        const dispatch = useDispatch();
        return <div onClick = { () => dispatch(changeSelectedVideo(props.video))} className = "video-item item"> 
                <img className = "ui image" src = {props.video.snippet.thumbnails.medium.url} />
                        <div className = "header"> {props.video.snippet.title}  </div>
                </div>
}

export default VideoItem;