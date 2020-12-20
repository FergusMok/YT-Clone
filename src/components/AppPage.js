import React from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList"
import SelectedVideo from "./SelectedVideo"
import youtube from '../apis/youtubekey'

const YOUTUBE_KEY = 'AIzaSyB54UQo4wm1CZKVWovprJDvZEMKHJmkf9o'

export default class AppPage extends React.Component {

    state = { videos: [], selectedVideo: null }

    onSearchTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: YOUTUBE_KEY,
            },
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (props) => { 
        this.setState( {selectedVideo: props} )
    }

    render() {
        return (
            <div className = "ui container">
                <SearchBar onSearchTermSubmit = {this.onSearchTermSubmit} />
                    <div className = "ui grid"> 
                        <div className = "ui row">
                            <div className = "eleven wide column">
                                <SelectedVideo video = {this.state.selectedVideo}/>
                            </div>

                            <div className = "five wide column">
                                <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
            </div>);
    }
}