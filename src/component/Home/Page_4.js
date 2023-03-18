import React, { useEffect } from 'react';
import './Page_4.css';
// import ballons from '../../img/background/ballon.png'


export default function Page_4() {
    // let ballon = document.getElementsByClassName('ballon');
    // useEffect(()=>{
    //     window.addEventListener('scroll',function(){
    //         let value = this.window.scrollY;
    //         console.log(value)
    //         ballon.style.marginRight = value*5 + "px";
    //     })
    // },[])
    
    return (
        <div className='page_4'>
        {/* <img className='ballon' src={ballons} alt="" /> */}
        <h1>Superb Facilities</h1>
                <p>We Provide amazing facilities Which will make your Adventure astonishing with stunning discounts</p>
            <div className="container">
                <div className="row" >
                {/* Card 1 */}
                    <div className="col-md-4 ">
                        <h3><i class="fa-solid fa-plane-departure"></i><strong> Book Flight tickest</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <h3><i class="fa-solid fa-train-subway"></i><strong> Book Train tickest</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <h3><i class="fa-solid fa-bed"></i><strong> Book Hotels</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <h3><i class="fa-solid fa-cable-car"></i><strong> Plan Adventures</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <h3><i class="fa-solid fa-hotel"></i><strong> Resort Reservation</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <h3><i class="fa-solid fa-utensils"></i><strong> Restaurant Reservation</strong></h3>
                        <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
