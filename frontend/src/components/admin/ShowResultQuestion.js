import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowResultQuestion extends Component {
    showResult = () => {
        this.props.showResult(this.props.answered);
    }

    render() {
        return(
            <div className="question">
                <h2 className="medium-heading">{this.props.question.question}</h2>
                <p className="medium-text">Obtiznost: {this.props.question.difficulty}</p>
                <p className="medium-text bolder">Odpoved uzivatela: {this.props.question.user_answer}</p>
                <p className="medium-text bolder">Spravna odpoved: {this.props.question.correct_answer}</p>
                <p className="medium-text bolder">Spravne: {this.props.question.correct}</p>
            </div>
        );
    }
}

ShowResultQuestion.propTypes = {
    question: PropTypes.object
};

export default ShowResultQuestion;