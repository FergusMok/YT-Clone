import React from 'react'
import AppPage from './AppPage'
import AboutPage from './AboutPage'
import NavigationBar from './NavigationBar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default class App extends React.Component {

    


    render = () => {
        return (
        <>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route path = "/" exact component = {AppPage}/>
                    <Route path = "/about" exact component = {AboutPage}/>
                </Switch>
            </Router>
        </>

        )
    }
}