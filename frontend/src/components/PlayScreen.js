import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayScreen extends Component {
    showResult = () => {
        this.props.showResult(this.props.answered);
    }

    render() {
        return(
            <div className="container-center">
                <h2 className="medium-heading">Začať kvíz</h2>
                <p className="medium-text">Kvíz obsahuje 21 otázok a 4 možné odpovede. Na každú z nich máte časový limit 30 sekúnd.</p>
                <button className="large-button" onClick={this.props.playButton}>Hrat!</button>
            </div>
        );
    }
}

PlayScreen.propTypes = {
    playButton: PropTypes.func.isRequired
};

export default PlayScreen;