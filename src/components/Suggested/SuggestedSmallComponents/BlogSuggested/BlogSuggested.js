import React from 'react'
import HeaderIcon from '../../../UI/HeaderIcon/HeaderIcon'
import './BlogSuggested.css'

function TrendingBlog({photoUrl, userName, topic, date, postPhotoUrl}) {
    return (
        <div className='trending__blog'>
            <div className='trending__blog__left'>
                <HeaderIcon avatar={true} photoUrl={photoUrl} title={userName} />
                <h3>{topic}</h3>
                <p>{date}</p>
            </div>
            <div className='trending__blog__right'>
                <img src={postPhotoUrl} alt=""/>
            </div>
        </div>
    )
}

export default TrendingBlog
