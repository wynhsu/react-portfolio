import React from 'react';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';
import Photo from '../components/photo.js';
import Footer from '../components/footer.js';
import { Link } from 'react-router-dom';
import constants from '../include/constants.js';
import '../css/home.css';

import Lightbox from 'react-images';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxOpen: false,
            currentImg: 0
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleOnClick(c) {
        this.props.history.push(c);
    }

    gotoPrev() {
        this.setState({
            currentImg: this.state.currentImg - 1
        });
    }

    gotoNext() {
        this.setState({
            currentImg: this.state.currentImg + 1
        });
    }

    closeLightbox() {
        this.setState({
            lightboxOpen: false,
            currentImg: 0
        });
    }

    onImgClick(i) {
        this.setState({
            currentImg: i,
            lightboxOpen: true
        });
        console.log(i);
    }

    render() {
        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div id="mainframe">
                    <div className='container'>
                        <div className="borders">
                            <h1 className="text-center">Hello! I'm a UX Designer studying Informatics at the University of Washington.</h1>
                        </div>
                        <Card link={constants.images.breez} route={constants.routes.Breez} name={"breez"} />
                        <Card link={constants.images.weEat} route={constants.routes.WeEat} name={"weEat"} />
                        {/* <Card link={constants.images.wwf} route={constants.routes.WWF} name={"wordsWithFriendz"} /> */}
                        <Card link={constants.images.foodie} route={constants.routes.Foodie} name={"foodieFanatic"} />
                    </div>
                    <div className='container'>
                        <div className="topSpacer">
                            <div className="pt-5 pb-5">
                                <h2 className="text-center">Coding</h2>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <Card link={constants.images.ecoSnap} route={constants.routes.EcoSnap} name={"ecoSnap"} />
                                </div>
                                <div className="col-4">
                                    <Card link={constants.images.courtVision} route={constants.routes.CourtVision} name={"courtVision"} />
                                </div>
                                <div className="col-4">
                                    <Card link={constants.images.wwf} route={constants.routes.WWF} name={"wordsWithFriendz"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="topSpacer">
                            <div className="pt-5 pb-5">
                                <h2 className="text-center">Gallery</h2>
                            </div>
                            <Lightbox
                                currentImage={this.state.currentImg}
                                images={[{
                                    src: `${constants.images.DU014}`,
                                    caption: 'Daily UI #014 Countdown Timer',
                                    alt: 'countdown timer'
                                }, {
                                    src: `${constants.images.DU012}`,
                                    caption: 'Daily UI #012 E-Commerce: Amazon Redesign',
                                    alt: 'e-commerce'
                                }, {
                                    src: `${constants.images.DU009}`,
                                    caption: 'Daily UI #009 Music Player',
                                    alt: 'music player'
                                }, {
                                    src: `${constants.images.DU003}`,
                                    caption: 'Daily UI #003 Landing Page',
                                    alt: 'landing page'
                                }, {
                                    src: `${constants.images.DU002}`,
                                    caption: 'Daily UI #002 Credit Card Checkout',
                                    alt: 'checkout'
                                }, {
                                    src: './img/diets_nobg.png',
                                    caption: 'http://wynhsu.wixsite.com/info362-wynston',
                                    alt: 'sustainability infographic'
                                }]}
                                isOpen={this.state.lightboxOpen}
                                onClickPrev={() => this.gotoPrev()}
                                onClickNext={() => this.gotoNext()}
                                onClose={() => this.closeLightbox()}
                            />
                            <div className="row">
                                <Photo link={constants.images.DU014} name="Daily UI #014" onClick={() => this.onImgClick(0)} alt="countdown timer" />
                                <Photo link={constants.images.DU012} name="Daily UI #012" onClick={() => this.onImgClick(1)} alt="e-commerce" />
                                <Photo link={constants.images.DU009} name="Daily UI #009" onClick={() => this.onImgClick(2)} alt="music player" />
                            </div>
                            <div className="row">
                                <Photo link={constants.images.DU003} name="Daily UI #003" onClick={() => this.onImgClick(3)} alt="landing page" />
                                <Photo link={constants.images.DU002} name="Daily UI #002" onClick={() => this.onImgClick(4)} alt="checkout" />
                                <Photo link="./img/diets.png" name="Sustainability Infographic" onClick={() => this.onImgClick(5)} alt="infographic" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}