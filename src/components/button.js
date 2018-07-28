import React from 'react';
import '../css/button.css';
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick(c) {
        this.props.history.push(c);
    }

    render() {
        return (
            <div className='p-1'>
                <Link to={this.props.route} >
                    <img className='btn navbtn' src={this.props.link} alt="button" />
                </Link>
            </div>
        );
    }
}