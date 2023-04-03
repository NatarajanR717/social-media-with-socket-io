import React from 'react'
import Posts from '../Posts/Posts'
import Postshare from '../Postshare/Postshare'
import "./Postside.css"

function Postside() {
  return (
    <div className='postside'>
      <Postshare/>
      <Posts/>
    </div>
  )
}

export default Postside