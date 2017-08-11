import React, {Component} from 'react'
import Matchlist from './Matchlist'

export default class Userpage extends Component {
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
                 <div>Hi there:{content}
                 </div>
                <div>
                    Here are your Matches:
                    <Matchlist user={user}/>
                </div>
            </div>
            
        )
    }
} 