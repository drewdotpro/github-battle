"use strict";

const id = "59fb3ebdbfffa8c29f15";
const sec = "8c8cbde9ff55d4f9516d9e94c0112c1de2d3039c";
const params = `?client_id=${id}&client_secret=${sec}`;

const getProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}${params}`);
    return response.json();
};

const getRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
    return response.json();
};

const getStarCount = (repos) => {
    return repos.reduce((count, {stargazers_count}) => count + stargazers_count, 0);
};

const calculateScore = ({followers}, repos) => (followers * 3) + getStarCount(repos);

const handleError = (error) => {
    console.warn(error);
    return null;
};

const getUserData = async (player) => {
    const [profile, repos] = await Promise.all([
        getProfile(player),
        getRepos(player)
    ]);
    return {
        profile,
        score: calculateScore(profile, repos)
    }
};

const sortPlayers = (players) => {
    return players.sort((a, b) => b.score - a.score);
};


export const fetchPopularRepos = async language => {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories${params}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    try {
        const response = await fetch(encodedURI);
        const repos = await response.json();
        return repos.items;
    } catch(e) {
        return handleError(e);
    }
};

export const battle = async players => {
    try {
        return (sortPlayers(await Promise.all(players.map(getUserData))));
    } catch (e){
        return handleError(e);
    }
};