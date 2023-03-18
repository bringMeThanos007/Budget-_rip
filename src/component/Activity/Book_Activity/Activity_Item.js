import React from 'react'
import './activity_item.css'
import rafting from '../../../img/rafting.jpg'
import { Link } from 'react-router-dom'

export default function Activity_Item(props) {
  return (
    <>
      <div className="Activity_item">
        <img src={rafting} alt="" />

        <div className="hotel_item_info">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <span class="badge text-bg-warning" style={{ height: "min-content" }}>{props.offer}</span>
            <p>{props.star}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
            <h6><strong> {props.title} </strong></h6>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
            <h6>{props.price} <small>per Adult</small></h6>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
            <Link to="/Activity_booked"><button className='btn'>Book Now</button></Link>
            {/* <button className='btn'>Book Now</button> */}
          </div>
        </div>
      </div>
    </>
  )
}
