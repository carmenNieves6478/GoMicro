import React from 'react'
import '../Listing Section/listing.css'

import img2 from '../../../Assets/img2.jpg';

import { AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img2} alt="billie" />

                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img2} alt="billie" />

                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img2} alt="billie" />

                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={img2} alt="billie" />

                    <h3>Annual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Futuros Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                            <img src={img2} alt="hola" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Listing;