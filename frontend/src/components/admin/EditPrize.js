import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPrize extends Component {
    state = {
        prize_name: '',
        prize_information: '',
    }

    componentDidMount() {
        let prize = this.props.prize;
        this.setState({
            prize_name: prize.prize_name,
            prize_information: prize.prize_information
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editPrize(this.state.prize_name, this.state.prize_information, this.props.prize.id);
        this.setState({
            prize_name: '',
            prize_information: ''
        });
    }
    
    onChangePrize = (e) => this.setState({ [e.target.name]: e.target.value});
    onChangeInformation = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="container-overlay">
                <div className="close-button" onClick={this.props.onClose}>
                    <div className="close-button-line1"/>
                    <div className="close-button-line2"/>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    <h1>Edit Prize</h1>
                    <div className="input-line">
                            <input
                            type="text"
                            name="prize_name"
                            className="text-input"
                            placeholder="Jmeno vyhry"
                            value={this.state.prize_name}
                            onChange={this.onChangePrize}
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
                        onChange={this.onChangeInformation}
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

EditPrize.propTypes = {
    editPrize: PropTypes.func.isRequired,
    prize: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default EditPrize;