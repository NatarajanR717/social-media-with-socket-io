import React from 'react'
import Followerscard from '../Followerscard/Followerscard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profilecard/ProfileCard'
import "./ProfileSide.css"

function ProfileSide() {
  return (
    <div className='profileside'>
      <LogoSearch/>
      <ProfileCard/>
      <Followerscard/>
    </div>
  )
}

export default ProfileSide