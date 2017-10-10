"use strict";
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import QueryString from "query-string";
import Loading from "./Loading";
import {battle} from "../utils/api";
import PlayerPreview from "./PlayerPreview";

const Profile = ({info}) => {
    return (
        <PlayerPreview avatar={info.avatar_url} username={info.login}>
            <ul className='space-list-items'>
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos: {info.public_repos}</li>
                {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
            </ul>
        </PlayerPreview>
    );
};

Profile.propTypes = {
    info: PropTypes.object.isRequired
};

const Player = ({label, score, profile}) => {
    return (
        <div>
            <h1 className="header">
                {label}
            </h1>
            <h3 style={{textAlign: "center"}}>
                Score: {score}
            </h3>
            <Profile info={profile}/>
        </div>
    );
};

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};

class Results extends React.Component {
    state = {
        winner: null,
        loser: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        const {playerOneName, playerTwoName} = QueryString.parse(this.props.location.search);
        const result = await battle([
            playerOneName,
            playerTwoName
        ]);
        if (result === null) {
            return this.setState(() => ({
                error: "An Error occurred processing your request. Check that both errors exist",
                loading: false
            }));
        }
        return this.setState(() => ({
            error: null,
            loading: false,
            winner: result[0],
            loser: result[1]
        }));
    }

    render() {
        const {winner, loser, error, loading} = this.state;
        if (loading === true) {
            return (
                <div><Loading/></div>
            )
        }
        if (error !== null) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to="/battle">Reset</Link>
                </div>
            )
        }

        return (
            <div className="row">
                <Player
                    label="Winner"
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player
                    label="Loser"
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        );

    }
}

export default Results;