import React from 'react';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';
import { Link } from 'react-router-dom';
import constants from '../include/constants.js';
import '../css/home.css';

export default class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleOnClick(c) {
        this.props.history.push(c);
    }

    render() {
        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div id='spacing'>
                    <div className='container'>
                        <Card link={constants.images.breez} route={constants.routes.Breez} name={"breez"} />
                        <Card link={constants.images.weEat} route={constants.routes.WeEat} name={"weEat"} />
                        <Card link={constants.images.wwf} route={constants.routes.WWF} name={"wordsWithFriendz"} />
                        <Card link={constants.images.foodie} route={constants.routes.Foodie} name={"foodieFanatic"} />
                        <p className='text-center footer pt-4'>&#169;2018 Wynston Hsu. Created with React.js</p>
                    </div>
                </div>
            </div>
        );
    }
}