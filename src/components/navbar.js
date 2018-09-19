import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navitem from './navitem.js';
import constants from '../include/constants.js';
import '../css/nav.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let url = this.props.pathname;
        let sub = "#" + url.substring(1);
        document.querySelector(sub).classList.add('active');
    }

    checkActive(e) {
        document.querySelector('.active').classList.remove('active');
        if (e === 'Work') {
            let curr = document.querySelector('#work');
            curr.classList.add('active');
        } else if (e === 'About') {
            let curr = document.querySelector('#about');
            curr.classList.add('active');
        }
    }

    changeActive(e) {
        // console.log(e);
        this.checkActive(e);
    }

    render() {
        return (
            <nav className='navbar navbar-expand-md fixed-top navbar-light shadow'>
                <NavLink className='navbar-brand font-weight-bold' to='/'>WYNSTON HSU</NavLink>
                <button className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        <a id='work' className="nav-item nav-link"
                            href="#"
                            onClick={() => this.changeActive("Work")}>Work</a>
                        <Link id='about' className="nav-item nav-link"
                            to={constants.routes.About}
                            onClick={() => this.changeActive("About")}>About</Link>
                        <a id='resume' className="nav-item nav-link"
                            href="./wynston_hsu.pdf" target='_blank'>Resume</a>
                    </div>
                    <div id="contact-drawer" className="navbar-nav container">
                        <div id="contact" className="row">
                            <Navitem link="mailto:wynhsu@uw.edu"
                                light="./img/contact/email-light.svg"
                                dark="./img/contact/email-dark.svg" />
                            <Navitem link="https://www.linkedin.com/in/wynston-hsu/"
                                light="./img/contact/linkedin-light.svg"
                                dark="./img/contact/linkedin-dark.svg" />
                            <Navitem link="https://github.com/wynhsu"
                                light="./img/contact/github-light.svg"
                                dark="./img/contact/github-dark.svg" />
                            <Navitem link="https://dribbble.com/wynhsu"
                                light="./img/contact/dribbble-light.svg"
                                dark="./img/contact/dribbble-dark.svg" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}