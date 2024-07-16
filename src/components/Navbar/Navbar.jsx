import { Link } from "react-router-dom";
import navbarCSS from "./navbar.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
const useProduct = () => useContext(AppContext);
const Navbar = () => {
  const { search, setSearch } = useProduct();

  return (
    <nav className={navbarCSS.navbar}>
      <div className={navbarCSS.navItem}>
        <Link to="/">
          <img
            className={navbarCSS.img}
            src="/flipkart-plus_8d85f4.png"
            alt="logo"
          />
        </Link>
        <div className={navbarCSS.search_box}>
          <form className={navbarCSS.searchForm}>
            {/* <span className={navbarCSS.icon}>&#128269;</span> */}
            <label className={navbarCSS.icon}><CiSearch /></label>
            <input
              className={navbarCSS.input}
              onChange={() => setSearch(event.target.value)}
              value={search}
              type="search"
              placeholder="Search for Products, Brands and More..."
            />
          </form>
        </div>
        <div className={navbarCSS.login_div}>
          <Link to="/login" className={navbarCSS.login_link}>
          <div className={navbarCSS.linkContainer}>  <FaUserCircle /> <h3>Login</h3></div>
          </Link>
        </div>
        <Link to="/cart" >
          <div className={navbarCSS.linkContainer}>
            <BsCart3 className={navbarCSS.cartIcon} /> 
            <h3>Cart</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
