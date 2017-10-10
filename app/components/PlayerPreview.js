"use strict";
import React from 'react';
import PropTypes from "prop-types";

const PlayerPreview = ({avatar, username, children}) => {
    return (
            <div className="column">
                <img
                    className="avatar"
                    src={avatar}
                    alt={"Avatar for " + username}>
                </img>
                <h2 className="username">@{username}</h2>
                {children}
            </div>
    )
};

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};


export default PlayerPreview;