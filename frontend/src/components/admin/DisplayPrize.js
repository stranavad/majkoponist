import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prize1 from '../assets/Prize1.png';
import Prize2 from '../assets/Prize2.png';
// Just for test
import hana_background from '../assets/hana_background.png';

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
        let img;
        console.log(this.props.prize.prize_image);
        if (this.props.prize.prize_image ==="Prize1") {
            img = Prize1;
        } else if (this.props.prize.prize_image === "Prize2") {
            img = Prize2;
        } else {
            img = hana_background;
        }
        console.log(img);
        return(
            <div className="question">
                <h2 className="medium-heading">Vyhra: {this.props.prize.prize_name}</h2>
                <p className="medium-text">Popis vyhry: {this.props.prize.prize_information}</p>
                <button className="small-button" onClick={this.onEdit}>Upravit</button>
                <button className="small-button danger" onClick={this.onDelete}>Smazat</button>
                <img src={img} className="prize-img" alt="Prize"/>
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