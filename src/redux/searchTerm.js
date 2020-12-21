const changeSearchTerm = input => {
    return { 
        type: "SEARCHTERM",
        payload: input
    }
}

const searchTermReducer = (state = "", action) => {
    switch(action.type) {
        case "SEARCHTERM":
            return action.payload;
        default: 
            return state
    }
}



export { changeSearchTerm, searchTermReducer }