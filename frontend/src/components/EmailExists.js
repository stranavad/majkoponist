import React, { Component } from 'react';

class EmailExists extends Component {
    render() {
        return (
            <div className="container-center">
                <h1 className="medium-heading">Email už existuje</h1>
                <a href="/quiz" className="medium-button">Registrovat</a>
            </div>
        );
    }
}

export default EmailExists;