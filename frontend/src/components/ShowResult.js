import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowQuestion from './ShowQuestion';
import ShowQuestions from './ShowQuestions';

class ShowResult extends Component {
    render() {
        return(
            <div>
                <h1>Your result: {this.props.average} correct</h1>
                <ShowQuestions questions={this.props.questions}/>
            </div>
        );
    }
}

ShowResult.propTypes = {
    questions: PropTypes.array.isRequired,
    average: PropTypes.string.isRequired,
}

export default ShowResult