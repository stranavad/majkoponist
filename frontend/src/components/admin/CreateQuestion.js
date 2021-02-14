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
    
    onChangeValue = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeQuestion = (e) => {
        let value;
        value = e.target.value.replace(/"/g, "'")
        this.setState({ [e.target.name]: value});
    }
    render() {
        return(
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    <h1 className="medium-heading">Vytvorit otazku</h1>
                    <div className="input-line">
                        <textarea
                        type="text"
                        name="question"
                        className="text-input"
                        placeholder="Otazka"
                        value={this.state.question}
                        onChange={this.onChangeQuestion}
                        required
                        />
                    </div>
                    <h3 className="small-heading">Obtiznost</h3>
                    <div className="radios">
                        <div className="radio-group">
                            <input 
                            className="radio" 
                            type="radio" 
                            id="1" 
                            name="difficulty" 
                            value="1" 
                            onChange={this.onChangeValue}/>
                            <label for="1">1</label>
                        </div>
                        <div className="radio-group">
                            <input 
                            className="radio" 
                            type="radio" 
                            id="2" 
                            name="difficulty" 
                            value="2" 
                            onChange={this.onChangeValue}/>
                            <label for="2">2</label>
                        </div>
                        <div className="radio-group">
                            <input 
                            className="radio" 
                            type="radio" 
                            id="3" 
                            name="difficulty" 
                            value="3"
                            onChange={this.onChangeValue}
                            />
                            <label for="3">3</label>
                        </div>
                    </div>
                    <div className="answers">
                        <textarea type="text" placeholder="Spravna odpoved" className="textarea-half" id="correct_answer" name="correct_answer" value={this.state.correct_answer} onChange={this.onChangeAnswer}/>
                        <textarea type="text" placeholder="Odpoved 2" className="textarea-half" id="a2" name="a2" value={this.state.a2} onChange={this.onChangeValue}/>
                        <textarea type="text" placeholder="Odpoved 3" className="textarea-half" id="a3" name="a3" value={this.state.a3} onChange={this.onChangeValue}/>
                        <textarea type="text" placeholder="Odpoved 4" className="textarea-half" id="a4" name="a4" value={this.state.a4} onChange={this.onChangeValue}/>
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        className="medium-button"
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