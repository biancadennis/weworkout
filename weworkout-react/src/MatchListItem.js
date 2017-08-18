import React from 'react'
import {Link} from 'react-router-dom'

export default ({id, username, name, fitnesslevel, photourl}) =>
    <div className="individualMatch">
        <h4>{name}</h4>
        <img className="profilePic" src={photourl} alt=" "/>
        <div>
            Fitness Level: {fitnesslevel}
        </div>
        <Link to={`/matches/${id}`}>{username}</Link>
        <div className="messageButton">
            Message
        </div>
    </div>