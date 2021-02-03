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
                <form className="form" onSubmit={this.onSubmit}>
                    <h1 className="medium-heading">{this.props.question.question}</h1>
                    <text className="medium-text">Obtiznost {this.props.question.difficulty}</text>
                    <text className="medium-text">Zbyvajici cas {this.props.time_left}/30</text>
                    <text className="medium-text">Otazka {this.props.question_number} z 21</text>
                    <div className="horizontal-container">
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
                    </div>
                    <div className="container-flex-end">
                        <input
                            type="submit"
                            name="submit"
                            className="medium-button"
                            value="Answer"
                            required
                        />
                    </div>
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