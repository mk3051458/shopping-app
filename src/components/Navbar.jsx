import React from "react";
import CartLogo from '../assets/shopping-cart-solid.svg';
import { Link } from 'react-router-dom'
export default function Navbar({showCart, addedItems}) {
  return (
    <div>
      <div className="navbar">
        <nav>
          <Link to="/home"><h1>SHOP NOW</h1></Link>
          {/* <button
            style={{
              position : "sticky",
              background: "blue",
              color: "white",
              padding: "1rem 1.5rem",
              fontSize: 14,
              borderRadius: 5
            }}
            onClick={showCart}
          >
             Cart : 
          </button> */}
          <img src={CartLogo} alt="" style={{width : 35, cursor : "pointer"}} onClick={showCart}/>
          <p style={{ verticalAlign : "super", transform: "translate(-20px, -12px)", fontSize : 14}}>{addedItems}</p>
        </nav>
      </div>
    </div>
  );
}
