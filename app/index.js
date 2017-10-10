"use strict";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);