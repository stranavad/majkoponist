import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowPrizes from './ShowPrizes';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import SpecialPrize from './SpecialPrize';

class Prizes extends Component {
    render() {
        return(
            <div>
                <ShowPrizes prizes={this.props.prizes} onSelect={this.props.onSelect}/>
            </div>
        );
    }
}

Prizes.propTypes = {
    prizes: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Prizes