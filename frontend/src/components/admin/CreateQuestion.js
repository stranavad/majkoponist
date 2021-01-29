import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateQuestion extends Component {
    state = {
        question: '',
        difficulty: 1,
        correct_answer: '',
        a2: '',
        a3: '',
        a4: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createQuestion(this.state.question, this.state.difficulty, this.state.correct_answer, this.state.a2, this.state.a3, this.state.a4);
        this.setState({
            question: '',
            difficulty: 1,
            correct_answer: '',
            a2: '',
            a3: '',
            a4: ''
        });
    }
    
    onChangeAnswer = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeDifficulty = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeQuestion = (e) => {
        let value;
        value = e.target.value.replace(/"/g, "'")
        this.setState({ [e.target.name]: value});
    }
    render() {
        return(
            <div className="full-size">
                <form className="question-form" onSubmit={this.onSubmit}>
                    <h1>Create Question</h1>
                    <div className="input-line">
                        <textarea
                        type="text"
                        name="question"
                        className="text-input"
                        placeholder="Question"
                        value={this.state.question}
                        onChange={this.onChangeQuestion}
                        required
                        />
                    </div>
                    <h3>Difficulty</h3>
                    <div className="radios">
                        <div className="radio-group">
                            <input type="radio" id="1" name="difficulty" value="1" onChange={this.onChangeDifficulty}/>
                            <label for="1">1</label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="2" name="difficulty" value="2" onChange={this.onChangeDifficulty}/>
                            <label for="2">2</label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="3" name="difficulty" value="3" onChange={this.onChangeDifficulty}/>
                            <label for="3">3</label>
                        </div>
                    </div>
                    <div className="answers">
                        <textarea type="text" placeholder="Correct answer" className="answer-text-input" id="correct_answer" name="correct_answer" value={this.state.correct_answer} onChange={this.onChangeAnswer}/>
                        <textarea type="text" placeholder="Answer 2" className="answer-text-input" id="a2" name="a2" value={this.state.a2} onChange={this.onChangeAnswer}/>
                        <textarea type="text" placeholder="Answer 3" className="answer-text-input" id="a3" name="a3" value={this.state.a3} onChange={this.onChangeAnswer}/>
                        <textarea type="text" placeholder="Answer 4" className="answer-text-input" id="a4" name="a4" value={this.state.a4} onChange={this.onChangeAnswer}/>
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

CreateQuestion.propTypes = {
    createQuestion: PropTypes.func.isRequired,
}

export default CreateQuestion;