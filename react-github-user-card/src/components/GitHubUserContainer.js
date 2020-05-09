import React from 'react';
import GitHubUser from './GitHubUser';
import Followers from './Followers';

export default function GitHubUserContainer(props) {
    return (
        <div className="gitHubCardUserContainer">
            <GitHubUser user={props.user} followers={props.followers} />
            {props.user.followers > 0 ? (
                <Followers followers = {props.followers} />
            ) : null}
        </div>
    );
}