import React from 'react'
import "./Rigthside.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Command from "../../img/comment.png"
import {UilSetting} from '@iconscout/react-unicons'
import Trendcard from '../Trendcard/Trendcard'

const Rigthside = () => {
  return (
   <div className='rightside'>
      <div className='navicon'>
         <img src={Home} alt='home'></img>
         <UilSetting/>
         <img src={Noti} alt='notification'></img>
         <img src={Command} alt='command'></img>
      </div>

      <Trendcard/>

      <button className='button r-button'>Share</button>
   </div>
  )
}

export default Rigthside