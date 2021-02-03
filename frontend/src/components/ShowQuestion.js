import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowQuestion extends Component {
    render() {
        return(
            <div className="container-flex-start">
                <h2 className="small-heading">{this.props.question.question}</h2>
                <text className="medium-text">Obtiznost: {this.props.question.difficulty}</text>
                <text className="medium-text">Vase odpoved: {this.props.question.user_answer}</text>
                <text className="medium-text">Spravna odpoved: {this.props.question.correct_answer}</text>
                <text className="medium-text">Spravne: {this.props.question.correct}</text>
            </div>
        );
    }
}

ShowQuestion.propTypes = {
    questions: PropTypes.object,
}

export default ShowQuestion