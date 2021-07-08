import React from "react";

export default function Followers(props) {
  const { followers } = props;
  return (
    <div className="followers">
      <h3>Followers: {followers.length}</h3>
      {followers.map(follower => {
        return (
          <div>
            <div >
              <img className = "followerProfile" src={follower.avatar_url} alt="Follower profile" />
            </div>
            <div className = "followerURL">
                <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                <h4>@{follower.login}</h4>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}