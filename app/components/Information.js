"use strict";
import React from 'react';
import PropTypes from "prop-types";

import defaultImage from "../assets/github-512.png";

const styles = {
    "content": {
        "marginTop": "100px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "borderRadius": "25px",
        "border": "2px solid #73AD21",
        "padding": "20px",
        "width": "80%"
    },
    "image": {
        "width": "150px",
        "borderRadius": "50%"
    }
};

class Information extends React.Component {
    static defaultProps = {
        info: "Thanks for viewing",
        image: defaultImage,
        title: "Drew.Pro",
        linkText: "Drew.Pro",
        url: "http://drew.pro"
    };

    static propTypes = {
        info: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
    };

    render() {
        const {info, image, url, title, linkText} = this.props;

        return (
            <div style={styles.content}>
                <h2>{title}</h2>
                <p>{info}</p>
                {image &&
                <img
                    style={styles.image}
                    src={image}
                    alt={"Project Page for " + title}>
                </img>}
                <a className='button' href={url} target="_blank">{linkText}</a>
            </div>
        );
    }
}


export default Information;