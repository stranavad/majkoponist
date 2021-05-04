import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.question.id, e.target.value);
    }

    render() {
        let questionCategory;
        if(this.props.question.difficulty === 1) {
            questionCategory = "A";
        } else if(this.props.question.difficulty === 2){
            questionCategory = "B";
        } else {
            questionCategory = "C";
        }
        return(
            <div className="question">
                <div className="form">
                    <div className="question-top-bar">
                        <div className="question-top-bar-part">
                            <p className="small-text">Kategória: {questionCategory}</p>
                        </div>
                        <div className="question-top-bar-part">
                            <p className="small-text">Zostávajúci čas: {this.props.time_left}/30</p>
                            <p className="small-text">Otázka: {this.props.question_number} z 21</p>
                        </div>
                    </div>
                    <h1 className="medium-heading">{this.props.question.question}</h1>
                    <div className="vertical-container">
                        <button className="question-button" value={this.props.question.a1} onClick={this.onSubmit}>
                            {this.props.question.a1}
                        </button>
                        <button className="question-button" value={this.props.question.a2} onClick={this.onSubmit}>
                            {this.props.question.a2}
                        </button>
                        <button className="question-button" value={this.props.question.a3} onClick={this.onSubmit}>
                            {this.props.question.a3}
                        </button>
                        <button className="question-button" value={this.props.question.a4} onClick={this.onSubmit}>
                            {this.props.question.a4}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    question_number: PropTypes.number.isRequired,
    time_left: PropTypes.number.isRequired
};

export default Question;
