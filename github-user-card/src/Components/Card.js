import React from 'react';
import '../App.css';

function Card(props) {
    return (
        <div className="card">
            <h2>{props.user}</h2>
            <img src={props.url} alt="Profile" />
        </div>
    )
}

export default Card