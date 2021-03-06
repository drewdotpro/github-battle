"use strict";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "./Nav";
import Home from "./Home";
import Battle from "./Battle";
import Results from "./Results";
import Popular from "./Popular";
import Information from "./Information";
import Head from "./Head";


const information = {
    title: "GitHub Battle by Drew.pro",
    info: "This project was created as part of a React skills showcase. It displays competencies with npm, webpack, babel, elements, components, props, state, propTypes, defaultProps, stateless functional components, lifecycle events, asyncronous requests, dynamic rendering, query parameters, ES6, Promises, async/await and the React Router. The source code is available online for review.",
    linkText: "View Source",
    url: "https://github.com/drewdotpro/github-battle"
};


class App extends React.Component {
    render() {
        return (
            <span>
                <Head/>
                <Router>
                    <div className="container">
                        <Nav/>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Home}
                            />
                            <Route
                                exact
                                path="/battle"
                                component={Battle}
                            />
                            <Route
                                exact
                                path="/battle/results"
                                component={Results}
                            />
                            <Route
                                path="/popular"
                                component={Popular}
                            />
                            <Route render={() => <p>Not Found</p>}/>
                        </Switch>
                        <Information {...information}/>
                    </div>
                </Router>
            </span>
        )

    }
}

export default App;