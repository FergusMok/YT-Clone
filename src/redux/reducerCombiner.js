import {createStore, combineReducers} from 'redux' 
import { navBarReducer } from './NavigationBar'
import { searchTermReducer }  from "./searchTerm"
import {changeVideoReducer, changeSelectedVideoReducer} from "./SelectedVideo"


const allReducers = combineReducers({
    navBarState: navBarReducer,
    searchState: searchTermReducer,
    videosState: changeVideoReducer,
    selectedVideoState: changeSelectedVideoReducer
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) 

export default store
