import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        return (
            <div className="topSpacer">
                <Link className='card' to={this.props.route} >
                    <img src={this.props.link} alt={this.props.name} />
                </Link>
            </div>
        );
    }
}