import React from 'react';
import "../Hotels/hotel_one.css"

const Hotel_one = () => {
    return (
        <>
            <div className="cont">
                <div className="search_box">
                    <div className='heading_one'>
                        <h1>Search Hotels</h1>
                        <h5>Enjoy hassle free bookings with Budget Trip</h5>
                    </div>
                    <div className="location">
                        <input type="email" class="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Location' />
                        <button className='btn'><i class="fa-solid fa-location-dot"></i></button>
                    </div>
                    <div className="calander my-3">
                        <div className="check_in mx-2">
                            <h5>Check In</h5>
                            <input type="date" id="check_in" name="check_in" />
                        </div>
                        <div className="check_out mx-2">
                            <h5>Check Out</h5>
                            <input type="date" id="check_out" name="check_in" />
                        </div>
                        <div className="dropdown mx-2">
                            <select name="rooms" id="rooms">
                                <option value="volvo">1 Room, 1 Adult</option>
                                <option value="saab">1 Room, 2 Adults</option>
                                <option value="opel">2 Rooms, 4 Adults</option>
                            </select>
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

export default Hotel_one
