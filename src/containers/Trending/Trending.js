import React from 'react';
import './Trending.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HeaderIcon from '../../components/UI/HeaderIcon/HeaderIcon';

function Trending() {
    return (
        <div className='trending'>
            <HeaderIcon Icon={TrendingUpIcon} title='TRENDING ON MEDIUM' />
            <div className='trending__flex'>
                <div className='trending__flex__top'>
                    <TrendingBlog/>
                    <TrendingBlog/>
                    <TrendingBlog/>
                </div>
                <div className='trending__flex__bottom'>
                    <TrendingBlog/>
                    <TrendingBlog/>
                    <TrendingBlog/>
                </div>
            </div>
        </div>
    )
}

export default Trending
