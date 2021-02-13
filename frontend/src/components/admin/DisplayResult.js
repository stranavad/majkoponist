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
                <p className="medium-text">Email: {this.props.answered.email}</p>
                <p className="medium-text">Telefone cislo: {this.props.answered.phone_number}</p>
                <button onClick={this.showResult} className="small-button">Zobrazit vysledky</button>
            </div>
        );
    }
}

DisplayResult.propTypes = {
    answered: PropTypes.object.isRequired,
    showResult: PropTypes.func.isRequired
};

export default DisplayResult;