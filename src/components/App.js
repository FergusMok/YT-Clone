import React from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList"
import youtube from '../apis/youtubekey'


export default class App extends React.Component {

    state = { videos: [] }
   onSearchTermSubmit = async term => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       });
       this.setState({videos: response.data.items} );
    }

    render() {
        return <div>  
            <SearchBar onSearchTermSubmit = {this.onSearchTermSubmit} />
            <VideoList videos={this.state.videos} />
        </div>
    }
}