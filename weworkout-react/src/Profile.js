import React, {Component} from 'react'
// import Profile from './Profile'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {userInfo: []}
    }

  componentDidMount() {
      console.log()
    fetch(`/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(userInfo => {
          console.log('user info:', userInfo)
          this.setState({ userInfo })
      });
  }

  render() {
    return (
      <div className="App">
        <h1>User Information</h1>
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.username}</h2>
        <h2>member since: {this.state.userInfo.createdAt}</h2>
      </div>
    );
  }
}