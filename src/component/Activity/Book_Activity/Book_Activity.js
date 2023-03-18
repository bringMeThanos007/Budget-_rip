import React from 'react'
import Activity_Item from './Activity_Item'
import './book_activity.css'

export default function Book_Activity() {
  return (
    <>
      <div className="book_activity">
        <div className="activity_info">
            <h4>Rishikesh <small>24-jan-2023</small></h4>
            
        </div>
        <div className="activities_to_do">
            <h1 style={{textAlign:'center'}}>Adventures in Rishikesh</h1>
            <div className="horizontal"></div>
            <div style={{padding:"20px"}}>
                <Activity_Item title='Rafting in Rishikesh' price='₹599.00' star='⭐⭐⭐⭐' offer='23% off'/>
                <Activity_Item title='bungee jumping in Rishikesh' price='₹2599.00' star='⭐⭐⭐' offer='23% off'/>
                <Activity_Item title='zipline in Rishikesh' price='₹759.00' star='⭐⭐⭐⭐⭐' offer='23% off'/>
            </div>
        </div>
      </div>
    </>
  )
}
