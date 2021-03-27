import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

//import components
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import BlogOverview from "./components/BlogOverview";
import BlogPage from "./components/BlogPage";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/blogposts">
                    <BlogOverview/>
                </Route>
                <Route path="/:id">
                    <BlogPage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;


