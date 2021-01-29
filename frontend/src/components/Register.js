import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import Questions from './Questions';
import ShowResult from './ShowResult';
//import PropTypes from 'prop-types';

class Register extends Component {
    state = {
        token: 'ts9pFkGuXKgcmo43Mmj0^eG%iiR3m',
        res_answers: '',
        res_average: '',
        register_form: true,
        show_error_text: false,
        error_text: '',
        show_result: false,
        user: '',
        show_result_component: '',
        tries: 0,
    };

    componentDidMount() {
        axios.get("http://192.46.233.86:5000/questions", {params: {token: this.state.token}})
            .then(res => {
                this.setState({res: res.data.questions});
            });
    }

    registerFunction = (email, first_name, last_name, phone) => {
        axios.post("http://192.46.233.86:5000/users", {user_email: email, first_name: first_name, last_name: last_name, user_phone_number: phone, token: this.state.token})
            .then((res) => {
                if (res.data.message === "This email already exist") {
                    this.setState({
                        show_error_text: true,
                        error_text: "This email already exists"
                    });
                    window.location.replace("/email_exists")
                } else {
                    console.log("Registering")
                    this.setState({
                        register_form: false,
                        user: res.data
                    });
                }
            });
    }

    showResult = (questions_answered) => {
        console.log("Show Result");
        console.log(questions_answered);
        axios.post("http://192.46.233.86:5000/questions", {answers: questions_answered, token: this.state.token})
            .then(res => {
                console.log(res.data);
                this.setState({show_result_component: <ShowResult user={this.state.user} winner={res.data.winner} questions={res.data.scheme} average={res.data.average} playAgain={this.playAgain} tries={this.state.tries} />});
                this.setState({showResult: true});
            });
    }

    playAgain = () => {
        axios.get("http://192.46.233.86:5000/questions", {params: {token: this.state.token}})
            .then(res => {
                this.setState({res: res.data.questions, tries: this.state.tries + 1, register_form: false, showResult: false});
            });
    }


    render() {
        let component_to_show;
        if (this.state.register_form === true) {
            component_to_show = <RegisterForm registerFunction={this.registerFunction}/>;
        } else if (this.state.showResult === true) {
            console.log(this.state.res_answers)
            component_to_show = this.state.show_result_component;
        } else {
            component_to_show = <Questions questions={this.state.res} showResult={this.showResult}/>;
        }
        return (
            <div className="full-size">
                {component_to_show}
            </div>
        );
        
    }
}

export default Register;