import React from 'react'
import Banner from './Banner'
import CommercialBanner from './CommercialBanner'
import SearchForm from '../searchForm'
import Tourlist from '../tourList'
import WhyTorino from '../whyTorino/index.js'


function HomePage({data}) {
  return (
    <div>
        <Banner/>
        <SearchForm/>
        <Tourlist toursData={data}/>
        <CommercialBanner/>
        <WhyTorino/>
    </div>
  )
}

export default HomePage