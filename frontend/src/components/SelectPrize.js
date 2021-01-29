import React, { Component} from 'react';
import PropTypes from 'prop-types';

class SelectPrize extends Component {
    state = {
        information: '',
    }

    onChangeInformation = (e) => this.setState({ information: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.prize.name, this.state.information);
        this.setState({information: '',});
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="form">
                <h2>{this.props.prize.name}</h2>
                <p>{this.props.prize.description}</p>
                <textarea type="text" placeholder="Sem napiste veskere poznamky jako idealni termin a adresi" className="answer-text-input" value={this.state.information} onChange={this.onChangeInformation}/>
                <input type="submit" value="Odoslat" className="form-submit"/>
            </form>
        );
    }
}

SelectPrize.propTypes = {
    prize: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SelectPrize;