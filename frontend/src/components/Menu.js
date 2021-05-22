import React, { Component} from 'react';
import favicon500 from './assets/favicon500.png';

class Menu extends Component {

    render() {
        return(
            <div className="menu">
                <img src={favicon500} className="menu-logo"/>
                <h1><a href="/">Čo vieš o Hane ?</a></h1>
            </div>
        );
    }
}

export default Menu;