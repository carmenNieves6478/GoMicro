import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar Section/Sidebar';
import Body from './Components/Body Section/Body';
import Places from './Components/Places Section/Places';
import Restaurants from './Components/Restaurant Section/Restaurants';
import Hotels from './Components/Hotels Section/Hotels';
import Favoritos from './Components/Favoritos Section/Favoritos';

function Dashboard() {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/places" element={<Places />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;