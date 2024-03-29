import React, { Component } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import Config from '../Config';
//import PropTypes from 'prop-types';

class Admin extends Component {
    state = {
        loggedIn: false,
        token: Config.token,
        server_ip: Config.server_ip,
        res_questions: '',
        res_answered: '',
        res_prizes: ''
    };

    componentDidMount() {
        axios.get(this.state.server_ip + "admin", {params: {token: this.state.token}})
            .then(res => this.setState({res_questions: res.data.questions, res_answered: res.data.answered, res_prizes: res.data.prizes}));
    }

    updateState = () => {
        axios.get(this.state.server_ip + "admin", {params: {token: this.state.token}})
            .then(res => this.setState({res_questions: res.data.questions, res_answered: res.data.answered, res_prizes: res.data.prizes}));
    }
    login = (email, password) => {
        axios.post(this.state.server_ip + "validate_admin", {email: email, password: password, token: this.state.token})
            .then(res => {
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
            component = <AdminPage questions={this.state.res_questions} answered={this.state.res_answered} prizes={this.state.res_prizes} updateState={this.updateState}/>
        } else {
            component = <AdminLogin loginFunction={this.login}/>
        }
        return (
            <div className="container">
                {component}
            </div>
        );
        
    }
}

export default Admin;