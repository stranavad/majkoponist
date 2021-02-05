import React, { Component } from 'react';

class Completed extends Component {
    render() {
        return(
            <div className="question">
                <h2 className="medium-heading">Dokoncili jste kviz</h2>
                <p className="medium-text">Ohledne vyhry vam napiseme na email, ktery jste zadali</p>
            </div>
        );
    }
}

export default Completed;