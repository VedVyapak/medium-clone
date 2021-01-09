import React from 'react'
import './TrendingBlog.css'
import HeaderIcon from '../UI/HeaderIcon/HeaderIcon' 

function TrendingBlog({number,photoUrl, userName, topic, date}) {
    return (
        <div className='trending__blog'>
            <div className='trending__number'>
                <h1>{number}</h1>
            </div>
            
            <div className='trending__blog__left'>
                <HeaderIcon avatar={true} photoUrl={photoUrl} title={userName} />
                <h3>{topic}</h3>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default TrendingBlog
