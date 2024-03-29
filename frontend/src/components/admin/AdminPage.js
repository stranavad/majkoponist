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
        server_ip: Config.server_ip,
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
        axios.post(this.state.server_ip + "admin", {question, difficulty, correct_answer, a2, a3, a4, token: this.state.token});
        //this.props.updateState();
    }

    addPrize = (name, information, image) => {
        axios.put(this.state.server_ip + "prizes", {name, information, image, token: this.state.token});
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
        axios.put(this.state.server_ip + "admin", {question, difficulty, correct_answer, a2, a3, a4, id, token: this.state.token});
        //this.props.updateState();
    }

    onEditPrize = (prize) => {
        this.setState({
            editComponent: <EditPrize prize={prize} editPrize={this.editPrize} onClose={this.onCloseEdit} />,
        });
    }

    editPrize = (name, information, image, id) => {
        this.setState({
            editComponent: '',
        });
        axios.patch(this.state.server_ip + "prizes", {name, information, image,  id, token: this.state.token}).then((res) => console.log(res));
        //this.props.updateState();
    }

    onDeletePrize = (prize_id) => {
        axios.delete(this.state.server_ip + "prizes", {params: {id: prize_id, token: this.state.token}});
        //this.props.updateState();
    }

    onDeleteQuestion = (question_id) => {
        axios.delete(this.state.server_ip + "admin", {params: {id: question_id, token: this.state.token}});
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
                    <button onClick={this.showQuestions} className="medium-button">Otazky v kvizu</button>
                    <button onClick={this.showResults} className="medium-button">Vysledky uzivatelu</button>
                    <button onClick={this.showPrizes} className="medium-button">Vyhry</button>
                    <button onClick={this.showCreateQuestion} className="medium-button">Vytvorit otazku</button>
                    <button onClick={this.showCreatePrize} className="medium-button">Vytvorit vyhru</button>
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