import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class NavigationBar extends Component {
    
    state = { activated: "App" }
    render = () => {
    
        const AppStr = this.state.activated === "App" ? " active" : "" 
        const AboutStr = this.state.activated === "About" ? " active" : "" 

        return <div className ="ui sticky secondary pointing menu">
                <div onClick = {() => this.setState({activated: "App"})}>
                    <Link to ='/' >
                    <p className = {`item${AppStr}`}>
                        Application
                    </p>
                    </Link>
                </div>

                <div onClick = {() => this.setState({activated: "About"})}>
                    <Link to = 'about'>
                    <p className ={`item${AboutStr}`}>
                        About Page
                    </p>
                    </Link>
                </div>
        </div>
    }
}
