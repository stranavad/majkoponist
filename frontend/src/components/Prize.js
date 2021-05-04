import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Prize extends Component {
    onSelectPrize = () => {
        this.props.onSelect(this.props.prize);
    }

    render() {
        let img;
        img = require("./assets/" + this.props.prize.image).default;
        let component;
        //console.log("Is special:" + this.props.prize.special);
        //console.log("Average: " + this.props.average);
        if(this.props.winner) {
            if (this.props.average === 1 && this.props.prize.special === 1){
                component = <button className="large-button" onClick={this.onSelectPrize}>Vybrat tuto vyhru</button>;
            } else if (this.props.prize.special === 1){ // this is not working
                component = "";
            } else {
                component = <button className="large-button" onClick={this.onSelectPrize}>Vybrat tuto vyhru</button>;
            }
        } else {
            component = "";
        }
        
        return(
            <div className="question show-result-question">
                <h2 className="medium-heading">{this.props.prize.name}</h2>
                <p className="medium-text margin-bottom">{this.props.prize.description}</p>
                {component}
                <img src={img} className="prize-img" alt="Prize"/>
            </div>
        );
    }
}

Prize.propTypes = {
    prize: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    average: PropTypes.number.isRequired,
    winner: PropTypes.bool.isRequired,
}

export default Prize;