import React from 'react';
import './Page_3.css';
import myImg1 from '../../img/punjab.jpg';
import myImg2 from '../../img/kerala.jpg';
import myImg3 from '../../img/mumbai.jpg';
import myImg4 from '../../img/up.jpg';
import myImg5 from '../../img/megha.jpg';
import myImg6 from '../../img/rajasthan.jpg';
import map from '../../img/map_one.png'

export default function Page_3() {
    return (
        <div className='page_3'>
            <div className="blur">
                <div className="rw">
                    <h1>Where We ROAM</h1>
                    <img className="map" src={map} alt="" />
                </div>
            
            <div className="container"  style={{ height: 'inherit', marginBottom: '20vh' }}>
                <div className="row" id='row'>
                    <h1 id='tour'><strong>Our Top Destination</strong></h1>
                    <div className="horizontalLine"></div>
                    <div className="col-md-4 mb-3">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg1} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting.</h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-md-4 mb-3">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg2} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting.</h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="col-md-4 mb-3">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg3} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting.</h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="col-md-4 mb-3">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg4} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting.</h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="col-md-4 mb-3">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg5} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting.</h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="col-md-4 mb-4">
                        <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                            <img src={myImg6} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-text">This is a wider card with supporting </h6>
                                <p className="card-text"><i class="fa-solid fa-hand-pointer"></i></p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            </div>
        </div>


    )
}
                // <div className="row" >
                //     <h1 id='tour'><strong>Tour Destination</strong></h1>
                //     <div className="horizontalLine"></div>
                //     {/* cards */}
                //     <div className="col-md-4 mb-3">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg1} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

                //     {/* cards */}
                //     <div className="col-md-4 mb-3">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg2} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

                //     {/* cards */}
                //     <div className="col-md-4 mb-3">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg3} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

                //     {/* cards */}
                //     <div className="col-md-4 mb-3">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg4} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

                //     {/* cards */}
                //     <div className="col-md-4 mb-3">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg5} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

                //     {/* cards */}
                //     <div className="col-md-4 mb-4">
                //         <div className="card text-white " style={{ border: '2px solid #3b3c36', borderRadius: '10px 10px' }}>
                //             <img src={myImg6} className="card-img" alt="..." />
                //             <div className="card-img-overlay">
                //                 <h5 className="card-title">Card title</h5>
                //                 <h6 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h6>
                //                 <p className="card-text">Book</p>
                //             </div>
                //         </div>
                //     </div>

