import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayResult from './DisplayResult';

class DisplayResults extends Component {
    render() {
        return this.props.answered.map((answered) => (
            <DisplayResult answered={answered} key={answered.email} showResult={this.props.showResult}/>
        ));
    }
}

DisplayResults.propTypes = {
    answered: PropTypes.array.isRequired,
    showResult: PropTypes.func.isRequired,
};

export default DisplayResults;