import React from 'react'
import './dashboard.css'
import DashboardNav from './DashboardNav'
import {
Outlet
} from "react-router-dom";
import Home from '../Home';
import Register from './Register';

export default function DashBoard() {
    return (
        <>
            <div className="dashboard">

                {/* filters settings */}
                <div className="nav_dashboard">
                    <DashboardNav />
                </div>

                <div className="horizontal" style={{ marginLeft: "10px" }}></div>

                {/* showing all the hotels available */}
                <div className="edit_details">

                    <Outlet/>

                </div>
            </div>

        </>
    )
}
