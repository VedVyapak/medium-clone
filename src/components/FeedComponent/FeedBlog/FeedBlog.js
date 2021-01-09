import React from 'react'
import './FeedBlog.css'
import HeaderIcon from '../../UI/HeaderIcon/HeaderIcon'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function FeedBlog({photoUrl, userName, topic, content, date, postPhotoUrl}) {
    return (
        <div className='feed__blog'>
            <div className='feed__blog__left'>
                <HeaderIcon avatar={true} photoUrl={photoUrl} title={userName} />
                <h3>{topic}</h3>
                <h6>{content}</h6>
                <div className='under__line' >
                    <p>{date}</p>
                    <HeaderIcon Icon={BookmarkBorderIcon} />
                    <HeaderIcon Icon={MoreHorizIcon} />
                </div>
            </div>
            <div className='feed__blog__right'>
                <img src={postPhotoUrl} alt=""/>
            </div>
        </div>
    )
}

export default FeedBlog
