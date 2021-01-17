import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminPageQuestion from './AdminPageQuestion';

class AdminPageQuestions extends Component {
    render() {
        return this.props.questions.map((question) => (
            <AdminPageQuestion question={question} key={question.id} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
        ));
    }
}

AdminPageQuestions.propTypes = {
    questions: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default AdminPageQuestions;