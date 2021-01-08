import React from 'react';
import HeaderIcon from '../../UI/HeaderIcon/HeaderIcon'
import './SuggestedFollow.css'

function SuggestedMainTrending() {
    return (
        <div className='trending' >
            <div className='trending__top'>
                <img src='https://miro.medium.com/fit/c/470/353/1*OfJTXSNq29tr0jbv7dA5AQ.png' alt='' />
            </div>
            <div className='trending__avatar'>
                <HeaderIcon avatar={true} photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80' title='Ved Vyapak' />
            </div>
            <div className='trending__bottom'>
                <h2>ROS VL53L0X range sensor based on Arduino Mega 2560 and Rosserial</h2>
                <p>In the previous story I showed how to create a ROS supported distance sensor by creating a simple sketch and a C++ ROS node. But there is…</p>
                <p>Read More . 4 min read</p>
            </div>

        </div>
    )
}

export default SuggestedMainTrending
