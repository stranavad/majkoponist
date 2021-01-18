import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminPageQuestion extends Component {
    render() {
        return(
            <div className="admin-question">
                <h2>{this.props.question.question}</h2>
                <h4>Difficulty: {this.props.question.difficulty}</h4>
                <ul>
                    <li>Correct Answer: {this.props.question.correct_answer}</li>
                    <li>Answer 2: {this.props.question.a2}</li>
                    <li>Answer 3: {this.props.question.a3}</li>
                    <li>Answer 4: {this.props.question.a4}</li>
                </ul>
                <button className="question-action-button" onClick={this.props.onEdit.bind(this, this.props.question)}>Edit</button>
                <button className="question-action-button" onClick={this.props.onDelete.bind(this, this.props.question.id)}>Delete</button>
            </div>
        );
    }
}

AdminPageQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default AdminPageQuestion;