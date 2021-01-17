import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AdminPageQuestions from './AdminPageQuestions';
import CreateQuestion from './CreateQuestion';
import EditQuestion from './EditQuestion';

class AdminPage extends Component {
    state = {
        errorMessage: '',
        token: 'ts9pFkGuXKgcmo43Mmj0^eG%iiR3m',
        editComponent: '',
    }
    addQuestion = (question, difficulty, correct_answer, a2, a3, a4) => {
        axios.post("http://localhost:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, token: this.state.token})
            .then(res => {
                console.log(res);
            });
    }

    onEditQuestion = (question) => {
        this.setState({
            editComponent: <EditQuestion question={question} editQuestion={this.editQuestion}/>,
        });
    }

    editQuestion = (question, difficulty, correct_answer, a2, a3, a4, id) => {
        this.setState({
            editComponent: '',
        });
        axios.put("http://localhost:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, id, token: this.state.token})
            .then(res => console.log(res));
        console.log("Qustion edit");
    }

    onDeleteQuestion = (question_id) => {
        console.log(question_id);
    }

    render() {
        return (
            <div className="admin-page">
                {this.state.editComponent}
                <h1>{this.state.errorMessage}</h1>
                <h1>Create Question</h1>
                <CreateQuestion createQuestion={this.addQuestion} />
                <h1>Questions</h1>
                <AdminPageQuestions questions={this.props.questions} onEdit={this.onEditQuestion} onDelete={this.onDeleteQuestion}/>
            </div>
        );
    }
}

AdminPage.propTypes = {
    questions: PropTypes.array.isRequired,
}

export default AdminPage;