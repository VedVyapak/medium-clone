import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HeaderIcon from '../../component/UI/Icon/HeaderIcon'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png' alt=''/>
                <hr class="vertical"></hr>
                <h3>Good Morning</h3>
            </div>
            <div className='header__right'>
                <HeaderIcon Icon={SearchIcon} />
                <HeaderIcon Icon={BookmarkBorderIcon} />
                <HeaderIcon Icon={NotificationsNoneIcon} />
                <HeaderIcon avatar={true} photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80' />
            </div>
        </div>
    )
}

export default Header
