import React from 'react';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';
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
            lightboxOpen: true,
            currentImg: i
        });
    }

    render() {
        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div className='borders'>
                    <div className='container'>
                        <div className="borders">
                            <h1 className="text-center">Hello! I'm an UX Designer Informatics at the University of Washington.</h1>
                        </div>
                        <Card link="../public/img/breez/breez_banner.svg"/*{constants.images.breez}*/ route={constants.routes.Breez} name={"breez"} />
                        <Card link="../public/img/weEat/weEat_banner.svg"/*{constants.images.weEat}*/ route={constants.routes.WeEat} name={"weEat"} />
                        <Card link="../public/img/wwf_banner.png"/*{constants.images.wwf}*/ route={constants.routes.WWF} name={"wordsWithFriendz"} />
                        <Card link="../public/img/breez/breez_banner.svg"/*{constants.images.foodie}*/ route={constants.routes.Foodie} name={"foodieFanatic"} />
                    </div>
                    <div className="container">
                        <Lightbox
                            images={[{src: '../public/img/DU014.png'}, {src: '../public/img/DU009.png'}, {src: '../public/img/diets.png'}]}
                            isOpen={this.state.lightboxOpen}
                            onClickPrev={() => this.gotoPrev()}
                            onClickNext={() => this.gotoNext()}
                            onClose={() => this.closeLightbox()}
                        />
                        <div className="row">
                            <div className="col-4">
                                <img className="" src="../public/img/DU014.png" alt="countdown timer" onClick={() => this.onImgClick(0)} />
                            </div>
                            <div className="col-4">
                                <img className="" src="../public/img/DU009.png" alt="music player" onClick={() => this.onImgClick(0)} />
                            </div>
                            <div className="col-4">
                                <img className="" src="../public/img/diets.png" alt="infographic" onClick={() => this.onImgClick(0)} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}