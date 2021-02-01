import React, { Component } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
//import PropTypes from 'prop-types';

class Admin extends Component {
    state = {
        loggedIn: false,
        token: 'ts9pFkGuXKgcmo43Mmj0^eG%iiR3m',
        res_questions: '',
        res_answered: '',
    };

    componentDidMount() {
        axios.get("http://localhost:5000/admin", {params: {token: this.state.token}})
            .then(res => this.setState({res_questions: res.data.questions, res_answered: res.data.answered}));
    }

    updateQuestions = () => {
        axios.get("http://localhost:5000/admin", {params: {token: this.state.token}})
            .then(res => this.setState({res: res.data.questions}));
    }

    login = (email, password) => {
        axios.post("http://localhost:5000/validate_admin", {email: email, password: password, token: this.state.token})
            .then(res => {
                console.log(res);
                if (res.data.message === "login approved") {
                    this.setState({loggedIn: true});
                } else {
                    window.location.replace("/admin_wrong_credentials")
                }
            })
    }

    render() {
        let component;
        if (this.state.loggedIn){
            component = <AdminPage questions={this.state.res} answered={this.state.res_answered}/>
        } else {
            component = <AdminLogin loginFunction={this.login}/>
        }
        return (
            <div className="full-size">
                {component}
            </div>
        );
        
    }
}

export default Admin;