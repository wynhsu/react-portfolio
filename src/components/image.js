import React from 'react';

export default class Image extends React.Component {
    render() {
        return (
            <div className='spacing container'>
                <h3 className='font-weight-light'>{this.props.title}</h3>
                <img src={this.props.link} alt={this.props.descr} />
            </div>
        );
    }
}