import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowQuestions from './ShowQuestions';
import Prizes from './Prizes';
import axios from 'axios';
import SelectPrize from './SelectPrize';

class ShowResult extends Component {
    state = {
        component_main: '',
        show_prizes: false,
        api_token: 'ts9pFkGuXKgcmo43Mmj0^eG%iiR3m',
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

    onSubmitPrize = (name, info) => {
        axios.post("http://localhost:5000/prizes", {
            token: this.state.api_token,
            prize_name: name,
            email: this.props.user.email,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            information: info,
            average: this.props.average,
            answers: this.props.questions,
            phone_number: this.props.user.phone_number,
        }).then((res) => console.log(res.data));
    }

    componentDidMount() {
        if (this.props.winner === "true") {
            axios.get("http://localhost:5000/prizes", {params: {token: this.state.api_token}})
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
                component_main =  <Prizes onSelect={this.onSelectPrize} prizes={this.state.prizes}/>;
            } else {
                component_main = <ShowQuestions questions={this.props.questions}/>
                if (this.props.winner === "true") {
                    component = <button onClick={this.showPrizes} className="large-button">Zobrazit vyhry</button>
                } else if (this.props.tries <= 2) {
                    component = <button onClick={this.props.playAgain} className="large-button">Hrat jeste raz</button>
                } else {
                    component = <h2 className="error-text">You don't have any attempt left</h2>
                }
            }
        }
        return(
            <div>
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
    winner: PropTypes.string.isRequired,
    playAgain: PropTypes.func.isRequired,
    tries: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

export default ShowResult;