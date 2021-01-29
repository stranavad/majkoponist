import React, { Component } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
//import PropTypes from 'prop-types';

class Admin extends Component {
    state = {
        loggedIn: false,
        token: 'ts9pFkGuXKgcmo43Mmj0^eG%iiR3m',
        res: '',
    };

    componentDidMount() {
        axios.get("http://localhost:5000/admin", {params: {token: this.state.token}})
            .then(res => this.setState({res: res.data.questions}));
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
            component = <AdminPage questions={this.state.res}/>
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