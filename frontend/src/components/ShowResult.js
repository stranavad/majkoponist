import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowQuestions from './ShowQuestions';
import axios from 'axios';
import SelectPrize from './SelectPrize';
import ShowPrizes from './ShowPrizes';
import Config from './Config';

class ShowResult extends Component {
    state = {
        component_main: '',
        show_prizes: false,
        token: Config.token,
        server_ip: Config.server_ip,
        prizes: '',
        select_prize: false,
        select_prize_id: '',
    };

    onSelectPrize = (prize) => {
        this.setState({
            select_prize_obj: prize,
            select_prize: true,
        });
    }

    showPrizes = () => {
        this.setState({
            show_prizes: true,
        });
    }

    onSubmitPrize = (name, address) => {
        axios.post(this.state.server_ip + "prizes", {
            token: this.state.token,
            prize_name: name,
            email: this.props.user.email,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            address: address,
            average: this.props.average,
            answers: this.props.questions,
            phone_number: this.props.user.phone_number,
        });
        this.props.afterPriceSelect();
    }

    componentDidMount() {
        if (this.props.winner === "true") {
            axios.get(this.state.server_ip + "prizes", {params: {token: this.state.token, average: this.props.average_raw}})
                .then((res) => {
                    this.setState({
                        prizes: res.data.prizes,
                    });
                })
        }
    }

    render() {
        let component;
        let component_main;
        if (this.state.select_prize === true){
            component_main = <SelectPrize prize={this.state.select_prize_obj} onSubmit={this.onSubmitPrize} />
        } else {
            if (this.state.show_prizes === true) {
                //component_main =  <Prizes onSelect={this.onSelectPrize} prizes={this.state.prizes}/>;
                component_main = <ShowPrizes prizes={this.state.prizes} onSelect={this.onSelectPrize}/>;
            } else {
                component_main = <ShowQuestions questions={this.props.questions}/>
                if (this.props.winner === "true") {
                    component = <button onClick={this.showPrizes} className="large-button">Zobrazit vyhry</button>
                } else if (this.props.tries <= 2) {
                    component = <button onClick={this.props.playAgain} className="large-button">Hrat jeste raz</button>
                } else {
                    component = <h2 className="error-text">Uz nemate dalsi pokusy na kviz</h2>
                }
            }
        }
        return(
            <div className="container">
                <h1 className="medium-heading">Vas vysledek: {this.props.average} spravne</h1>
                {component}
                {component_main}
            </div>
        );
    }
}

ShowResult.propTypes = {
    questions: PropTypes.array.isRequired,
    average: PropTypes.string.isRequired,
    average_raw: PropTypes.number.isRequired,
    winner: PropTypes.string.isRequired,
    playAgain: PropTypes.func.isRequired,
    tries: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    afterPriceSelect: PropTypes.func.isRequired,
}

export default ShowResult;