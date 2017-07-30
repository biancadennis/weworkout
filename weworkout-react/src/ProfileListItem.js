import React from 'react'
import {Link} from 'react-router-dom'

export default ({id, username}) =>
    <div>
        <Link to={`/profiles/${id}`}>{username}</Link>
    </div>