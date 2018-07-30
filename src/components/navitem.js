import React from 'react';
import '../css/nav.css';

export default class Navitem extends React.Component {
    render() {
        return (
            <a className="nav-item nav-link col-sm-3"
                href={this.props.link}
                target='_blank'>
                <img className='light' src={this.props.light} alt="icon" />
                <img className='dark' src={this.props.dark} alt="icon" />
            </a>
        );
    }
}