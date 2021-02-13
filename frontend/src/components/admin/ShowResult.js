import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowResultQuestions from './ShowResultQuestions';

class ShowResult extends Component {
    state = {
        questionsComponent: <ShowResultQuestions questions={this.props.answered.questions1}/>,
        score: this.props.answered.score.score1,
    }
    questions1 = () => {
        this.setState({
            questionsComponent: <ShowResultQuestions questions={this.props.answered.questions1}/>,
            score: this.props.answered.score.score1
        });
    }
    questions2 = () => {
        this.setState({
            questionsComponent: <ShowResultQuestions questions={this.props.answered.questions2}/>,
            score: this.props.answered.score.score2
        });
    }
    questions3 = () => {
        this.setState({
            questionsComponent: <ShowResultQuestions questions={this.props.answered.questions3}/>,
            score: this.props.answered.score.score3
        });
    }

    render() {
        return(
            <div className="container-overlay">
                <div className="close-button" onClick={this.props.onClose}>
                    <div className="close-button-line1"/>
                    <div className="close-button-line2"/>
                </div>
                <h1 className="medium-heading">{this.props.answered.name}</h1>
                <h3 className="small-heading">{this.props.answered.email}</h3>
                <h3 className="small-heading">{this.props.answered.phone_number}</h3>
                <div className="horizontal-container">
                    <button onClick={this.questions1} className="small-button">Questions 1</button>
                    <button onClick={this.questions2} className="small-button">Questions 2</button>
                    <button onClick={this.questions3} className="small-button">Questions 3</button>
                </div>
                <h2 className="small-heading">Skore: {this.state.score * 100}%</h2>
                {this.state.questionsComponent}
            </div>
        );
    }
}

ShowResult.propTypes = {
    answered: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ShowResult;