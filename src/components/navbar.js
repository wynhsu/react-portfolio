import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navitem from './navitem.js';
import constants from '../include/constants.js';
import '../css/nav.css';

export default class Navbar extends React.Component {
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Work <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={constants.routes.About}>About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                                href="../public/wynston_hsu.pdf" target='_blank'>Resume</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <Navitem link="mailto:wynhsu@uw.edu"
                            light="../public/img/contact/email-light.svg" 
                            dark="../public/img/contact/email-dark.svg" />
                        <Navitem link="https://www.linkedin.com/in/wynston-hsu/"
                            light="../public/img/contact/linkedin-light.svg" 
                            dark="../public/img/contact/linkedin-dark.svg" />
                        <Navitem link="https://github.com/wynhsu"
                            light="../public/img/contact/github-light.svg" 
                            dark="../public/img/contact/github-dark.svg" />
                        <Navitem link="https://dribbble.com/wynhsu"
                            light="../public/img/contact/dribbble-light.svg" 
                            dark="../public/img/contact/dribbble-dark.svg" />
                    </ul>
                </div>
            </nav>
        );
    }
}