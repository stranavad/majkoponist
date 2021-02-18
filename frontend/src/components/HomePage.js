import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return(
            <div className="container-center">
                <div className="homepage-mix-div">
                    <h1 className="homepage-first-heading">Poznáte Hanu Hegerovú ?</h1>
                    <h1 className="homepage-second-heading">Ste si istý ?</h1>
                    <h1 className="homepage-third-heading">Opravdu?</h1>
                    <h1 className="homepage-forth-heading">Vaše vedomosti si môžete overiť v kvíze o našej najznámejšej šansoniérke.</h1>
                    <h1 className="homepage-fifth-heading">Pripraveni?</h1>
                    <a href="/quiz" className="homepage-button">Hrat</a>
                </div>
            </div>
        );
    }
}

export default HomePage;

/* 
<h1 className="medium-heading">Čo vieš o Hane ?</h1>
                <p className="homepage-text">
                    Poznáte Hanu Hegerovú ? <br/>
                    Ste si istý ? <br/>
                    Vaše vedomosti si môžete overiť v kvíze o našej najznámejšej šansoniérke.
                </p>
                */