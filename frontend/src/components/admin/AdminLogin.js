import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminLogin extends Component {
    state = {
        email: '',
        password: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.loginFunction(this.state.email, this.state.password);
        this.setState({
            email: '',
            password: ''
        });
    }
    
    onChangeEmail = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangePassword = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="container-center">
                <h1 className="medium-heading">Login</h1>
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
                        type="password"
                        name="password"
                        className="text-input"
                        placeholder="Heslo"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                        />
                    </div>
                    <div className="input-line">
                        <input
                        type="submit"
                        name="submit"
                        className="medium-button"
                        value="Prihlasit"
                        required
                        />
                    </div>
                </form>
            </div>
        );
    }
}

AdminLogin.propTypes = {
    loginFunction: PropTypes.func.isRequired,
}

export default AdminLogin;