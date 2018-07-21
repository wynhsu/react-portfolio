import React from 'react';
import '../css/button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick() {
        this.props.history.push(this.props.route);
    }

    render() {
        return (
            <div className='p-1'>
                <img className='btn navbtn' src={this.props.link} alt="button" 
                    onClick={() => this.handleOnClick()} />
            </div>
        );
    }
}