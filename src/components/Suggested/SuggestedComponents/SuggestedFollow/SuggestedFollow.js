import React from 'react'
import ProfileSuggested from '../../SuggestedSmallComponents/ProfileSuggested/ProfileSuggested'
import TopicsSuggested from '../../SuggestedSmallComponents/TopicsSuggested/TopicsSuggested'
import './SuggestedFollow.css'

function SuggestedFollow() {
    return (
        <div className='suggested__follow'>
            <div className='creators__follow'>
                <h3>CREATORS TO FOLOW</h3>
                <div className='profile'>
                    <ProfileSuggested 
                        name='Will Wheaton' 
                        content='Wizard. Time Lord. Fake geek girl. On a good day I am charming as fuck.' 
                        photoUrl='https://miro.medium.com/fit/c/80/80/0*ZeXspjgRt9P0n3a3.png' />
                    <ProfileSuggested 
                        name='Anil Dash' 
                        content='CEO of @Glitch. Trying to make tech more ethical & humane.' 
                        photoUrl='https://miro.medium.com/fit/c/80/80/1*yWQSXi7DUTz3mnjCCTVrCw.jpeg' />
                </div>    
            </div>

            <div className='topics__follow'>
                <h3>TOPICS TO FOLLOW</h3> 
                <div className='topics'>
                    <TopicsSuggested title='Coronavirus' button={true} />
                    <TopicsSuggested title='Software' button={true}/>
                    <TopicsSuggested title='Lifestyle' button={true} />
                </div>    
            </div>
           
           
        </div>
    )
}

export default SuggestedFollow
