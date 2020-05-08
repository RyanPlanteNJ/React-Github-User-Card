import React from 'react';
import ProtoTypes from 'prop-types';

function GitHubUser(props) {
    return(
        <>
            {props.user.map(user => (
                <div className="cards"
                    key={user.id}
                >
                    <div className="card">
                        <img src={user.avatar_url} alt={user.name}/>
                        <div className="card-info">
                            <h3 className="name">{user.name}</h3>
                            <p className="username">{user.login}</p>
                            <p>{user.location}</p>
                            <p>Profile: <a href={user.html_url}>{user.html_url}</a></p>
                            <p>Followers: {user.followers}</p>
                            <p>Following: {user.following}</p>
                        </div>
                    </div>
                </div>
            ))}
    )
}