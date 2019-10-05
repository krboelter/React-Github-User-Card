import React from 'react';

function Card(props) {
    return (
        <div>
            <h2>{props.user}</h2>
            <img src={props.url} alt="Profile" />
        </div>
    )
}

export default Card