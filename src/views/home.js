import React from 'react';
import Navbar from '../components/navbar.js';
import constants from '../include/constants.js';
import '../css/home.css';

export default class Home extends React.Component {
    handleOnClick(c) {
        this.props.history.push(c);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id='spacing'>
                    <div className='container'>
                        <button className='card' 
                            onClick={() => this.handleOnClick(constants.routes.Breez)}>
                            <img src={constants.images.breez} alt="breez" />
                        </button>
                        <button className='card' 
                            onClick={() => this.handleOnClick(constants.routes.WeEat)}>
                            <img src={constants.images.weEat} alt="weEat" />
                        </button>
                        <button className='card' 
                            onClick={() => this.handleOnClick(constants.routes.WWF)}>
                            <img src={constants.images.wwf} alt="wwf" />
                        </button>
                        <button className='card' 
                            onClick={() => this.handleOnClick(constants.routes.Foodie)}>
                            <img src={constants.images.foodie} alt="foodiefanatic" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}