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
        axios.post("http://192.46.233.86:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, token: this.state.token})
            .then(res => {
                console.log(res);
            });
    }

    onEditQuestion = (question) => {
        this.setState({
            editComponent: <EditQuestion question={question} editQuestion={this.editQuestion} onClose={this.onCloseEditQuestion} />,
        });
    }

    editQuestion = (question, difficulty, correct_answer, a2, a3, a4, id) => {
        this.setState({
            editComponent: '',
        });
        axios.put("http://192.46.233.86:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, id, token: this.state.token})
            .then(res => console.log(res));
        console.log("Qustion edit");
    }

    onDeleteQuestion = (question_id) => {
        axios.delete("http://192.46.233.86:5000/admin", {params: {id: question_id, token: this.state.token}})
            .then(res => console.log(res));
    }

    onCloseEditQuestion = () => {
        this.setState({
            editComponent: '',
        });
    }

    render() {
        return (
            <div className="admin-page">
                {this.state.editComponent}
                <h1>{this.state.errorMessage}</h1>
                <CreateQuestion createQuestion={this.addQuestion} />
                <div className="admin-page-questions">
                    <h1>Questions</h1>
                    <AdminPageQuestions questions={this.props.questions} onEdit={this.onEditQuestion} onDelete={this.onDeleteQuestion}/>
                </div>
            </div>
        );
    }
}

AdminPage.propTypes = {
    questions: PropTypes.array.isRequired,
}

export default AdminPage;