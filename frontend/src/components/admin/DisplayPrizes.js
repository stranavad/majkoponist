import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPrize from './DisplayPrize';

class DisplayPrizes extends Component {
    render() {
        return this.props.prizes.map((prize) => (
            <DisplayPrize prize={prize} key={prize.id} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
        ));
    }
}

DisplayPrizes.propTypes = {
    prizes: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DisplayPrizes;