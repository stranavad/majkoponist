import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayScreen extends Component {
    showResult = () => {
        this.props.showResult(this.props.answered);
    }

    render() {
        return(
            <div className="container-center">
                <h2 className="medium-heading">Zacit kviz</h2>
                <p className="medium-text">Ve kvizu je 21 otazkem, pricemz na kazdou otazku mate 30s. Kazda otazka ma 4 odpovedi, z toho pouze jedna je spravna</p>
                <button className="large-button" onClick={this.props.playButton}>Hrat!</button>
            </div>
        );
    }
}

PlayScreen.propTypes = {
    playButton: PropTypes.func.isRequired
};

export default PlayScreen;