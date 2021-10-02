import React from 'react';
import Button from './button.js';
import constants from '../include/constants.js';
import '../css/button.css';

export default class Navbtns extends React.Component {
    render() {
        return (
            <div className='btn-drawer'>
                <Button link="./img/breez_button.svg" route={constants.routes.Breez} />
                <Button link="./img/weeat_button.svg" route={constants.routes.WeEat} />
                <Button link="./img/foodie_button.svg" route={constants.routes.Foodie} />
            </div>
        );
    }
}