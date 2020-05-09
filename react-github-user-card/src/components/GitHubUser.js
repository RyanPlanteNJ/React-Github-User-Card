import React from 'react';

export default function GitHubUser(props) {
    const { user } = props;
    return (
        <div className="gitHubUser">
            <div>
                <div>
                    <div className="profileContainer">
                        <img src={user.avatar_url} alt="Github User Face" />
                    </div>
                    <a className="gitHubLogin" href={user.html_url} target="_blank" rel="noopener noreferrer">
                        <p>{user.login}</p>
                    </a>
                </div>
                <div>
                    <div>
                        <h3>
                            {user.name} : {user.location}
                        </h3>
                    </div>
                    <div>
                        <p>Bio: {user.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}