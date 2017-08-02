import React from 'react'
import {Link} from 'react-router-dom'

export default ({id, username, name}) =>
    <div>
        <h6>{name}</h6>
        <Link to={`/profiles/${id}`}>{username}</Link>
    </div>