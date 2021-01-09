import React from 'react'
import './FeedBookmarkIndividual.css'
import HeaderIcon from '../../../UI/HeaderIcon/HeaderIcon'

function FeedBookmarkIndividual({photoUrl, userName, topic, date}) {
    return (
        <div className='feed__bookmark__individual'>
            <div className='feed__bookmark__individual__list'>
                <HeaderIcon avatar={true} photoUrl={photoUrl} title={userName} />
                <h3>{topic}</h3>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default FeedBookmarkIndividual
