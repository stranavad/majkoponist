import React, { Component } from 'react';

class EmailExists extends Component {
    render() {
        return (
            <div className="centerbox">
                <h1 className="heading">Email alerady exists</h1>
                <a href="/register" className="link-button">Register again</a>
            </div>
        );
    }
}

export default EmailExists;