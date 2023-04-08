import React from 'react'
import "./Trendcard.css"
import {TrendData} from "../../Data/TrendData.js"

const Trendcard = () => {
  return (
    <div className='trendcard'>
      <h3>Trends For You</h3>
      {TrendData.map((trend) =>{
         return(
            <div className='trend'>
               <span>#{trend.name}</span>
               <span>{trend.shares}K Shares</span>
            </div>
         )
      })}
    </div>
  )
}

export default Trendcard