const changeVideos = input => {
    return {
        type: 'VIDEOS',
        payload: input
    }
}

const changeSelectedVideo = input => {
    return {
        type: "SELECTEDVIDEO",
        payload: input
    }
}

const changeVideoReducer = (state = [], action) => {
    switch (action.type) {
        case "VIDEOS":
            return action.payload;
        default: 
            return state;
    }
}

const changeSelectedVideoReducer = (state = null, action) => {
    switch (action.type) {
        case "SELECTEDVIDEO":
            return action.payload;
        default: 
            return state;

    }
}

export {changeVideoReducer, changeSelectedVideoReducer, changeVideos, changeSelectedVideo}