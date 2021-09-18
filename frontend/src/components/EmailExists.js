import React from 'react';

export default function EmailExists() {
    return (
        <div className="container-center">
            <h1 className="medium-heading">Email už existuje</h1>
            <a href="/quiz" className="medium-button">Registrovat</a>
        </div>
    );
}