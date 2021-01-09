import React from 'react'
import './Suggested.css'

import SuggestedMainTrending from '../../components/SuggestedComponents/SuggestedMainTrending/SuggestedMainTrending'
import SuggestedGroupTrending from '../../components/Suggested/SuggestedComponents/SuggestedGroupTrending/SuggestedGroupTrending'
import SuggestedFollow from '../../components/Suggested/SuggestedComponents/SuggestedFollow/SuggestedFollow'


function Suggested() {
    return (
        <div className='suggested'>
                <SuggestedMainTrending/>
                <SuggestedGroupTrending/>
                <SuggestedFollow/>
        </div>
    )
}

export default Suggested
 