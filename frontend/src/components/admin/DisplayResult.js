import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayResult extends Component {
    showResult = () => {
        this.props.showResult(this.props.answered);
    }

    render() {
        return(
            <div className="question">
                <h2 className="medium-heading">{this.props.answered.name}</h2>
                <text className="medium-text">Email: {this.props.answered.email}</text>
                <text className="medium-text">Phone number: {this.props.answered.phone_number}</text>
                <button onClick={this.showResult} className="small-button">Show Result</button>
            </div>
        );
    }
}

DisplayResult.propTypes = {
    answered: PropTypes.object.isRequired,
    showResult: PropTypes.func.isRequired
};

export default DisplayResult;