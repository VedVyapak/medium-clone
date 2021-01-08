import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderIcon.css'

function HeaderIcon({avatar, Icon, photoUrl}) {
    return (
        <div className='HeaderIcon'>
            {Icon && <Icon className='header_icon'/>}
            {avatar && <Avatar className='header_icon' src={photoUrl}/>}
        </div>
    )
}

export default HeaderIcon
