import React from 'react'
import Postside from '../../components/Postside/Postside'
import ProfileSide from '../../components/profileside/ProfileSide'
import "./Home.css"
import Rigthside from '../../components/Rightside/Rigthside'

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <Postside/>
        <Rigthside/>
    </div>
  )
}

export default Home