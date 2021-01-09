import React from 'react'
import FeedBlog from '../../components/FeedComponent/FeedBlog/FeedBlog';
import FeedBookmark from '../../components/FeedComponent/FeedBookmark/FeedBookmark';
import './Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__blog__list' >
                
                
                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*EPnm3RnzAMoSUgAVmEspiw.png'
                    userName='Shivani Tiwari' 
                    topic='Diwali Rediscovered!' 
                    content='True to its name, Diwali is indeed the festival of lights. It spreads the ray of hope, joy, and happiness all over.'
                    date='Nov 14, 2020
                    ·
                    4 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*nbOkhqCf4P9C1MABKKJn3w.jpeg' />


                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*kf1vkFsqlSp81QrPCBhvLw.jpeg'
                    userName='Priyanshu Saraf' 
                    topic='Habits, Why Do They Matter?' 
                    content='Habits are by far one of the most important factors that determine your efficiency, productivity, and your result. Good habits will boost…'
                    date='Nov 25, 2020
                    ·
                    5 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*lDdx7yxukUEgdudY0voatw.png' />











                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*rgLh3WokPmteRFZa9jnQZg.jpeg'
                    userName='Rohan Agarwal in Grand Challenges' 
                    topic='Interim Work' 
                    content='Rohan Agarwal, Ira Rosner, Yu Pan'
                    date='Oct 12, 2020
                    ·
                    4 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*Uq7W-a5-9y_3i-E1tkqx1g.png' />



                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*-QdtGyhlyv9woTMaJIfxqw.jpeg'
                    userName='Ananthamoorthy Haniman in Codemasker' 
                    topic='QuizBee ~ The Freedom of Learning' 
                    content='A solution-finding platform for Sri Lankan school students.'
                    date='Nov 10, 2020
                    ·
                    2 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*qKnANqGw0TbGBixVLRrRIA.jpeg' /> 


                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*EPnm3RnzAMoSUgAVmEspiw.png'
                    userName='Shivani Tiwari' 
                    topic='Diwali Rediscovered!' 
                    content='True to its name, Diwali is indeed the festival of lights. It spreads the ray of hope, joy, and happiness all over.'
                    date='Nov 14, 2020
                    ·
                    4 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*nbOkhqCf4P9C1MABKKJn3w.jpeg' />


                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*W1-4gsXQkZVfCokcGuFtmQ.jpeg'
                    userName='Mansipareek' 
                    topic='Stories….' 
                    content='Beginning with Thoughts.'
                    date='Jan 1
                    ·
                    3 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/0*VLDEjJZoPtCajlb4' />


                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*rgLh3WokPmteRFZa9jnQZg.jpeg'
                    userName='Rohan Agarwal in Grand Challenges' 
                    topic='Interim Work' 
                    content='Rohan Agarwal, Ira Rosner, Yu Pan'
                    date='Oct 12, 2020
                    ·
                    4 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*Uq7W-a5-9y_3i-E1tkqx1g.png' />



                <FeedBlog 
                    photoUrl='https://miro.medium.com/fit/c/25/25/1*-QdtGyhlyv9woTMaJIfxqw.jpeg'
                    userName='Ananthamoorthy Haniman in Codemasker' 
                    topic='QuizBee ~ The Freedom of Learning' 
                    content='A solution-finding platform for Sri Lankan school students.'
                    date='Nov 10, 2020
                    ·
                    2 min read ·
                    Based on your reading history' 
                    postPhotoUrl='https://miro.medium.com/fit/c/250/166/1*qKnANqGw0TbGBixVLRrRIA.jpeg' />               







            </div>
            <div className='feed__bookmark__list' >
                <FeedBookmark/>
            </div>
        </div>
    )
}

export default Feed
