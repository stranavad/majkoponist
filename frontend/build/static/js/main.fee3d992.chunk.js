(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a),r=s(30),o=s.n(r),c=(s(38),s(2)),u=s(3),l=s(5),h=s(4),d=s(31),j=s(6),p=(s(39),s(9)),m=s.n(p),b=s(8),f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:"",first_name:"",last_name:"",phone:""},e.onSubmit=function(t){t.preventDefault(),e.props.registerFunction(e.state.email,e.state.first_name,e.state.last_name,e.state.phone),e.setState({email:"",first_name:"",last_name:"",phone:""})},e.onChangeEmail=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeFirstName=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeLastName=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangePhone=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"centerbox",children:[Object(n.jsx)("h1",{children:"Register Form"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,className:"form",children:[Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"email",name:"email",className:"text-input",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"first_name",className:"text-input",placeholder:"First Name",value:this.state.first_name,onChange:this.onChangeFirstName,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"last_name",className:"text-input",placeholder:"Last Name",value:this.state.last_name,onChange:this.onChangeLastName,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"phone",className:"text-input",placeholder:"Your phone number",value:this.state.phone,onChange:this.onChangePhone,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"submit",name:"submit",className:"form-submit",value:"Register",required:!0})})]})]})}}]),s}(a.Component),O=s(14),x=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={answer:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.props.question.id,e.state.answer),e.setState({answer:""})},e.onChangeAnswer=function(t){return e.setState({answer:t.target.value})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"question",children:Object(n.jsxs)("form",{className:"question-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h2",{className:"question_heading",children:this.props.question.question}),Object(n.jsx)("h4",{className:"question_difficulty",children:this.props.question.difficulty}),Object(n.jsxs)("div",{className:"radios",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"answer",name:"answer",value:this.props.question.a1,checked:this.state.answer===this.props.question.a1,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a1,children:this.props.question.a1})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"answer",name:"answer",value:this.props.question.a2,checked:this.state.answer===this.props.question.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a2,children:this.props.question.a2})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"answer",name:"answer",value:this.props.question.a3,checked:this.state.answer===this.props.question.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a3,children:this.props.question.a3})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"answer",name:"answer",value:this.props.question.a4,checked:this.state.answer===this.props.question.a4,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a4,children:this.props.question.a4})]})]}),Object(n.jsx)("input",{type:"submit",name:"submit",className:"form-submit",value:"Answer",required:!0})]})})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={display_question:!1,question_number:-1,seconds:10,seconds_to_set:10,current_question:{question:"",id:"",a1:"",a2:"",a3:"",a4:"",difficulty:""},questions:"",answeredQuestions:[]},e.timer=0,e.startTimer=e.startTimer.bind(Object(O.a)(e)),e.countDown=e.countDown.bind(Object(O.a)(e)),e.answerQuestion=e.answerQuestion.bind(Object(O.a)(e)),e.setQuestion=e.setQuestion.bind(Object(O.a)(e)),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.setState({questions:this.props.questions})}},{key:"setQuestion",value:function(){if(19==this.state.question_number){clearInterval(this.timer);var e=this.question_number+1;this.setState({display_question:!1,question_number:e}),this.props.showResult(this.state.answeredQuestions),console.log("Questions were answered")}else this.state.question_number<19&&this.setState({question_number:this.state.question_number+1,display_question:!0})}},{key:"startTimer",value:function(){0==this.timer&&this.state.seconds>0?(this.setQuestion(),this.timer=setInterval(this.countDown,1e3)):0==this.state.seconds&&(this.setQuestion(),this.setState({seconds:this.state.seconds_to_set,timer:0}),this.timer=setInterval(this.countDown,1e3))}},{key:"answerQuestion",value:function(e,t){this.setState({seconds:0});var s=this.state.answeredQuestions;console.log(s),this.setState((function(s){return{answeredQuestions:s.answeredQuestions.concat({id:e,answer:t})}})),console.log("Question was answered"),console.log(this.state.answeredQuestions),this.startTimer()}},{key:"countDown",value:function(){var e=this;if(this.state.seconds<=0)this.startTimer(),clearInterval(this.timer);else{var t=this.state.seconds-1;this.setState({seconds:t}),t<=0&&(this.setState((function(t){return{answeredQuestions:t.answeredQuestions.concat({id:e.state.questions[e.state.question_number].id,asnwer:""})}})),this.startTimer(),clearInterval(this.timer))}}},{key:"render",value:function(){var e;return this.state.display_question&&(e=Object(n.jsx)(x,{question:this.state.questions[this.state.question_number],onSubmit:this.answerQuestion})),Object(n.jsxs)("div",{className:"centerbox",children:[Object(n.jsx)("button",{onClick:this.startTimer,children:"Start"}),"s: ",this.state.seconds,e]})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("h2",{children:this.props.question.question}),Object(n.jsxs)("p",{children:["Difficulty: ",this.props.question.difficulty]}),Object(n.jsxs)("h4",{children:["Your answer: ",this.props.question.user_answer]}),Object(n.jsxs)("h4",{children:["Correct answer: ",this.props.question.correct_answer]}),Object(n.jsxs)("h4",{children:["Correct: ",this.props.question.correct]})]})}}]),s}(a.Component),w=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.questions.map((function(e){return Object(n.jsx)(v,{question:e},e.id)}))}}]),s}(a.Component),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:["Your result: ",this.props.average," correct"]}),Object(n.jsx)(w,{questions:this.props.questions})]})}}]),s}(a.Component),q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",res_answers:"",res_average:"",register_form:!0,show_error_text:!1,error_text:"",show_result:!1,user:"",show_result_component:""},e.registerFunction=function(t,s,n,a){m.a.post("http://192.46.233.86:5000/users",{user_email:t,first_name:s,last_name:n,user_phone_number:a,token:e.state.token}).then((function(t){"This email already exist"===t.data.message?(e.setState({show_error_text:!0,error_text:"This email already exists"}),window.location.replace("/email_exists")):(console.log("Registering"),e.setState({register_form:!1,user:t.data}))}))},e.showResult=function(t){console.log("Show Result"),console.log(t),m.a.post("http://192.46.233.86:5000/questions",{answers:t,token:e.state.token}).then((function(t){console.log(t.data),e.setState({show_result_component:Object(n.jsx)(y,{questions:t.data.scheme,average:t.data.average})}),e.setState({showResult:!0})}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://192.46.233.86:5000/questions",{params:{token:this.state.token}}).then((function(t){e.setState({res:t.data.questions})}))}},{key:"render",value:function(){var e;return!0===this.state.register_form?e=Object(n.jsx)(f,{registerFunction:this.registerFunction}):!0===this.state.showResult?(console.log(this.state.res_answers),e=this.state.show_result_component):e=Object(n.jsx)(g,{questions:this.state.res,showResult:this.showResult}),Object(n.jsx)("div",{className:"full-size",children:e})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"centerbox",children:[Object(n.jsx)("h1",{className:"heading",children:"Email alerady exists"}),Object(n.jsx)("a",{href:"/register",className:"link-button",children:"Register again"})]})}}]),s}(a.Component),N=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.onSubmit=function(t){t.preventDefault(),e.props.loginFunction(e.state.email,e.state.password),e.setState({email:"",password:""})},e.onChangeEmail=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangePassword=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"centerbox",children:[Object(n.jsx)("h1",{children:"Login form"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,className:"form",children:[Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"email",name:"email",className:"text-input",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"password",name:"password",className:"text-input",placeholder:"Password",value:this.state.password,onChange:this.onChangePassword,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"submit",name:"submit",className:"form-submit",value:"Register",required:!0})})]})]})}}]),s}(a.Component),_=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"admin-question",children:[Object(n.jsx)("h2",{children:this.props.question.question}),Object(n.jsxs)("h4",{children:["Difficulty: ",this.props.question.difficulty]}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Correct Answer: ",this.props.question.correct_answer]}),Object(n.jsxs)("li",{children:["Answer 2: ",this.props.question.a2]}),Object(n.jsxs)("li",{children:["Answer 3: ",this.props.question.a3]}),Object(n.jsxs)("li",{children:["Answer 4: ",this.props.question.a4]})]}),Object(n.jsx)("button",{className:"question-action-button",onClick:this.props.onEdit.bind(this,this.props.question),children:"Edit"}),Object(n.jsx)("button",{className:"question-action-button",onClick:this.props.onDelete.bind(this,this.props.question.id),children:"Delete"})]})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return this.props.questions.map((function(t){return Object(n.jsx)(_,{question:t,onEdit:e.props.onEdit,onDelete:e.props.onDelete},t.id)}))}}]),s}(a.Component),S=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""},e.onSubmit=function(t){t.preventDefault(),e.props.createQuestion(e.state.question,e.state.difficulty,e.state.correct_answer,e.state.a2,e.state.a3,e.state.a4),e.setState({question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""})},e.onChangeAnswer=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeQuestion=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeDifficulty=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"full-size",children:Object(n.jsxs)("form",{className:"question-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h1",{children:"Create Question"}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("textarea",{type:"text",name:"question",className:"text-input",placeholder:"Question",value:this.state.question,onChange:this.onChangeQuestion,required:!0})}),Object(n.jsx)("h3",{children:"Difficulty"}),Object(n.jsxs)("div",{className:"radios",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"1",name:"difficulty",value:"1",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"1",children:"1"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"2",name:"difficulty",value:"2",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"2",children:"2"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"3",name:"difficulty",value:"3",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"3",children:"3"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"4",name:"difficulty",value:"4",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"4",children:"4"})]})]}),Object(n.jsxs)("div",{className:"answers",children:[Object(n.jsx)("textarea",{type:"text",placeholder:"Correct answer",className:"answer-text-input",id:"correct_answer",name:"correct_answer",value:this.state.correct_answer,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 2",className:"answer-text-input",id:"a2",name:"a2",value:this.state.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 3",className:"answer-text-input",id:"a3",name:"a3",value:this.state.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 4",className:"answer-text-input",id:"a4",name:"a4",value:this.state.a4,onChange:this.onChangeAnswer})]}),Object(n.jsx)("input",{type:"submit",name:"submit",className:"form-submit",value:"Answer",required:!0})]})})}}]),s}(a.Component),Q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""},e.onSubmit=function(t){t.preventDefault(),e.props.editQuestion(e.state.question,e.state.difficulty,e.state.correct_answer,e.state.a2,e.state.a3,e.state.a4,e.props.question.id),e.setState({question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""})},e.onChangeAnswer=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeQuestion=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onChangeDifficulty=function(t){return e.setState(Object(b.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.question;this.setState({question:e.question,difficulty:e.difficulty,correct_answer:e.correct_answer,a2:e.a2,a3:e.a3,a4:e.a4})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"edit-question",children:[Object(n.jsxs)("div",{className:"close-button",onClick:this.props.onClose,children:[Object(n.jsx)("div",{className:"close-button-line1"}),Object(n.jsx)("div",{className:"close-button-line2"})]}),Object(n.jsxs)("form",{className:"question-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h1",{children:"Edit Question Question"}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("textarea",{type:"text",name:"question",className:"text-input",placeholder:"Question",value:this.state.question,onChange:this.onChangeQuestion,required:!0})}),Object(n.jsx)("h3",{children:"Difficulty"}),Object(n.jsxs)("div",{className:"radios",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"1",name:"difficulty",value:"1",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"1",children:"1"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"2",name:"difficulty",value:"2",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"2",children:"2"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"3",name:"difficulty",value:"3",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"3",children:"3"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{type:"radio",id:"4",name:"difficulty",value:"4",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"4",children:"4"})]})]}),Object(n.jsxs)("div",{className:"answers",children:[Object(n.jsx)("textarea",{type:"text",placeholder:"Correct answer",className:"answer-text-input",id:"correct_answer",name:"correct_answer",value:this.state.correct_answer,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 2",className:"answer-text-input",id:"a2",name:"a2",value:this.state.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 3",className:"answer-text-input",id:"a3",name:"a3",value:this.state.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 4",className:"answer-text-input",id:"a4",name:"a4",value:this.state.a4,onChange:this.onChangeAnswer})]}),Object(n.jsx)("input",{type:"submit",name:"submit",className:"form-submit",value:"Answer",required:!0})]})]})}}]),s}(a.Component),A=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={errorMessage:"",token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",editComponent:""},e.addQuestion=function(t,s,n,a,i,r){m.a.post("http://192.46.233.86:5000/admin",{question:t,difficulty:s,correct_answer:n,a2:a,a3:i,a4:r,token:e.state.token}).then((function(e){console.log(e)}))},e.onEditQuestion=function(t){e.setState({editComponent:Object(n.jsx)(Q,{question:t,editQuestion:e.editQuestion,onClose:e.onCloseEditQuestion})})},e.editQuestion=function(t,s,n,a,i,r,o){e.setState({editComponent:""}),m.a.put("http://192.46.233.86:5000/admin",{question:t,difficulty:s,correct_answer:n,a2:a,a3:i,a4:r,id:o,token:e.state.token}).then((function(e){return console.log(e)})),console.log("Qustion edit")},e.onDeleteQuestion=function(t){m.a.delete("http://192.46.233.86:5000/admin",{params:{id:t,token:e.state.token}}).then((function(e){return console.log(e)}))},e.onCloseEditQuestion=function(){e.setState({editComponent:""})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"admin-page",children:[this.state.editComponent,Object(n.jsx)("h1",{children:this.state.errorMessage}),Object(n.jsx)(S,{createQuestion:this.addQuestion}),Object(n.jsxs)("div",{className:"admin-page-questions",children:[Object(n.jsx)("h1",{children:"Questions"}),Object(n.jsx)(k,{questions:this.props.questions,onEdit:this.onEditQuestion,onDelete:this.onDeleteQuestion})]})]})}}]),s}(a.Component),D=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",res:""},e.updateQuestions=function(){m.a.get("http://192.46.233.86:5000/admin",{params:{token:e.state.token}}).then((function(t){return e.setState({res:t.data.questions})}))},e.login=function(t,s){m.a.post("http://192.46.233.86:5000/validate_admin",{email:t,password:s,token:e.state.token}).then((function(t){console.log(t),"login approved"===t.data.message?e.setState({loggedIn:!0}):window.location.replace("/admin_wrong_credentials")}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://192.46.233.86:5000/admin",{params:{token:this.state.token}}).then((function(t){return e.setState({res:t.data.questions})}))}},{key:"render",value:function(){var e;return e=this.state.loggedIn?Object(n.jsx)(A,{questions:this.state.res}):Object(n.jsx)(N,{loginFunction:this.login}),Object(n.jsx)("div",{className:"full-size",children:e})}}]),s}(a.Component),E=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("div",{className:"menu",children:Object(n.jsx)("h1",{children:"Majko Ponist"})}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)("div",{className:"centerbox",children:[Object(n.jsx)("h1",{children:"Welcome here Hana Hegerova"}),Object(n.jsx)("a",{href:"/quiz",className:"link-button",children:"Play"})]})})}}),Object(n.jsx)(j.a,{exact:!0,path:"/quiz",component:q}),Object(n.jsx)(j.a,{exact:!0,path:"/email_exists",component:C}),Object(n.jsx)(j.a,{exact:!0,path:"/admin",component:D}),Object(n.jsx)(j.a,{exact:!0,path:"/admin_wrong_credentials",component:D})]})})}}]),s}(a.Component),F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),F()}},[[63,1,2]]]);
//# sourceMappingURL=main.fee3d992.chunk.js.map