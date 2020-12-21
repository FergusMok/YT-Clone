const selectApp = () => {
    return { 
        type: "SELECTAPP"
    }
}

const selectAbout = () => {
    return {
        type: "SELECTABOUT"
    }
}

const navBarReducer = (state = "App", action) => {
    switch (action.type) {
        case "SELECTAPP":
            return "App"
        case "SELECTABOUT":
            return "About"
        default: 
            return state

    }
}

export {navBarReducer, selectApp, selectAbout} ;