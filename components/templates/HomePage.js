'use client'
import React from 'react'

import ModalContainer from '../container/ModalContainer'
import Banner from '../modules/Banner';
import SearchBar from '../modules/SearchBar';


function HomePage({initialTours}) {

    
  
  return (
    <div>
      <Banner/>
      <SearchBar initialTours={initialTours}/>
      <ModalContainer/>
    </div>
  )
}

export default HomePage