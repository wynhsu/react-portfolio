import React from 'react';

export default class Photo extends React.Component {
    render() {
        return (
            <div className="col-4">
                <img className="cardSM" 
                    src={this.props.link} 
                    alt={this.props.alt} 
                    onClick={this.props.onClick} />
                <p className="pt-2 pb-4 text-center">{this.props.name}</p>
            </div>
        );
    }
}