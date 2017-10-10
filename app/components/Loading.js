"use strict";
import React from 'react';
import PropTypes from "prop-types";

const styles = {
    "content": {
        "textAlign": "center",
        fontSize: "35px"
    }
};

class Loading extends React.Component {
    state = {
        text: this.props.text
    };

    static defaultProps = {
        text: "Loading",
        speed: 150
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number.isRequired
    };

    componentDidMount() {
        const {text, speed} = this.props;
        const stopper = text + "...";
        this.loader = setInterval(() => {
            if (this.state.text === stopper) {
                return this.setState(() => ({text: this.props.text}));
            }
            return this.setState((prev) => ({text: prev.text + "."}));
        }, speed);
    }

    componentWillUnmount() {
        clearInterval(this.loader);
    }

    render() {
        return (
            <p style={styles.content}>
                {
                    this.state.text
                }
            </p>
        );
    }
}


export default Loading;