import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowPrizes from './ShowPrizes';

class Prizes extends Component {
    render() {
        return(
            <ShowPrizes prizes={this.props.prizes} onSelect={this.props.onSelect}/>
        );
    }
}

Prizes.propTypes = {
    prizes: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Prizes