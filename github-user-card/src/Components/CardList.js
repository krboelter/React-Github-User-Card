import React from 'react';
import Card from './Card';
import '../App.css';

function CardList(props) {
    return (
        <div className="class-list-container">
            {props.user.map((user, index) => (
                <Card
                    key={index}
                    user={user.login}
                    url={user.avatar_url}
                />
            ))}
        </div>
    )
}

export default CardList