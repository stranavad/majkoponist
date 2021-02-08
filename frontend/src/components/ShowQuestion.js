import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowQuestion extends Component {
    state = {
        user_answer: "",
    }

    componentDidMount() {
        if (this.props.question.user_answer === ''){
            this.setState({user_answer: "Ziadna odpoved"});
        } else {
            this.setState({user_answer: this.props.question.user_answer})
        }
    }

    render() {
        return(
            <div className="show-result-question">
                <p className="small-text">Obtiznost: {this.props.question.difficulty}</p>
                <h2 className="show-result-question-heading">{this.props.question.question}</h2>
                <p className="small-text">Vase odpoved: {this.state.user_answer}</p>
                <p className="small-text">Spravna odpoved: {this.props.question.correct_answer}</p>
                <p className="medium-text">Spravne: {this.props.question.correct}</p>
            </div>
        );
    }
}

ShowQuestion.propTypes = {
    questions: PropTypes.object,
}

export default ShowQuestion