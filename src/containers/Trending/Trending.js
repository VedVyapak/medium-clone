import React from 'react';
import './Trending.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HeaderIcon from '../../components/UI/HeaderIcon/HeaderIcon';
import TrendingBlog from '../../components/TrendingBlog/TrendingBlog';

function Trending() {
    return (
        <div className='trending'>
            <HeaderIcon Icon={TrendingUpIcon} title='TRENDING ON MEDIUM' />
            <div className='trending__flex'>
                <div className='trending__flex__top'>
                    <TrendingBlog 
                        number='01'
                        photoUrl='https://miro.medium.com/fit/c/25/25/1*bPDBxDxd1zONOGP6O2OouA.png'
                        userName='New York Mets' 
                        topic='METS ACQUIRE FOUR-TIME ALL-STAR FRANCISCO LINDOR' 
                        date='Jan 7
                        ·
                        2 min read' />
                    
                    <TrendingBlog 
                        number='02'
                        photoUrl='https://miro.medium.com/fit/c/25/25/1*j3YqKZ2cbnGn-XNFZs0ulQ.png'
                        userName='Rowan Kavner in Dodger Insider' 
                        topic='Dodgers past and present share memories and condolences after Tommy Lasorda’s passing'
                        
                        date='Jan 9
                        ·
                        10 min read' />

                    <TrendingBlog 
                        number='03'
                        photoUrl='https://miro.medium.com/fit/c/25/25/1*ZpqTjur1EEzN4KzM4e-Bnw.png'
                        userName='Ash Jurberg
                        in
                        Entrepreneurs Handbook' 
                        topic='The Speech That Cost Jack Ma 37 Billion Dollars' 
                        date='Jan 7
                        ·
                        6 min read' />    
                </div>
                <div className='trending__flex__bottom'>
                    <TrendingBlog 
                            number='04'
                            photoUrl='https://miro.medium.com/fit/c/25/25/1*2dvTVo0Sra9GP7FQC-3N8Q.png'
                            userName='Krissanawat Kaewsanmuang' 
                            topic='Building a “Motivation Bot” with TensorFlow.js, Face Detection, and Emotion Classification.' 
                            date='Sep 14, 2020 · 7 min read' />

                    <TrendingBlog 
                            number='05'
                            photoUrl='https://miro.medium.com/fit/c/25/25/1*AQbRi7322aPUWTzp_zOhTg.png'
                            userName='Ray Levy-Uyeda in Gen' 
                            topic='
                            We Know Why Police Went Easy on the Pro-Trump Terrorists' 
                            date='Jan 7
                            ·
                            3 min read' />

                    <TrendingBlog 
                            number='06'
                            photoUrl='https://miro.medium.com/fit/c/25/25/1*oxc9Wq1YbhVHCrv3TGJzdQ.jpeg'
                            userName='Rep. Jamie Raskin' 
                            topic='
                            Statement of Congressman Jamie Raskin and Sarah Bloom Raskin on the Remarkable Life of Tommy Raskin
                            ' 
                            date='Jan 5
                            ·
                            9 min read' />                
                </div>
            </div>
        </div>
    )
}

export default Trending
