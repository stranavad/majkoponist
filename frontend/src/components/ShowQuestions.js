import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowQuestion from './ShowQuestion';

class ShowQuestions extends Component {
    render() {
        return this.props.questions.map((question) => (
            <ShowQuestion question={question} key={question.id}/>
        ));
    }
}

ShowQuestions.propTypes = {
    questions: PropTypes.array,
}

export default ShowQuestions