import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../logoSearch/LogoSearch'
import Followerscard from '../Followerscard/Followerscard'
import Infocard from '../Infocard/Infocard'
const ProfileLeft = () => {
  return (
    <div className='profileside'>
      <LogoSearch/>
      <Infocard/>
      <Followerscard/>
    </div>
  )
}

export default ProfileLeft