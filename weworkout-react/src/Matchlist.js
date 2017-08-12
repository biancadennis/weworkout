import React, {Component} from 'react'
import MatchListItem from './MatchListItem'

export default class Matchlist extends Component {
	state = {Users: []}
	componentDidMount() {
    	fetch('/users')
     	 .then(res => res.json())
		.then(json => {
			this.setState({ Users: json })
			console.log( this.state.Users)
			console.log(this.props.user)
		})
  	}
// 	findMatch = () => {
// 		this.state.Users.map(user => {
			
// 		})
//   }

	render() {
		// let matchedUser
		// const loggedInUser = this.props.user

		// if (user.fitnesslevel = loggedInUser.fitnesslevel) {
        //     matchedUser = <div>{user.name} ({user.email}).</div>
		// } else {
        //     matchedUser = <div>You are not logged in.</div>
        // }
		const Users = this.state.Users
		const currentlyLoggedUser = this.props.user
		let matchedUsers = []
		return (
			<div>
				<div>
				{/*{Users.map(user => <MatchListItem key={user.id} {...user}/> )}*/}
				{Users.forEach(function(userListItem){
					if (userListItem.gender === currentlyLoggedUser.gender) {
						matchedUsers.push(userListItem)
					}
				})
				}
				{matchedUsers.map(user => <MatchListItem key={user.id} {...user}/> )}
				</div>
			</div>
		)
	}

}