import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prize1 from './assets/Prize1.png';
import Prize2 from './assets/Prize2.png';
// Just for test
import hana_background from './assets/hana_background.png';

class Prize extends Component {
    onSelectPrize = () => {
        this.props.onSelect(this.props.prize);
    }

    render() {
        let img;
        if (this.props.prize.image ==="Prize1") {
            img = Prize1;
        } else if (this.props.prize.image === "Prize2") {
            img = Prize2;
        } else {
            img = hana_background;
        }
        return(
            <div className="question">
                <h2 className="medium-heading">{this.props.prize.name}</h2>
                <p className="medium-text">Obtiznost: {this.props.prize.description}</p>
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