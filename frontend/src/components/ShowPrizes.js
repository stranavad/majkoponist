import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prize from './Prize';

class ShowPrizes extends Component {
    render() {
        return this.props.prizes.map((prize) => (
            <Prize prize={prize} key={prize.id} onSelect={this.props.onSelect}/>
        ));
    }
}

ShowPrizes.propTypes = {
    prizes: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default ShowPrizes