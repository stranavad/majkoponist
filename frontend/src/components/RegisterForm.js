import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class RegisterForm extends Component {
    state = {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.registerFunction(this.state.email, this.state.first_name, this.state.last_name, this.state.phone);
        this.setState({
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
        });
    }
    
    onChangeEmail = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeFirstName = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeLastName = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangePhone = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="centerbox">
                <h1>
                    Register Form
                </h1>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="input-line">
                        <input
                        type="email"
                        name="email"
                        className="text-input"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required
                        />
                    </div>
                    <div className="input-line">
                        <input
                        type="text"
                        name="first_name"
                        className="text-input"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}
                        required
                        />
                    </div>
                    <div className="input-line">
                        <input
                        type="text"
                        name="last_name"
                        className="text-input"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        required
                        />
                    </div>
                    <div className="input-line">
                        <input
                        type="text"
                        name="phone"
                        className="text-input"
                        placeholder="Your phone number"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        required
                        />
                    </div>
                    <div className="input-line">
                        <input
                        type="submit"
                        name="submit"
                        className="form-submit"
                        value="Register"
                        required
                        />
                    </div>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    registerFunction: PropTypes.func.isRequired,
}

export default RegisterForm