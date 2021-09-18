import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowQuestion extends Component {
    constructor(props) {
        super(props);
        state = {
            user_answer: ""
        }
    }

    componentDidMount() {
        if (this.props.question.user_answer === ''){
            this.setState({user_answer: "Ziadna odpoved"});
        } else {
            this.setState({user_answer: this.props.question.user_answer})
        }
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

        let correct;
        if(this.props.question.correct === "Ano") {
            correct = "Správne";
        } else {
            correct = "Nesprávne";
        }

        return(
            <div className="show-result-question">
                <h2 className="show-result-question-heading">{this.props.question.question}</h2>
                <p className="small-text">Kategória otázky: {questionCategory}</p>
                <p className="small-text">Vaša odpoveď: {this.state.user_answer}</p>
                <p className="small-text">Správna odpoveď: {this.props.question.correct_answer}</p>
                <p className="small-text">Vyhodnotenie: {correct}</p>
            </div>
        );
    }
}

ShowQuestion.propTypes = {
    questions: PropTypes.object,
}

export default ShowQuestion