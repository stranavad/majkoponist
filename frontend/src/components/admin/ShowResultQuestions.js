import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowResultQuestion from './ShowResultQuestion';

class ShowResultQuestions extends Component {
    render() {
        return this.props.questions.map((question) => (
            <ShowResultQuestion question={question} key={question.question}/>
        ));
    }
}

ShowResultQuestions.propTypes = {
    questions: PropTypes.array.isRequired,
};

export default ShowResultQuestions;