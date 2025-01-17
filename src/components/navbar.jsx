import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <Link className="link" to="/cart">
          Cart
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
