import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prize from './Prize';

class ShowPrizes extends Component {
    render() {
        return this.props.prizes.map((prize) => (
            <Prize prize={prize} key={prize.id} onSelect={this.props.onSelect} average={this.props.average} winner={this.props.winner}/>
        ));
    }
}

ShowPrizes.propTypes = {
    prizes: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    average: PropTypes.number.isRequired,
    winner: PropTypes.bool.isRequired,
}

export default ShowPrizes