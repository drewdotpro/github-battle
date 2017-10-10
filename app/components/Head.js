"use strict";
import React from "react";
import {Helmet} from "react-helmet";
import reactImage from "../assets/react-large.png";

const Nav = (props) => {
    const date = new Date().toISOString();
    const title = "GitHub Battle - ReactJS Project";
    const url = "http://react.drew.pro/";
    const description = "This project was created as part of a React skills showcase. It displays competencies with npm, webpack, babel, elements, components, props, state, propTypes, defaultProps, stateless functional components, lifecycle events, asyncronous requests, dynamic rendering, query parameters, ES6, Promises, async/await and the React Router. The source code is available online for review.";
    const imageUrl = "http://react.drew.pro" + reactImage;
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{title}</title>
            <link rel="canonical" href={url}/>
            <meta name="description" content={description}/>

            <meta itemprop="name" content={title}/>
            <meta itemprop="description" content={description}/>
            <meta itemprop="image" content={imageUrl}/>


            <meta name="twitter:card" content={imageUrl}/>
            <meta name="twitter:site" content="@drewdotpro"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content="This project was created as part of a React skills showcase."/>
            <meta name="twitter:creator" content="@drewdotpro"/>
            <meta name="twitter:image:src" content={imageUrl}/>


            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content={imageUrl}/>
            <meta property="og:description" content={description}/>
            <meta property="og:site_name" content={title}/>
            <meta property="article:published_time" content={date}/>
            <meta property="article:modified_time" content={date}/>
        </Helmet>
    );
};

export default Nav;