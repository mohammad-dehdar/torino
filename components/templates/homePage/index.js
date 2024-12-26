import React from 'react'
import Banner from './Banner'
import CommercialBanner from './CommercialBanner'
import SearchForm from '../searchForm'
import Tourlist from '../tourList'




function HomePage({data}) {
  return (
    <div>
        <Banner/>
        <SearchForm/>
        <Tourlist toursData={data}/>
        <CommercialBanner/>
    </div>
  )
}

export default HomePage