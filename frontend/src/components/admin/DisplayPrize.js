import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayPrize extends Component {
    showResult = () => {
        this.props.showResult(this.props.answered);
    }

    onEdit = () => {
        this.props.onEdit(this.props.prize);
    }

    onDelete = () => {
        this.props.onDelete(this.props.prize.id)
    }

    render() {
        return(
            <div className="question">
                <h2 className="medium-heading">Vyhra: {this.props.prize.prize_name}</h2>
                <p className="medium-text">Popis vyhry: {this.props.prize.prize_information}</p>
                <button className="small-button" onClick={this.onEdit}>Upravit</button>
                <button className="small-button danger" onClick={this.onDelete}>Smazat</button>
            </div>
        );
    }
}

DisplayPrize.propTypes = {
    prize: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DisplayPrize;