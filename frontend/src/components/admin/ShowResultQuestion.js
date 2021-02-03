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
                <text className="medium-text">Obtiznost: {this.props.question.difficulty}</text>
                <text className="medium-text bolder">Odpoved uzivatela: {this.props.question.user_answer}</text>
                <text className="medium-text bolder">Spravna odpoved: {this.props.question.correct_answer}</text>
                <text className="medium-text bolder">Spravne: {this.props.question.correct}</text>
            </div>
        );
    }
}

ShowResultQuestion.propTypes = {
    question: PropTypes.object
};

export default ShowResultQuestion;