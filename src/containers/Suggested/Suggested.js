import React from 'react'
import './Suggested.css'

import SuggestedMainTrending from '../../components/SuggestedComponents/SuggestedMainTrending/SuggestedMainTrending'
import SuggestedGroupTrending from '../../components/SuggestedComponents/SuggestedGroupTrending/SuggestedGroupTrending'
import SuggestedFollow from '../../components/SuggestedComponents/SuggestedFollow/SuggestedFollow'


function Suggested() {
    return (
        <div className='suggested'>
                <SuggestedMainTrending/>
                <SuggestedGroupTrending/>
                {/* <SuggestedFollow/> */}
                <SuggestedMainTrending/>
        </div>
    )
}

export default Suggested
 