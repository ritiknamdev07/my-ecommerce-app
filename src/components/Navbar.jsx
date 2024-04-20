
import { Link } from "react-router-dom"
import navbarCSS from "./navbar.module.css"
const Navbar = () => {
    return( <nav className={navbarCSS.navbar}><div className={navbarCSS.navItem}>
    <Link to="/">
    <img className={navbarCSS.img} src="/flipkart-plus_8d85f4.png" alt="logo" />
    </Link>
    <div className={navbarCSS.search_box}>
    <form className={navbarCSS.searchForm}>
      <input className={navbarCSS.input} type="search" placeholder="Search..." />
     <span className={navbarCSS.icon}>&#128269;</span>
    </form>
    </div>
    <div className={navbarCSS.login_div}>
      <Link  to="/login" className={navbarCSS.login_link}>Login</Link>

    </div>
    <h3><Link to = "/cart" >Cart</Link></h3>
    </div>
</nav>)
}

export default Navbar