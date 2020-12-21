import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectApp, selectAbout }  from "../redux/NavigationBar"

const NavigationBar = () => {
    const activated = useSelector(state => state.navBarState)
    const dispatch = useDispatch();
    
    const AppStr = activated === "App" ? " active" : ""
    const AboutStr = activated === "About" ? " active" : "" 
    return (
        <div className ="ui sticky secondary pointing menu">
                <div onClick = {() => dispatch(selectApp())}>
                    <Link to ='/' >
                    <p className = {`item${AppStr}`}>
                        Application
                    </p>
                    </Link>
                </div>

                <div onClick = {() => dispatch(selectAbout())}>
                    <Link to = 'about'>
                    <p className ={`item${AboutStr}`}>
                        About Page
                    </p>
                    </Link>
                </div>
        </div>
    );
}

export default NavigationBar 
