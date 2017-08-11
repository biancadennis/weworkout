import React, {Component} from 'react'
import MatchListItem from './MatchListItem'

export default class Matchlist extends Component {
	Users = {Users: []}
	componentDidMount() {
    	fetch('/users')
     	 .then(res => res.json())
		.then(json => {
			this.setState({ Users: json })
			this.state.Users.map(user => <MatchListItem key={user.id} {...user}/> )
			console.log(this.props.user)
		})
  	}
	render() {

		let listOfMatches = [];

		return (
			<div>
				<div>
					Hi
				</div>
			</div>
		)
	}

}