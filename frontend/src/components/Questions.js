import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Question from './Question';

class Questions extends Component {
    constructor() {
        super();
        this.state = {display_question: false, question_number: -1, seconds: 10, seconds_to_set: 10, current_question: {question: '', id: '', a1: '', a2: '', a3: '', a4: '', difficulty: ''}, questions: '', answeredQuestions: [],};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.setQuestion = this.setQuestion.bind(this);
      }
      componentDidMount() {
        this.setState({questions: this.props.questions});
      }

      setQuestion() {
        if(this.state.question_number == 19) {
          clearInterval(this.timer);
          let quest_number = this.question_number + 1;
          this.setState({display_question: false, question_number: quest_number});
          this.props.showResult(this.state.answeredQuestions);
          console.log("Questions were answered");
        } else if (this.state.question_number < 19) {
          this.setState({
            question_number: this.state.question_number + 1,
            display_question: true,
          });
        }
      }
    
      startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.setQuestion();
          this.timer = setInterval(this.countDown, 1000);
        }
        else if (this.state.seconds == 0) {
          this.setQuestion();
          this.setState({
            seconds: this.state.seconds_to_set,
            timer: 0,
          });
          this.timer = setInterval(this.countDown, 1000);
        }
      }

      answerQuestion(question_id, question_answer) {
          this.setState({
              seconds: 0,
          });
          let answeredQuestions_list = this.state.answeredQuestions;
          console.log(answeredQuestions_list);
          this.setState(state => {
            const answeredQuestions = state.answeredQuestions.concat({"id": question_id, "answer": question_answer});
            return {
              answeredQuestions,
              //value: '',
            };
          });
          console.log("Question was answered");
          console.log(this.state.answeredQuestions);
          this.startTimer();
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        if (this.state.seconds <= 0) {
            this.startTimer();
            clearInterval(this.timer);
        } else {
            let seconds = this.state.seconds - 1;
            this.setState({
              seconds: seconds,
            });
            // Check if we're at zero.
            if (seconds <= 0) {
              this.setState(state => {
                const answeredQuestions = state.answeredQuestions.concat({id: this.state.questions[this.state.question_number].id, asnwer: ''});
                return {
                  answeredQuestions,
                };
              });
              this.startTimer();
              clearInterval(this.timer);
            }
        }
      }
    render() {
      let component;
      if (this.state.display_question) {
        component = <Question question={this.state.questions[this.state.question_number]} onSubmit={this.answerQuestion}/>
      }
      return (
        <div className="centerbox">
          <button onClick={this.startTimer}>Start</button>
          s: {this.state.seconds}
          {component}
        </div>
      );
    }
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
    showResult: PropTypes.func.isRequired,
}

export default Questions