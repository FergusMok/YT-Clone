import React from 'react'
import axios from 'axios'


class SearchBar extends React.Component { 

    state = { searchTerm : ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchTermSubmit(this.state.searchTerm);
    }

    render() {
        console.log(this.state.searchTerm)
        return <div className = "ui container">
            <form onSubmit = {this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Hello, please enter your search term here! :) </label>
                    <input type="text" value = {this.state.searchTerm} onChange = { e => this.setState( {searchTerm: e.target.value} )}/>
                </div>
            </form>
        </div>
    }
}


export default SearchBar;