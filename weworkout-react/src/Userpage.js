import React, {Component} from 'react'
import Matchlist from './Matchlist'


export default class Userpage extends Component {
    render(){
        let content
        let gymInfo
        const user = this.props.location.state.currentUser  

        if (user) {
            content = 
                    <div>
                            You are logged in as {user.name}.
                     </div>
        } else {
            content = <div>You are not logged in.</div>
        }
        // let gymVisible = true  

        // if (gymVisible) {
        //     gymInfo = <div>Choose Your Gym <GymFinder/></div>
        // } else {
        //     gymInfo = <div>Welcome!</div>
        // }

        return (
            <div>
                <div>
                    <img className="profilePic" src={user.photourl} alt=" "/>
                 </div>
                 <div>
                    <div>Hi there:{content}
                 </div>
                <div> {gymInfo}</div>
                <div>
                <h2>
                    These users go to your gym. Say Hi!
                </h2>
                    <Matchlist user={user}/>
                </div>
                </div>
            </div>
            
        )
    }
} 