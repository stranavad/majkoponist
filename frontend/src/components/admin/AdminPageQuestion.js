import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminPageQuestion extends Component {
    render() {
        return(
            <div className="question">
                <h2 className="medium-heading">{this.props.question.question}</h2>
                <p className="medium-text">Obtiznost: {this.props.question.difficulty}</p>
                <ul className="rules-list">
                    <li>Spravna odpoved: {this.props.question.correct_answer}</li>
                    <li>Odpoved 2: {this.props.question.a2}</li>
                    <li>Odpoved 3: {this.props.question.a3}</li>
                    <li>Odpoved 4: {this.props.question.a4}</li>
                </ul>
                <button className="small-button" onClick={this.props.onEdit.bind(this, this.props.question)}>Upravit</button>
                <button className="small-button danger" onClick={this.props.onDelete.bind(this, this.props.question.id)}>Smazat</button>
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