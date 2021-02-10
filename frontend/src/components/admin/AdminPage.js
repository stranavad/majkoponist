import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AdminPageQuestions from './AdminPageQuestions';
import CreateQuestion from './CreateQuestion';
import EditQuestion from './EditQuestion';
import DisplayResults from './DisplayResults';
import ShowResult from './ShowResult';
import CreatePrize from './CreatePrize';
import DisplayPrizes from './DisplayPrizes';
import EditPrize from './EditPrize';
import Config from '../Config'

class AdminPage extends Component {
    state = {
        errorMessage: '',
        token: Config.token,
        editComponent: '',
        showResult: false,
        showResultComponent: '',
        showResults: false,
        showPrizes: false,
        showQuestions: true,
        showCreateQuestion: false,
        showCreatePrize: false,
    }
    addQuestion = (question, difficulty, correct_answer, a2, a3, a4) => {
        axios.post("http://192.46.233.86:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, token: this.state.token});
        //this.props.updateState();
    }

    addPrize = (name, information) => {
        axios.put("http://192.46.233.86:5000/prizes", {name, information, token: this.state.token});
        //this.props.updateState();
    }

    onEditQuestion = (question) => {
        this.setState({
            editComponent: <EditQuestion question={question} editQuestion={this.editQuestion} onClose={this.onCloseEdit} />,
        });
    }

    editQuestion = (question, difficulty, correct_answer, a2, a3, a4, id) => {
        this.setState({
            editComponent: '',
        });
        axios.put("http://192.46.233.86:5000/admin", {question, difficulty, correct_answer, a2, a3, a4, id, token: this.state.token});
        //this.props.updateState();
    }

    onEditPrize = (prize) => {
        this.setState({
            editComponent: <EditPrize prize={prize} editPrize={this.editPrize} onClose={this.onCloseEdit} />,
        });
    }

    editPrize = (name, information, id) => {
        this.setState({
            editComponent: '',
        });
        axios.patch("http://192.46.233.86:5000/prizes", {name, information, id: id, token: this.state.token}).then((res) => console.log(res));
        //this.props.updateState();
    }

    onDeletePrize = (prize_id) => {
        axios.delete("http://192.46.233.86:5000/prizes", {params: {id: prize_id, token: this.state.token}});
        //this.props.updateState();
    }

    onDeleteQuestion = (question_id) => {
        axios.delete("http://192.46.233.86:5000/admin", {params: {id: question_id, token: this.state.token}});
        //this.props.updateState();
    }

    onCloseEdit = () => {
        this.setState({
            editComponent: '',
        });
    }

    showResult = (answered) => {
        this.setState({
            showResult: true,
            showResultComponent: <ShowResult answered={answered} onClose={this.onClose} />,
        });
    }

    onClose = () => {
        this.setState({showResult: false});
    }

    showResults = () => {
        this.setState({
            showResults: true,
            showPrizes: false,
            showQuestions: false,
            showResult: false,
            showCreateQuestion: false,
            showCreatePrize: false,
        });
    }

    showQuestions = () => {
        this.setState({
            showResults: false,
            showPrizes: false,
            showQuestions: true,
            showResult: false,
            showCreateQuestion: false,
            showCreatePrize: false,
        });
    }

    showPrizes = () => {
        this.setState({
            showResults: false,
            showPrizes: true,
            showQuestions: false,
            showResult: false,
            showCreateQuestion: false,
            showCreatePrize: false,
        });
    }

    showCreateQuestion = () => {
        this.setState({
            showResults: false,
            showPrizes: false,
            showQuestions: false,
            showResult: false,
            showCreateQuestion: true,
            showCreatePrize: false,
        });
    }

    showCreatePrize = () => {
        this.setState({
            showResults: false,
            showPrizes: false,
            showQuestions: false,
            showResult: false,
            showCreateQuestion: false,
            showCreatePrize: true,
        });
    }

    render() {
        let component;
        if (this.state.showResult) {
            component = this.state.showResultComponent;
        } else if (this.state.showResults) {
            component = <DisplayResults answered={this.props.answered} showResult={this.showResult}/>;
        } else if (this.state.showPrizes) {
            component = <DisplayPrizes prizes={this.props.prizes} onEdit={this.onEditPrize} onDelete={this.onDeletePrize}/>;
        } else if (this.state.showQuestions) {
            component = <AdminPageQuestions questions={this.props.questions} onEdit={this.onEditQuestion} onDelete={this.onDeleteQuestion}/>;
        } else if (this.state.showCreateQuestion){
            component = <CreateQuestion createQuestion={this.addQuestion} />;
        } else if (this.state.showCreatePrize) {
            component = <CreatePrize createPrize={this.addPrize} />;
        } else {
            component = <h1>Everything is fucked up and IT DOESN'T WORK</h1>
        }
        return (
            <div className="container">
                <div className="admin-page-menu">
                    <button onClick={this.showQuestions} className="medium-button">Show Questions</button>
                    <button onClick={this.showResults} className="medium-button">Show Results</button>
                    <button onClick={this.showPrizes} className="medium-button">Show Prizes</button>
                    <button onClick={this.showCreateQuestion} className="medium-button">Create Question</button>
                    <button onClick={this.showCreatePrize} className="medium-button">Create Prize</button>
                </div>
                <div className="component">{component}</div>
                {this.state.editComponent}
            </div>
        );
    }
}

AdminPage.propTypes = {
    questions: PropTypes.array.isRequired,
    answered: PropTypes.array.isRequired,
    prizes: PropTypes.array.isRequired,
    updateState: PropTypes.func.isRequired
}

export default AdminPage;