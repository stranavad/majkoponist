import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Prize extends Component {
    onSelectPrize = () => {
        this.props.onSelect(this.props.prize);
    }

    render() {
        let img;
        img = require("./assets/" + this.props.prize.image).default;
        return(
            <div className="question">
                <h2 className="medium-heading">{this.props.prize.name}</h2>
                <p className="medium-text">{this.props.prize.description}</p>
                <button className="large-button" onClick={this.onSelectPrize}>Vybrat tuto vyhru</button>
                <img src={img} className="prize-img" alt="Prize"/>
            </div>
        );
    }
}

Prize.propTypes = {
    prize: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default Prize;