import React, { Component} from 'react';
import PropTypes from 'prop-types';

class SelectPrize extends Component {
    constructor(props) {
        super(props);
        state = {
          address: "",
        };
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeAddress = (e) => this.setState({ address: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.prize.name, this.state.address);
        this.setState({information: '',});
    }

    render() {
        return(
            <div className="question">
                <form onSubmit={this.onSubmit} className="form">
                    <h2 className="small-heading">{this.props.prize.name}</h2>
                    <p className="medium-text">{this.props.prize.description}</p>
                    <div className="vertical-space"></div>
                    <input type="text" placeholder="Adresa" className="text-input" value={this.state.address} onChange={this.onChangeAddress}/>
                    <input type="submit" value="Odoslat" className="medium-button"/>
                </form>
            </div>
        );
    }
}

SelectPrize.propTypes = {
    prize: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SelectPrize;