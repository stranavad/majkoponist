import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    state = {
        answer: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.question.id, this.state.answer);
        this.setState({
            answer: ''
        });
    }
    
    onChangeAnswer = (e) => this.setState({ answer: e.target.value});

    render() {
        return(
            <div className="question-form-div">
                <form className="quiz-question-form" onSubmit={this.onSubmit}>
                    <h1 className="question-heading">{this.props.question.question}</h1>
                    <h4 className="question-desc">Obtiznost {this.props.question.difficulty}</h4>
                    <h4 className="question-desc">Zbyvajici cas {this.props.time_left}/30</h4>
                    <h4 className="question-desc">Otazka {this.props.question_number} z 21</h4>
                    <div className="radios">
                        <div className="radio-group">
                            <input type="radio" id="answer" name="answer" value={this.props.question.a1} checked={this.state.answer === this.props.question.a1} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a1}>{this.props.question.a1}</label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="answer" name="answer" value={this.props.question.a2} checked={this.state.answer === this.props.question.a2} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a2}>{this.props.question.a2}</label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="answer" name="answer" value={this.props.question.a3} checked={this.state.answer === this.props.question.a3} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a3}>{this.props.question.a3}</label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="answer" name="answer" value={this.props.question.a4} checked={this.state.answer === this.props.question.a4} onChange={this.onChangeAnswer}/>
                            <label for={this.props.question.a4}>{this.props.question.a4}</label>
                        </div>
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        className="form-submit"
                        value="Answer"
                        required
                        />
                </form>
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