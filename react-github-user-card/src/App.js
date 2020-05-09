import React from 'react';
import axios from 'axios';
import GitHubUserContainer from './components/GitHubUserContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: "",
        gitUser: "RyanPlanteNJ",
        followers: "",
        location: "",
        profile: ""
      };
  }

  fetchUser = () => {
    return axios.get(
      `https://api.github.com/users/${this.state.gitUser}`
    );
  };  
  
  fetchFollowers = () => {
    return axios.get(
      `https://api.github.com/users/${this.state.gitUser}/followers`
    );
  };



  fetchData = () => {
    return axios.all([this.fetchUser(), this.fetchFollowers()])
    .then(response => {
      console.log(response);
      this.setState({
        user: response[0].data,
        followers: response[1].data,
      });
    })
    .catch(error => {
      console.log(error);
    });
  };

  componentDidMount() {
    return this.fetchData();
  }

  render() {
    const { user, followers, location } = this.state;
    return (
      <>
        
        <GitHubUserContainer
          user = {user}
          followers = {followers}
          location = {location}
         />
      </>
    ); 
  }
}

export default App;