import React from 'react'
import HomeFeed from './HomeFeed'
import Infobar from './Infobar'
import Navbar from '../../header/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='homer'>
            <HomeFeed/>
            <Infobar/>
        </div>
    </div>
  )
}

export default Home