import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navitem from './navitem.js';
import constants from '../include/constants.js';
import '../css/nav.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Work'
        }
    }

    componentDidMount() {
        this.checkActive();
    }

    checkActive() {
        let active = document.querySelector('.active');
        active.classList.remove('active');
        if (this.state.active == 'Work') {
            let curr = document.querySelector('#work');
            curr.classList.add('active');
        } else if (this.state.active == 'About') {
            let curr = document.querySelector('#about');
            curr.classList.add('active');
        } else {
            let curr = document.querySelector('#resume');
            curr.classList.add('active');
        }
    }

    changeActive(e) {
        if (e.id == 'work') {
            this.setState({active: 'Work'});
        } else if (e.id == 'about') {
            this.setState({active: 'About'});
        } else {
            this.setState({active: 'Resume'});
        }
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
                            <a id='work' className="nav-item nav-link active" 
                                href="#" 
                                onClick={(e)=> this.changeActive(e)}>Work</a>
                            <Link id='about' className="nav-item nav-link" 
                                to={constants.routes.About} 
                                onClick={(e)=> this.changeActive(e)}>About</Link>
                            <a id='resume' className="nav-item nav-link" 
                                href="./wynston_hsu.pdf" target='_blank' 
                                onClick={(e)=> this.changeActive(e)}>Resume</a>
                    </div>
                    <ul className="navbar-nav">
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
                    </ul>
                </div>
            </nav>
        );
    }
}