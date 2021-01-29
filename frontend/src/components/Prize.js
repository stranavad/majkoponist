import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Prize extends Component {
    onSelectPrize = () => {
        this.props.onSelect(this.props.prize);
    }

    render() {
        return(
            <div className="question">
                <h2>{this.props.prize.name}</h2>
                <p>Obtiznost: {this.props.prize.description}</p>
                <button className="retry-game-button" onClick={this.onSelectPrize}>Vybrat tuto vyhru</button>
            </div>
        );
    }
}

Prize.propTypes = {
    prize: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default Prize;