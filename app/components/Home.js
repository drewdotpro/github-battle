"use strict";
import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/battle.png';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Github Battle</h1>
                <p>Compare Two GitHub accounts and output a score based on their statistics.</p>
                {image &&
                <img
                    className="battle-image"
                    src={image}
                    alt="Github Battle">
                </img>}
                <Link className='button' to='/battle'>Play GitHub Battle</Link>
            </div>
        )
    }
}

export default Home;