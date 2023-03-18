import React from 'react'
import Accordion from './Accordion'
import Alert_offers from './Alert_offers'
import './book_hotel.css'
import Hotel_items from './Hotel_items'
const Book_hotel = () => {
  return (
    <>
      <div className="book_hotel">
        {/* booking information */}
        <div className="info_booking">
          <h6>Goa</h6>
          <h6>27 march</h6>
          <h6>31 march</h6>
          <h6>1 Room 2 Adult</h6>
        </div>
        <div className="display_hotels">

          {/* filters settings */}
          <div className="filters">

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <h6>Filters</h6>
              <p style={{ cursor: "pointer" }}>clear all</p>
            </div>
            <div className="price_range" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
              <label for="customRange2" className="form-label">Price range</label>
              <input type="range" className="form-range" min="0" max="5" id="customRange2" />
              <p>RS 2000/-</p>
            </div>
            {/* accordion */}
            <Accordion />
          </div>

          <div className="horizontal" style={{ marginLeft: "10px" }}></div>

          {/* showing all the hotels available */}
          <div className="hotels_to_book">
            <Alert_offers msg="Flat 25% off with ICICI Bank Offer. Use Coupon Code : ICICIDC | ICICICC" />
            <Alert_offers msg="Flat 35% off with Kotak Bank Cards. Use Coupon Code : CTKOTAK" />
            <p>Viewing 4010 of 4010 hotels</p>
            <Hotel_items />
            <Hotel_items />
            <Hotel_items />
          </div>
        </div>
      </div>
    </>
  )
}

export default Book_hotel
