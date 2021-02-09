import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreatePrize extends Component {
    state = {
        prize_name: '',
        prize_information: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createPrize(this.state.prize_name, this.state.prize_information);
        this.setState({
            prize_name: '',
            prize_information: '',
        });
    }
    
    onChangeValue = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    <h1 className="medium-heading">Create Prize</h1>
                    <div className="input-line">
                            <input
                            type="text"
                            name="prize_name"
                            className="text-input"
                            placeholder="Jmeno vyhry"
                            value={this.state.prize_name}
                            onChange={this.onChangeValue}
                            required
                            />
                    </div>
                    <div className="input-line">
                        <textarea
                        type="text"
                        name="prize_information"
                        className="text-input"
                        placeholder="Popis vyhry"
                        value={this.state.prize_information}
                        onChange={this.onChangeValue}
                        required
                        />
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        className="medium-button"
                        value="Pridat"
                        required
                    />
                </form>
            </div>
        );
    }
}

CreatePrize.propTypes = {
    createPrize: PropTypes.func.isRequired,
}

export default CreatePrize;