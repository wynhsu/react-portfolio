import React from 'react';
import '../css/nav.css';

export default class Navitem extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link"
                    href={this.props.link}
                    target='_blank'>
                    <img className='light' src={this.props.light} alt="icon" />
                    <img className='dark' src={this.props.dark} alt="icon" />
                </a>
            </li>
        );
    }
}