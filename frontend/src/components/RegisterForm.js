import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div className="columns-container">
                <div className="column-container">
                    <h1 className="medium-heading">Pravidla a postup hry</h1>
                    <ul className="rules-list">
                        <li>Kvíz obsahuje 20 otázek, 5 otázek z každé obtížnosti. Na každou otázku máte 15s</li>
                        <li>Po zodpovězení otázek se vám zobrazí váš výsledek a správné odpovědi</li>
                        <li>Pokud odpovíte správně na více než 90% otázek, budete si moc vybrat vaší výhru</li>
                        <li>Další pravidlo</li>
                        <li>Další pravidlo</li>
                        <li>Další pravidlo</li>
                        <li>Další pravidlo</li>
                    </ul>
                </div>
                <div className="column-container">
                    <h1 className="medium-heading">Registrace</h1>
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="input-line">
                            <input
                            type="email"
                            name="email"
                            className="text-input"
                            placeholder="Váš Email"
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
                            placeholder="Křestní jméno"
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
                            placeholder="Příjmení"
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
                            placeholder="Vaše telefoné číslo"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            required
                            />
                        </div>
                        <div className="input-line">
                            <input
                            type="submit"
                            name="submit"
                            className="medium-button"
                            value="Hrát"
                            required
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    registerFunction: PropTypes.func.isRequired,
}

export default RegisterForm