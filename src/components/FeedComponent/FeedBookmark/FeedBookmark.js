import React from 'react'
import './FeedBookmark.css'
import HeaderIcon from '../../UI/HeaderIcon/HeaderIcon'
import FeedBookmarkIndividual from '../FeedBookmark/FeedBookmarkIndividual/FeedBookmarkIndividual'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function FeedBookmark() {
    return (
        <div className='feed__bookmark'>
            <div className='reading__list__icon' >
                <HeaderIcon Icon={BookmarkBorderIcon} title='Reading List' />
            </div>
            <FeedBookmarkIndividual
                photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80'
                userName='Ved Vyapak' 
                topic='5 Must-Read Research in Image Processing Against COVID 19.' 
                date='Dec 23, 2020 · 5 min read' />
            <FeedBookmarkIndividual
                photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80'
                userName='Ved Vyapak' 
                topic='5 Must-Read Research in Image Processing Against COVID 19.' 
                date='Dec 23, 2020 · 5 min read' />
            <FeedBookmarkIndividual
                photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80'
                userName='Ved Vyapak' 
                topic='5 Must-Read Research in Image Processing Against COVID 19.' 
                date='Dec 23, 2020 · 5 min read' />        
        </div>
    )
}

export default FeedBookmark
