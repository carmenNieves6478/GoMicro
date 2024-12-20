import React from 'react'
import '../Sidebar Section/sidebar.css'
import '../../../../App.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/logo.png'

import {
    MdDashboard, MdAccountCircle, MdLocationSearching,
    MdPlace, MdRestaurant, MdHotel
} from "react-icons/md";
import { IoMdMap, IoMdHeart } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
    const menuItems = [
        {
            path: '/dashboard',
            icon: <MdDashboard className="icon" />,
            text: 'Inicio'
        },
        {
            path: '/dashboard/places',
            icon: <MdPlace className="icon" />,
            text: 'Lugares'
        },
        {
            path: '/dashboard/restaurants',
            icon: <MdRestaurant className="icon" />,
            text: 'Restaurantes'
        },
        {
            path: '/dashboard/hotels',
            icon: <MdHotel className="icon" />,
            text: 'Hoteles'
        },
        {
            path: '/dashboard/favoritos',
            icon: <IoMdHeart className="icon" />,
            text: 'Favoritos'
        }
    ];

    return (
        <div className='sideBar grid'>
            <div className='logoDiv flex'>
                <img src={Logo} alt="Image name" />
                <h2>GoMicro</h2>
            </div>

            <div className="menuDiv">
                <h3 className='divTitle'>QUICK MENU</h3>
                <ul className='menuLists grid'>
                    {menuItems.map((item) => (
                        <li className="listItem" key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `menuLink flex ${isActive ? 'active' : ''}`
                                }
                            >
                                {item.icon}
                                <span className="smallText">{item.text}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Tienes problemas, contactacnos 933398159.</p>
                    <button className="btn">Go to help center</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar