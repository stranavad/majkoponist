import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.question.id, e.target.value);
    }

    render() {
        return(
            <div className="question">
                <div className="form">
                    <h1 className="medium-heading">{this.props.question.question}</h1>
                    <p className="medium-text">Obtiznost {this.props.question.difficulty}</p>
                    <p className="medium-text">Zbyvajici cas {this.props.time_left}/30</p>
                    <p className="medium-text">Otazka {this.props.question_number} z 21</p>
                    <div className="horizontal-container">
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

/* 
<div className="radio-group">
                            <input className="radio-button" type="radio" id="answer" name="answer" value={this.props.question.a1} checked={this.state.answer === this.props.question.a1} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a1}>{this.props.question.a1}</label>
                        </div>
                        <div className="radio-group">
                            <input className="radio-button" type="radio" id="answer" name="answer" value={this.props.question.a2} checked={this.state.answer === this.props.question.a2} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a2}>{this.props.question.a2}</label>
                        </div>
                        <div className="radio-group">
                            <input className="radio-button" type="radio" id="answer" name="answer" value={this.props.question.a3} checked={this.state.answer === this.props.question.a3} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a3}>{this.props.question.a3}</label>
                        </div>
                        <div className="radio-group">
                            <input className="radio-button" type="radio" id="answer" name="answer" value={this.props.question.a4} checked={this.state.answer === this.props.question.a4} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a4}>{this.props.question.a4}</label>
                        </div>
*/