import React from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList"
import SelectedVideo from "./SelectedVideo"
import youtube from '../apis/youtubekey'
import {changeVideos, changeSelectedVideo} from "../redux/SelectedVideo"
import {useSelector, useDispatch} from 'react-redux'


const YOUTUBE_KEY = 'AIzaSyB54UQo4wm1CZKVWovprJDvZEMKHJmkf9o'

const AppPage = () => {

    const videos = useSelector( state => state.videosState )
    const dispatch = useDispatch();

    const onSearchTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: YOUTUBE_KEY,
            },
        });

        dispatch( changeVideos(response.data.items) )
        dispatch( changeSelectedVideo(response.data.items[0]) )
    }

    const onVideoSelect = (props) => {
        dispatch( changeSelectedVideo(props) )
    }

    return (
        <div className = "ui container">
            <SearchBar onSearchTermSubmit = {onSearchTermSubmit} />
                <div className = "ui grid"> 
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <SelectedVideo/>
                        </div>
                        <div className = "five wide column">
                            <VideoList onVideoSelect = {onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AppPage