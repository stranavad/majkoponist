import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPrize extends Component {
    state = {
        prize_name: '',
        prize_information: '',
        prize_image: '',
    }

    componentDidMount() {
        this.setState({
            prize_name: this.props.prize.prize_name,
            prize_information: this.props.prize.prize_information,
            prize_image: this.props.prize.prize_image,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editPrize(this.state.prize_name, this.state.prize_information, this.state.prize_image, this.props.prize.id);
        this.setState({
            prize_name: '',
            prize_information: '',
            prize_image: '',
        });
    }
    
    onChangeValue = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return(
            <div className="container-overlay">
                <div className="close-button" onClick={this.props.onClose}>
                    <div className="close-button-line1"/>
                    <div className="close-button-line2"/>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    <h1>Upravit vyhru</h1>
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
                    <div className="input-line">
                            <input
                            type="text"
                            name="prize_image"
                            className="text-input"
                            placeholder="Obrazek vyhry"
                            value={this.state.prize_image}
                            onChange={this.onChangeValue}
                            required
                            />
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        className="medium-button"
                        value="Upravit"
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