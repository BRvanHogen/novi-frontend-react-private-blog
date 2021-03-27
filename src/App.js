import React, {useState} from 'react';
import './App.css';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import posts from './data/posts.json';

//import components
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import BlogOverview from "./components/BlogOverview";
import BlogPage from "./components/BlogPage";

function App() {
    console.log(posts);
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active-link">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">login</NavLink></li>
                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">blog overview</NavLink>
                    </li>
                </ul>
            </nav>
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


