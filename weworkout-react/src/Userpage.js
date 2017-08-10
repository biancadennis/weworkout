import React, {Component} from 'react'

export default class Userpage extends Component {
    logState = (e) => {
	console.log(this.props)
    }
    render(){
        let content
        const user = this.props.location.state.currentUser

        if (user) {
            content = <div>You are logged in as {user.name} ({user.email}).</div>
        } else {
            content = <div>You are not logged in.</div>
        }

        return (
            <div>
                 <div onClick = {this.logState} >THIS IS the USER PAGE</div>
                 {content}
            </div>
        )
    }
} 