import React from 'react';
import Button from './button.js';
import constants from '../include/constants.js';
import '../css/button.css';

export default class Navbtns extends React.Component {
    render() {
        return (
            <div className='btn-drawer'>
                <Button link="../public/img/breez_button.svg" route={constants.routes.Breez} />
                <Button link="../public/img/weeat_button.svg" route={constants.routes.WeEat} />
                <Button link="../public/img/wwf_button.svg" route={constants.routes.WWF} />
                <Button link="../public/img/foodie_button.svg" route={constants.routes.Foodie} />
            </div>
        );
    }
}