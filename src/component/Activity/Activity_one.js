import React from 'react'
import './activity_one.css'

export default function Activity_one() {
  return (
    <>
      <div className="cont_activity">
                <div className="search_box_activity">
                    <div className='heading_one'>
                        <h1>Explore</h1>
                        <h5>Enjoy hassle free bookings for Adventure with Budget Trip</h5>
                    </div>
                    <div className="location_activity">
                        <input type="email" class="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Location' />
                        <button className='btn'><i class="fa-solid fa-location-dot"></i></button>
                    </div>
                    <div className="calander my-3">
                        <div className="check_in mx-2">
                            <h5>Date</h5>
                            <input type="date" id="check_in" name="check_in" />
                        </div>
                    </div>
                    <div className='search_btn'>
                        <button className="btn btn-outline-success">Search</button>
                    </div>
                </div>
            </div>
    </>
  )
}
