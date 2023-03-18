import React from 'react'
import './hotel_items.css';
import hotelr from '../../../img/mumbai.jpg'
import { Link } from 'react-router-dom'

export default function Hotel_items() {
  return (
    <>
      <div className="hotel_item">
        <img src={hotelr} alt="" />
      
      <div className="hotel_item_info">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          <p>⭐⭐⭐⭐⭐</p>
          <span class="badge text-bg-warning" style={{height:"min-content"}}>23% Off</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          <h6><strong> Mariners Bay |1 BHK Pool Apartment </strong><br /> Calangute</h6>
          <h6>₹2,347 <br /> <small>+₹282 taxes</small></h6>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
          <p>Book for 5 and pay for 4 Night - CTB5G1</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
        <Link to="/hotel_room"><button className='btn'>Book Now</button></Link>
          {/* <button className='btn'>Book Now</button> */}
        </div>
      </div>
      </div>

    </>
  )
}

