(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a),o=s(33),r=s.n(o),c=(s(43),s(2)),u=s(3),l=s(5),h=s(4),d=s(35),p=s(7),j=(s(44),s.p+"static/media/GreatWar.dc2df2df.mp3"),m=s.p+"static/media/GreatWarOgg.24be363a.ogg",b=s(9),O=s.n(b),x=s(10),f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:"",first_name:"",last_name:"",phone:""},e.onSubmit=function(t){t.preventDefault(),e.props.registerFunction(e.state.email,e.state.first_name,e.state.last_name,e.state.phone),e.setState({email:"",first_name:"",last_name:"",phone:""})},e.onChangeEmail=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangeFirstName=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangeLastName=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangePhone=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"columns-container",children:[Object(n.jsxs)("div",{className:"column-container",children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Pravidla a postup hry"}),Object(n.jsxs)("ul",{className:"rules-list",children:[Object(n.jsx)("li",{children:"Kv\xedz obsahuje 20 ot\xe1zek, 5 ot\xe1zek z ka\u017ed\xe9 obt\xed\u017enosti. Na ka\u017edou ot\xe1zku m\xe1te 15s"}),Object(n.jsx)("li",{children:"Po zodpov\u011bzen\xed ot\xe1zek se v\xe1m zobraz\xed v\xe1\u0161 v\xfdsledek a spr\xe1vn\xe9 odpov\u011bdi"}),Object(n.jsx)("li",{children:"Pokud odpov\xedte spr\xe1vn\u011b na v\xedce ne\u017e 90% ot\xe1zek, budete si moc vybrat va\u0161\xed v\xfdhru"}),Object(n.jsx)("li",{children:"Dal\u0161\xed pravidlo"}),Object(n.jsx)("li",{children:"Dal\u0161\xed pravidlo"}),Object(n.jsx)("li",{children:"Dal\u0161\xed pravidlo"}),Object(n.jsx)("li",{children:"Dal\u0161\xed pravidlo"})]})]}),Object(n.jsxs)("div",{className:"column-container",children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Registrace"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,className:"form",children:[Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"email",name:"email",className:"text-input",placeholder:"V\xe1\u0161 Email",value:this.state.email,onChange:this.onChangeEmail,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"first_name",className:"text-input",placeholder:"K\u0159estn\xed jm\xe9no",value:this.state.first_name,onChange:this.onChangeFirstName,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"last_name",className:"text-input",placeholder:"P\u0159\xedjmen\xed",value:this.state.last_name,onChange:this.onChangeLastName,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"text",name:"phone",className:"text-input",placeholder:"Va\u0161e telefon\xe9 \u010d\xedslo",value:this.state.phone,onChange:this.onChangePhone,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"submit",name:"submit",className:"medium-button",value:"Hr\xe1t",required:!0})})]})]})]})}}]),s}(a.Component),v=s(15),w=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={answer:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.props.question.id,e.state.answer),e.setState({answer:""})},e.onChangeAnswer=function(t){return e.setState({answer:t.target.value})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"question-form-div",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h1",{className:"medium-heading",children:this.props.question.question}),Object(n.jsxs)("text",{className:"medium-text",children:["Obtiznost ",this.props.question.difficulty]}),Object(n.jsxs)("text",{className:"medium-text",children:["Zbyvajici cas ",this.props.time_left,"/30"]}),Object(n.jsxs)("text",{className:"medium-text",children:["Otazka ",this.props.question_number," z 21"]}),Object(n.jsxs)("div",{className:"horizontal-container",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio-button",type:"radio",id:"answer",name:"answer",value:this.props.question.a1,checked:this.state.answer===this.props.question.a1,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a1,children:this.props.question.a1})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio-button",type:"radio",id:"answer",name:"answer",value:this.props.question.a2,checked:this.state.answer===this.props.question.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a2,children:this.props.question.a2})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio-button",type:"radio",id:"answer",name:"answer",value:this.props.question.a3,checked:this.state.answer===this.props.question.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a3,children:this.props.question.a3})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio-button",type:"radio",id:"answer",name:"answer",value:this.props.question.a4,checked:this.state.answer===this.props.question.a4,onChange:this.onChangeAnswer}),Object(n.jsx)("label",{for:this.props.question.a4,children:this.props.question.a4})]})]}),Object(n.jsx)("div",{className:"container-flex-end",children:Object(n.jsx)("input",{type:"submit",name:"submit",className:"medium-button",value:"Answer",required:!0})})]})})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={display_question:!1,question_number:-1,seconds:30,seconds_to_set:30,current_question:{question:"",id:"",a1:"",a2:"",a3:"",a4:"",difficulty:""},questions:"",answeredQuestions:[]},e.timer=0,e.startTimer=e.startTimer.bind(Object(v.a)(e)),e.countDown=e.countDown.bind(Object(v.a)(e)),e.answerQuestion=e.answerQuestion.bind(Object(v.a)(e)),e.setQuestion=e.setQuestion.bind(Object(v.a)(e)),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.setState({questions:this.props.questions})}},{key:"setQuestion",value:function(){if(20===this.state.question_number){clearInterval(this.timer);var e=this.question_number+1;this.setState({display_question:!1,question_number:e}),this.props.showResult(this.state.answeredQuestions),console.log("Questions were answered")}else this.state.question_number<20&&this.setState({question_number:this.state.question_number+1,display_question:!0})}},{key:"startTimer",value:function(){0===this.timer&&this.state.seconds>0?(this.setQuestion(),this.timer=setInterval(this.countDown,1e3)):0===this.state.seconds&&(this.setQuestion(),this.setState({seconds:this.state.seconds_to_set,timer:0}),this.timer=setInterval(this.countDown,1e3))}},{key:"answerQuestion",value:function(e,t){this.setState({seconds:0});var s=this.state.answeredQuestions;console.log(s),this.setState((function(s){return{answeredQuestions:s.answeredQuestions.concat({id:e,answer:t})}})),this.startTimer()}},{key:"countDown",value:function(){var e=this;if(this.state.seconds<=0)this.startTimer(),clearInterval(this.timer);else{var t=this.state.seconds-1;this.setState({seconds:t}),t<=0&&(this.setState((function(t){return{answeredQuestions:t.answeredQuestions.concat({id:e.state.questions[e.state.question_number].id,answer:""})}})),this.startTimer(),clearInterval(this.timer))}}},{key:"render",value:function(){var e;return e=this.state.display_question?Object(n.jsx)(w,{question:this.state.questions[this.state.question_number],question_number:this.state.question_number+1,onSubmit:this.answerQuestion,time_left:this.state.seconds}):Object(n.jsx)("button",{className:"large-button",onClick:this.startTimer,children:"Hrat!"}),Object(n.jsx)("div",{className:"centerbox",children:e})}}]),s}(a.Component),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-flex-start",children:[Object(n.jsx)("h2",{className:"small-heading",children:this.props.question.question}),Object(n.jsxs)("text",{className:"medium-text",children:["Obtiznost: ",this.props.question.difficulty]}),Object(n.jsxs)("text",{className:"medium-text",children:["Vase odpoved: ",this.props.question.user_answer]}),Object(n.jsxs)("text",{className:"medium-text",children:["Spravna odpoved: ",this.props.question.correct_answer]}),Object(n.jsxs)("text",{className:"medium-text",children:["Spravne: ",this.props.question.correct]})]})}}]),s}(a.Component),N=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.questions.map((function(e){return Object(n.jsx)(y,{question:e},e.id)}))}}]),s}(a.Component),q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onSelectPrize=function(){e.props.onSelect(e.props.prize)},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("h2",{className:"medium-heading",children:this.props.prize.name}),Object(n.jsxs)("text",{className:"medium-text",children:["Obtiznost: ",this.props.prize.description]}),Object(n.jsx)("button",{className:"large-button",onClick:this.onSelectPrize,children:"Vybrat tuto vyhru"})]})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return this.props.prizes.map((function(t){return Object(n.jsx)(q,{prize:t,onSelect:e.props.onSelect},t.id)}))}}]),s}(a.Component),_=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)(C,{prizes:this.props.prizes,onSelect:this.props.onSelect})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={information:""},e.onChangeInformation=function(t){return e.setState({information:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.props.prize.name,e.state.information),e.setState({information:""})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,className:"form",children:[Object(n.jsx)("h2",{className:"small-heading",children:this.props.prize.name}),Object(n.jsx)("p",{className:"medium-text",children:this.props.prize.description}),Object(n.jsx)("textarea",{type:"text",placeholder:"Sem napiste veskere poznamky jako idealni termin a adresi",className:"textarea",value:this.state.information,onChange:this.onChangeInformation}),Object(n.jsx)("input",{type:"submit",value:"Odoslat",className:"medium-button"})]})}}]),s}(a.Component),S=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={component_main:"",show_prizes:!1,api_token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",prizes:"",select_prize:!1,select_prize_id:""},e.onSelectPrize=function(t){e.setState({select_prize_obj:t,select_prize:!0})},e.showPrizes=function(){e.setState({show_prizes:!0})},e.onSubmitPrize=function(t,s){O.a.post("http://localhost:5000/prizes",{token:e.state.api_token,prize_name:t,email:e.props.user.email,first_name:e.props.user.first_name,last_name:e.props.user.last_name,information:s,average:e.props.average,answers:e.props.questions,phone_number:e.props.user.phone_number}).then((function(e){return console.log(e.data)}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;"true"===this.props.winner&&O.a.get("http://localhost:5000/prizes",{params:{token:this.state.api_token}}).then((function(t){e.setState({prizes:t.data.prizes})}))}},{key:"render",value:function(){var e,t;return!0===this.state.select_prize?t=Object(n.jsx)(k,{prize:this.state.select_prize_obj,onSubmit:this.onSubmitPrize}):!0===this.state.show_prizes?t=Object(n.jsx)(_,{onSelect:this.onSelectPrize,prizes:this.state.prizes}):(t=Object(n.jsx)(N,{questions:this.props.questions}),e="true"===this.props.winner?Object(n.jsx)("button",{onClick:this.showPrizes,className:"large-button",children:"Zobrazit vyhry"}):this.props.tries<=2?Object(n.jsx)("button",{onClick:this.props.playAgain,className:"large-button",children:"Hrat jeste raz"}):Object(n.jsx)("h2",{className:"error-text",children:"You don't have any attempt left"})),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"medium-heading",children:["Vas vysledek: ",this.props.average," spravne"]}),e,t]})}}]),s}(a.Component),z=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",res_answers:"",res_average:"",register_form:!0,show_error_text:!1,error_text:"",show_result:!1,user:"",show_result_component:"",tries:0},e.registerFunction=function(t,s,n,a){O.a.post("http://localhost:5000/users",{user_email:t,first_name:s,last_name:n,user_phone_number:a,token:e.state.token}).then((function(t){"This email already exist"===t.data.message?(e.setState({show_error_text:!0,error_text:"This email already exists"}),window.location.replace("/email_exists")):(console.log("Registering"),e.setState({register_form:!1,user:t.data}))}))},e.showResult=function(t){console.log("Show Result"),console.log(t),O.a.post("http://localhost:5000/questions",{answers:t,token:e.state.token,email:e.state.user.email,name:e.state.user.first_name+" "+e.state.user.last_name,phone_number:e.state.user.phone_number}).then((function(t){console.log(t.data),e.setState({show_result_component:Object(n.jsx)(S,{user:e.state.user,winner:t.data.winner,questions:t.data.scheme,average:t.data.average,playAgain:e.playAgain,tries:e.state.tries})}),e.setState({showResult:!0})}))},e.playAgain=function(){O.a.get("http://localhost:5000/questions",{params:{token:e.state.token}}).then((function(t){e.setState({res:t.data.questions,tries:e.state.tries+1,register_form:!1,showResult:!1})}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/questions",{params:{token:this.state.token}}).then((function(t){e.setState({res:t.data.questions})}))}},{key:"render",value:function(){var e;return!0===this.state.register_form?e=Object(n.jsx)(f,{registerFunction:this.registerFunction}):!0===this.state.showResult?(console.log(this.state.res_answers),e=this.state.show_result_component):e=Object(n.jsx)(g,{questions:this.state.res,showResult:this.showResult}),Object(n.jsx)("div",{className:"container",children:e})}}]),s}(a.Component),Q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-center",children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Email alerady exists"}),Object(n.jsx)("a",{href:"/quiz",className:"medium-button",children:"Register again"})]})}}]),s}(a.Component),A=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.onSubmit=function(t){t.preventDefault(),e.props.loginFunction(e.state.email,e.state.password),e.setState({email:"",password:""})},e.onChangeEmail=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangePassword=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-center",children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Login"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,className:"form",children:[Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"email",name:"email",className:"text-input",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"password",name:"password",className:"text-input",placeholder:"Password",value:this.state.password,onChange:this.onChangePassword,required:!0})}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("input",{type:"submit",name:"submit",className:"medium-button",value:"Register",required:!0})})]})]})}}]),s}(a.Component),R=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("h2",{className:"medium-heading",children:this.props.question.question}),Object(n.jsxs)("text",{className:"medium-text",children:["Difficulty: ",this.props.question.difficulty]}),Object(n.jsxs)("ul",{className:"rules-list",children:[Object(n.jsxs)("li",{children:["Correct Answer: ",this.props.question.correct_answer]}),Object(n.jsxs)("li",{children:["Answer 2: ",this.props.question.a2]}),Object(n.jsxs)("li",{children:["Answer 3: ",this.props.question.a3]}),Object(n.jsxs)("li",{children:["Answer 4: ",this.props.question.a4]})]}),Object(n.jsx)("button",{className:"small-button",onClick:this.props.onEdit.bind(this,this.props.question),children:"Edit"}),Object(n.jsx)("button",{className:"small-button",onClick:this.props.onDelete.bind(this,this.props.question.id),children:"Delete"})]})}}]),s}(a.Component),D=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return this.props.questions.map((function(t){return Object(n.jsx)(R,{question:t,onEdit:e.props.onEdit,onDelete:e.props.onDelete},t.id)}))}}]),s}(a.Component),P=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""},e.onSubmit=function(t){t.preventDefault(),e.props.createQuestion(e.state.question,e.state.difficulty,e.state.correct_answer,e.state.a2,e.state.a3,e.state.a4),e.setState({question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""})},e.onChangeAnswer=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangeDifficulty=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangeQuestion=function(t){var s;s=t.target.value.replace(/"/g,"'"),e.setState(Object(x.a)({},t.target.name,s))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Create Question"}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("textarea",{type:"text",name:"question",className:"text-input",placeholder:"Question",value:this.state.question,onChange:this.onChangeQuestion,required:!0})}),Object(n.jsx)("h3",{className:"small-heading",children:"Difficulty"}),Object(n.jsxs)("div",{className:"radios",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio",type:"radio",id:"1",name:"difficulty",value:"1",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"1",children:"1"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio",type:"radio",id:"2",name:"difficulty",value:"2",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"2",children:"2"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"radio",type:"radio",id:"3",name:"difficulty",value:"3",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"3",children:"3"})]})]}),Object(n.jsxs)("div",{className:"answers",children:[Object(n.jsx)("textarea",{type:"text",placeholder:"Correct answer",className:"textarea-half",id:"correct_answer",name:"correct_answer",value:this.state.correct_answer,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 2",className:"textarea-half",id:"a2",name:"a2",value:this.state.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 3",className:"textarea-half",id:"a3",name:"a3",value:this.state.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 4",className:"textarea-half",id:"a4",name:"a4",value:this.state.a4,onChange:this.onChangeAnswer})]}),Object(n.jsx)("input",{type:"submit",name:"submit",className:"medium-button",value:"Answer",required:!0})]})})}}]),s}(a.Component),E=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""},e.onSubmit=function(t){t.preventDefault(),e.props.editQuestion(e.state.question,e.state.difficulty,e.state.correct_answer,e.state.a2,e.state.a3,e.state.a4,e.props.question.id),e.setState({question:"",difficulty:1,correct_answer:"",a2:"",a3:"",a4:""})},e.onChangeAnswer=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onChangeQuestion=function(t){var s;s=t.target.value.replace(/"/g,"'"),e.setState(Object(x.a)({},t.target.name,s))},e.onChangeDifficulty=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.question;this.setState({question:e.question,difficulty:e.difficulty,correct_answer:e.correct_answer,a2:e.a2,a3:e.a3,a4:e.a4})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-overlay",children:[Object(n.jsxs)("div",{className:"close-button",onClick:this.props.onClose,children:[Object(n.jsx)("div",{className:"close-button-line1"}),Object(n.jsx)("div",{className:"close-button-line2"})]}),Object(n.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[Object(n.jsx)("h1",{children:"Edit Question Question"}),Object(n.jsx)("div",{className:"input-line",children:Object(n.jsx)("textarea",{type:"text",name:"question",className:"text-input",placeholder:"Question",value:this.state.question,onChange:this.onChangeQuestion,required:!0})}),Object(n.jsx)("h3",{children:"Obtiznost"}),Object(n.jsxs)("div",{className:"horizontal-container",children:[Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"raido-button",type:"radio",id:"1",name:"difficulty",value:"1",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"1",children:"1"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"raido-button",type:"radio",id:"2",name:"difficulty",value:"2",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"2",children:"2"})]}),Object(n.jsxs)("div",{className:"radio-group",children:[Object(n.jsx)("input",{className:"raido-button",type:"radio",id:"3",name:"difficulty",value:"3",onChange:this.onChangeDifficulty}),Object(n.jsx)("label",{for:"3",children:"3"})]})]}),Object(n.jsxs)("div",{className:"answers",children:[Object(n.jsx)("textarea",{type:"text",placeholder:"Correct answer",className:"textarea",id:"correct_answer",name:"correct_answer",value:this.state.correct_answer,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 2",className:"textarea",id:"a2",name:"a2",value:this.state.a2,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 3",className:"textarea",id:"a3",name:"a3",value:this.state.a3,onChange:this.onChangeAnswer}),Object(n.jsx)("textarea",{type:"text",placeholder:"Answer 4",className:"textarea",id:"a4",name:"a4",value:this.state.a4,onChange:this.onChangeAnswer})]}),Object(n.jsx)("input",{type:"submit",name:"submit",className:"medium-button",value:"Answer",required:!0})]})]})}}]),s}(a.Component),F=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).showResult=function(){e.props.showResult(e.props.answered)},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("h2",{className:"medium-heading",children:this.props.answered.name}),Object(n.jsxs)("text",{className:"medium-text",children:["Email: ",this.props.answered.email]}),Object(n.jsxs)("text",{className:"medium-text",children:["Phone number: ",this.props.answered.phone_number]}),Object(n.jsx)("button",{onClick:this.showResult,className:"small-button",children:"Show Result"})]})}}]),s}(a.Component),I=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return this.props.answered.map((function(t){return Object(n.jsx)(F,{answered:t,showResult:e.props.showResult},t.email)}))}}]),s}(a.Component),T=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).showResult=function(){e.props.showResult(e.props.answered)},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("h2",{className:"medium-heading",children:this.props.question.question}),Object(n.jsxs)("text",{className:"medium-text",children:["Obtiznost: ",this.props.question.difficulty]}),Object(n.jsxs)("text",{className:"medium-text bolder",children:["Odpoved uzivatela: ",this.props.question.user_answer]}),Object(n.jsxs)("text",{className:"medium-text bolder",children:["Spravna odpoved: ",this.props.question.correct_answer]}),Object(n.jsxs)("text",{className:"medium-text bolder",children:["Spravne: ",this.props.question.correct]})]})}}]),s}(a.Component),M=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.questions.map((function(e){return Object(n.jsx)(T,{question:e},e.question)}))}}]),s}(a.Component),G=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={questionsComponent:Object(n.jsx)(M,{questions:e.props.answered.questions1}),score:e.props.answered.score.score1},e.questions1=function(){e.setState({questionsComponent:Object(n.jsx)(M,{questions:e.props.answered.questions1}),score:e.props.answered.score.score1})},e.questions2=function(){e.setState({questionsComponent:Object(n.jsx)(M,{questions:e.props.answered.questions2}),score:e.props.answered.score.score2})},e.questions3=function(){e.setState({questionsComponent:Object(n.jsx)(M,{questions:e.props.answered.questions3}),score:e.props.answered.score.score3})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-overlay",children:[Object(n.jsxs)("div",{className:"close-button",onClick:this.props.onClose,children:[Object(n.jsx)("div",{className:"close-button-line1"}),Object(n.jsx)("div",{className:"close-button-line2"})]}),Object(n.jsx)("h1",{className:"medium-heading",children:this.props.answered.name}),Object(n.jsx)("h3",{className:"small-heading",children:this.props.answered.email}),Object(n.jsx)("h3",{className:"small-heading",children:this.props.answered.phone_number}),Object(n.jsxs)("div",{className:"horizontal-container",children:[Object(n.jsx)("button",{onClick:this.questions1,className:"small-button",children:"Questions 1"}),Object(n.jsx)("button",{onClick:this.questions2,className:"small-button",children:"Questions 2"}),Object(n.jsx)("button",{onClick:this.questions3,className:"small-button",children:"Questions 3"})]}),Object(n.jsxs)("h2",{className:"small-heading",children:["Score: ",100*this.state.score,"%"]}),this.state.questionsComponent]})}}]),s}(a.Component),K=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={errorMessage:"",token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",editComponent:"",showResult:!1,showResultComponent:"",showResults:!1,showPrizes:!1,showQuestions:!0,showCreateQuestion:!1},e.addQuestion=function(t,s,n,a,i,o){O.a.post("http://localhost:5000/admin",{question:t,difficulty:s,correct_answer:n,a2:a,a3:i,a4:o,token:e.state.token}).then((function(e){console.log(e)}))},e.onEditQuestion=function(t){e.setState({editComponent:Object(n.jsx)(E,{question:t,editQuestion:e.editQuestion,onClose:e.onCloseEditQuestion})})},e.editQuestion=function(t,s,n,a,i,o,r){e.setState({editComponent:""}),O.a.put("http://localhost:5000/admin",{question:t,difficulty:s,correct_answer:n,a2:a,a3:i,a4:o,id:r,token:e.state.token}).then((function(e){return console.log(e)})),console.log("Qustion edit")},e.onDeleteQuestion=function(t){O.a.delete("http://localhost:5000/admin",{params:{id:t,token:e.state.token}}).then((function(e){return console.log(e)}))},e.onCloseEditQuestion=function(){e.setState({editComponent:""})},e.showResult=function(t){e.setState({showResult:!0,showResultComponent:Object(n.jsx)(G,{answered:t,onClose:e.onClose})})},e.onClose=function(){e.setState({showResult:!1})},e.showResults=function(){e.setState({showResults:!0,showPrizes:!1,showQuestions:!1,showResult:!1,showCreateQuestion:!1})},e.showQuestions=function(){e.setState({showResults:!1,showPrizes:!1,showQuestions:!0,showResult:!1,showCreateQuestion:!1})},e.showPrizes=function(){e.setState({showResults:!1,showPrizes:!0,showQuestions:!1,showResult:!1,showCreateQuestion:!1})},e.showCreateQuestion=function(){e.setState({showResults:!1,showPrizes:!1,showQuestions:!1,showResult:!1,showCreateQuestion:!0})},e}return Object(u.a)(s,[{key:"render",value:function(){var e;return e=this.state.showResult?this.state.showResultComponent:this.state.showResults?Object(n.jsx)(I,{answered:this.props.answered,showResult:this.showResult}):this.state.showPrizes?Object(n.jsx)("h1",{children:"Showing prizes"}):this.state.showQuestions?Object(n.jsx)(D,{questions:this.props.questions,onEdit:this.onEditQuestion,onDelete:this.onDeleteQuestion}):this.state.showCreateQuestion?Object(n.jsx)(P,{createQuestion:this.addQuestion}):Object(n.jsx)("h1",{children:"Everything is fucked up and IT DOESN'T WORK"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"admin-page-menu",children:[Object(n.jsx)("button",{onClick:this.showQuestions,className:"medium-button",children:"Show Questions"}),Object(n.jsx)("button",{onClick:this.showResults,className:"medium-button",children:"Show Results"}),Object(n.jsx)("button",{onClick:this.showPrizes,className:"medium-button",children:"Show Prizes"}),Object(n.jsx)("button",{onClick:this.showCreateQuestion,className:"medium-button",children:"Create Question"})]}),Object(n.jsx)("div",{className:"component",children:e}),this.state.editComponent]})}}]),s}(a.Component),H=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,token:"ts9pFkGuXKgcmo43Mmj0^eG%iiR3m",res_questions:"",res_answered:""},e.updateQuestions=function(){O.a.get("http://localhost:5000/admin",{params:{token:e.state.token}}).then((function(t){return e.setState({res:t.data.questions})}))},e.login=function(t,s){O.a.post("http://localhost:5000/validate_admin",{email:t,password:s,token:e.state.token}).then((function(t){console.log(t),"login approved"===t.data.message?e.setState({loggedIn:!0}):window.location.replace("/admin_wrong_credentials")}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/admin",{params:{token:this.state.token}}).then((function(t){return e.setState({res_questions:t.data.questions,res_answered:t.data.answered})}))}},{key:"render",value:function(){var e;return e=this.state.loggedIn?Object(n.jsx)(K,{questions:this.state.res_questions,answered:this.state.res_answered}):Object(n.jsx)(A,{loginFunction:this.login}),Object(n.jsx)("div",{className:"container",children:e})}}]),s}(a.Component),L=s(34),V=s(37),X=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.playAudio=function(){var e=document.getElementById("track");!1===e.paused?e.pause():e.play()},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("div",{className:"menu",children:Object(n.jsx)("h1",{children:Object(n.jsx)("a",{href:"/",children:"Majko Ponist"})})}),Object(n.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)("div",{className:"container-center",children:[Object(n.jsx)("h1",{className:"medium-heading",children:"Hana Hegerova quizzzzzz"}),Object(n.jsx)("a",{href:"/quiz",className:"large-button",children:"Play"})]})})}}),Object(n.jsx)(p.a,{exact:!0,path:"/quiz",component:z}),Object(n.jsx)(p.a,{exact:!0,path:"/email_exists",component:Q}),Object(n.jsx)(p.a,{exact:!0,path:"/admin",component:H}),Object(n.jsx)(p.a,{exact:!0,path:"/admin_wrong_credentials",component:H}),Object(n.jsxs)("audio",{id:"track",loop:!0,children:[Object(n.jsx)("source",{src:j,type:"audio/mpeg"}),Object(n.jsx)("source",{src:m,type:"audio/ogg"})]}),Object(n.jsx)(L.a,{className:"audio-button",onClick:this.playAudio,icon:V.a})]})})}}]),s}(a.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),B()}},[[68,1,2]]]);
//# sourceMappingURL=main.c60798bc.chunk.js.map