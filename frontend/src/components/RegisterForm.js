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
    
    onChangeValue = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="columns-container">
                <div className="column-container">
                    <h1 className="medium-heading">Pravidlá a postup hry</h1>
                    <ul className="rules-list">
                        <li>Zaregistrujte sa.</li>
                        <li>Po registrácii dostanete 21 otázok a 4 možnosti na odpoveď. Na každú z nich máte stanovený časový limit 30 sekúnd.</li>
                        <li>Po skončení kvízu sa zobrazí váš výsledok, všetky položené otázky aj správne odpovede.</li>
                        <li>Ak bude vaša úspešnosť vyššia ako 80% máte možnosť výberu z troch vecných cien.</li>
                        <li>Pri 100% bilancii získate víkendový pobyt v dome Hany Hegerovej www.aprtmanyhana.sk.</li>
                        <li>Ak váš výsledok bude nižší ako 80% nezúfajte. Dozvedeli ste sa predsa veľa nového o Vašej obľúbenej speváčke a dáme Vám ako bonus ešte 3 opravné pokusy.</li>
                        <li>Príjemnú zábavu.</li>
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
                            onChange={this.onChangeValue}
                            required
                            />
                        </div>
                        <div className="input-line">
                            <input
                            type="text"
                            name="first_name"
                            className="text-input"
                            placeholder="Krstné meno"
                            value={this.state.first_name}
                            onChange={this.onChangeValue}
                            required
                            />
                        </div>
                        <div className="input-line">
                            <input
                            type="text"
                            name="last_name"
                            className="text-input"
                            placeholder="Priezvisko"
                            value={this.state.last_name}
                            onChange={this.onChangeValue}
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
                            onChange={this.onChangeValue}
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