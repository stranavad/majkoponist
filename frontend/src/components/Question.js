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
            <div className="question">
                <form className="question-form" onSubmit={this.onSubmit}>
                    <h2 className="question_heading">{this.props.question.question}</h2>
                    <h4 className="question_difficulty">{this.props.question.difficulty}</h4>
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
    onSubmit: PropTypes.func.isRequired
};

export default Question;