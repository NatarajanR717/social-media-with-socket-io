import React from 'react'
import ProfileSide from '../../components/profileside/ProfileSide'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <div className='postSide'>Posts</div>
        <div className='RightSide'>Rightside</div>
    </div>
  )
}

export default Home