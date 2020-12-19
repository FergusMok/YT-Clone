import axios from "axios"

const YOUTUBE_KEY = 'AIzaSyB54UQo4wm1CZKVWovprJDvZEMKHJmkf9o'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_KEY,
    }
})