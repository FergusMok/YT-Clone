import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeSearchTerm }  from "../redux/searchTerm"


const SearchBar = props => { 

    const dispatch = useDispatch() 
    const searchTerm = useSelector(state => state.searchState);
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSearchTermSubmit(searchTerm);
    }

    const greetingStr = !searchTerm ? "Hello, please enter your search term here! :)" : ""

    return (
        <div className = "search-bar ui segment">
            <form onSubmit = {onFormSubmit} className="ui form">
                <div className="field">
                    <label>{greetingStr}</label>
                    <input type="text" value = {searchTerm} onChange = {e => dispatch(changeSearchTerm(e.target.value))}/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;