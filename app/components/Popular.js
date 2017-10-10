"use strict";
import React from "react";
import PropTypes from "prop-types";
import {fetchPopularRepos} from "../utils/api";
import Loading from "./Loading";

const SelectLanguage = ({onSelect, selectedLanguage}) => {
    const languages = [
        "All",
        "JavaScript",
        "Ruby",
        "Java",
        "CSS",
        "Python"
    ];
    return (
        <ul className="languages">
            {languages.map(language => {
                return (
                    <li
                        className={language === selectedLanguage ? "selected" : null}
                        onClick={() => {
                            onSelect(language)
                        }}
                        key={language}>
                        {language}
                    </li>
                );
            })}
        </ul>
    );
};

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

const RepoGrid = ({repos}) => {
    return (
        <ul className='popularList'>
            {repos.map(({id, owner, html_url, name, stargazers_count}, idx) => {
                return (
                    <li
                        key={id}
                        className="popular-item">
                        <div className="popular-rank">
                            #{idx + 1}
                        </div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                    className="avatar"
                                    src={owner.avatar_url}
                                    alt={"Avatar for" + owner.login}
                                />
                            </li>
                            <li className="popular-text">
                                <a href={html_url}>{name}</a>
                            </li>
                            <li className="popular-text">@{owner.login}</li>
                            <li className="popular-text">{stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
};

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
};


class Popular extends React.Component {
    state = {
        selectedLanguage: "All",
        repos: null
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = async (lang) => {
        this.setState(() => ({
            selectedLanguage: lang,
            repos: null
        }));

        const repos = await fetchPopularRepos(lang);
        this.setState(() => ({repos}));
    };

    render() {
        const {repos, selectedLanguage} = this.state;
        return (
            <div className="full">
                <SelectLanguage
                    selectedLanguage={selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {repos
                    ? <RepoGrid repos={repos}/>
                    : <Loading/>
                }
            </div>
        )

    }
}

export default Popular;