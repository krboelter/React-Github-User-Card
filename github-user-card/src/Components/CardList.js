import React from 'react';
import Card from './Card';

function CardList(props) {
    return (
        <div>
            {props.user.map((user, index) => (
                <Card
                    className="card"
                    key={index}
                    user={user.login}
                    url={user.avatar_url}
                />
            ))}
        </div>
    )
}

export default CardList