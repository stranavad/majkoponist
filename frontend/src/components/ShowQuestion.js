import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowQuestion extends Component {
    render() {
        return(
            <div className="question">
                <h2>{this.props.question.question}</h2>
                <p>Obtiznost: {this.props.question.difficulty}</p>
                <h4>Vase odpoved: {this.props.question.user_answer}</h4>
                <h4>Spravna odpoved: {this.props.question.correct_answer}</h4>
                <h4>Spravne: {this.props.question.correct}</h4>
            </div>
        );
    }
}

ShowQuestion.propTypes = {
    questions: PropTypes.object,
}

export default ShowQuestion