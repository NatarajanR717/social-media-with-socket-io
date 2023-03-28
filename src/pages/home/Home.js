import React from 'react'
import Postside from '../../components/Postside/Postside'
import ProfileSide from '../../components/profileside/ProfileSide'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <Postside/>
        <div className='RightSide'>Rightside</div>
    </div>
  )
}

export default Home