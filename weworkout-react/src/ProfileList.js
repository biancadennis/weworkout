import React, {Component} from 'react'
import ProfileListItem from './ProfileListItem'

export default class ProfileList extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <ProfileListItem key={user.id} {...user} />
        )}
      </div>
    );
  }
}