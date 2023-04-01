import React from 'react';
import {Link} from "react-router-dom";
import {airplane, cryptoCoin, trashBox} from "../assets";
import '../app.css'

const Navbar = () => {
    return (
        <div className="header">
            <Link className="links-wrapper" to="/crypto">
                <p className="header-text">Crypto-Coins</p>
                <img className="links-img" src={cryptoCoin} alt="Crypto-Coins"/>
            </Link>
            <Link className="links-wrapper" to="/">
                <p className="header-text">Airplane Tickets</p>
                <img className="links-img" src={airplane} alt="Airplane Tickets"/>
            </Link>
            <Link className="links-wrapper" to="/trashBox">
                <p className="header-text">Shopping Basket</p>
                <img className="links-img" src={trashBox} alt="trashBox"/>
            </Link>
        </div>
    );
};

export default Navbar;