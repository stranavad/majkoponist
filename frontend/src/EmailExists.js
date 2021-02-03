import React, { Component } from 'react';

class EmailExists extends Component {
    render() {
        return (
            <div className="container-center">
                <h1 className="medium-heading">Email alerady exists</h1>
                <a href="/quiz" className="medium-button">Register again</a>
            </div>
        );
    }
}

export default EmailExists;