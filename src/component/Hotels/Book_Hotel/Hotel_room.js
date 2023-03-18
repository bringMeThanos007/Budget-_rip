import React from 'react'
import Carousel from './Carousel'
import './hotel_room.css'
import Review from './Review'

const hotel_romm = () => {
  return (
    <>
      {/* intro */}
      <div className="room_detail">
        <p>⭐⭐⭐⭐⭐</p>
        <h6><strong> Mariners Bay |1 BHK Pool Apartment </strong><br /> Calangute</h6>
        <p>Book for 5 and pay for 4 Night - CTB5G1</p>
      </div>

      {/* img carousel */}
      <div className="room_img">
        <Carousel />
      </div>

      {/* for booking button */}
      <div className="room_book">
        <div style={{ display: "flex", flexDirection: "column" }} >
          <h6>₹2,347 <br /> <small>+₹282 taxes</small></h6>
          <p style={{ color: "red" }}>Book for 5 and pay for 4 Night - CTB5G1</p>
        </div>
        <div>
          <button className='btn' >Book Now </button>
        </div>
      </div>

      {/* review tab */}
      <div className="display_room">

        {/* filters settings */}
        <div className="reviews">

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
            <h6>Traveller reviews</h6>
            <p>Verified reviews</p>
          </div>

          <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "start", width: "100%" }}>
            <h1 style={{ marginRight: "10px", color: "red" }}>4.5  </h1>
            <p>Excellent <br />⭐⭐⭐⭐</p>
          </div>

          <div>
            <h6>What travellers rated on</h6>
            <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p>Location</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p>Sleep Quality</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p>Rooms</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p>Service</p>
              <p>⭐⭐⭐</p>
            </div>
            <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <p>Cleanliness</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>

        </div>

        <div className="horizontal" style={{ marginLeft: "10px" }}></div>

        {/* showing all the hotels available */}
        <div className="room_to_book">
          <Review title="Thanks to St. Laurns Staffs" stars="⭐⭐⭐⭐⭐" date="27 Feb, 2023" by="by sreetravelsblr" msg="I travel to Shirdi almost every month. Every time will stay at St.Laurns. Here we get peace of mind, especially while praying at Dwaraka Mai. The way they perform the aarthi is mind blowing. Thanks to the staffs of St. Laurns"  />
          <Review title="Best peaceful Stay, Best care for family" stars="⭐⭐⭐⭐" date="26 Feb, 2023 " by="by 589indranilm" msg="Special Thanks Sidhhant, for great support and excellent quality food for us and specially for the young one. Thanks to Roop for excellent booking support, and Manager Abhishek for extending our stay in hotel despite having no room for few days and no booking from us. This save us from lot of hassel as young one fell sick. Young one recover quickly with hotel s doctor and appropriate care by staffs and sidhant s food. And thank you Rahul, for his guidence so we had darshan on the same day we checked in. 😀 Thanks a lot St Lauren Shirdi." />
          <Review title="Wonderful Trip to St Laurn’s Spiritual Resort" stars="⭐⭐⭐⭐⭐" date="26 Feb, 2023 " by="by Mukhs" msg="Nice resort and nice looking good. Wonderful staying in this resort nicely cleaning for housekeeping service. Specially thanks for Mr. Sudhir Kumar for housekeeping friendly. Thank you for all staff and resort"/>
          
        </div>
      </div>
    </>
  )
}

export default hotel_romm
