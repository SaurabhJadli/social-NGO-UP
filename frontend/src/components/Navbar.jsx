import { Link } from "react-router";

const Navbar = () => {
    return(
      <header>
        <div className="navbar bg-base-100 shadow-sm z-50 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      {/* Menu options display only on mobile */}
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>About us</a></li>
        <li>
          <a>Our Work</a>
          <ul className="p-2">
            <li><a>Education 1</a></li>
            <li><a>Health</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
      </ul>

      {/* Menu options display only on desktop */}

    </div>
    <a className="btn btn-ghost text-xl">NGO Logo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/about-us'>About Us</Link></li>
      <li>
        <details>
          <summary>Our Work</summary>
          <ul className="p-2 bg-base-100 w-40 z-50">
            <li><a>Education</a></li>
            <li><a>Health</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn mr-2">Donate</a>
    <a className="btn">Join Us</a>
  </div>

</div>
      </header>

    )
}

export default Navbar;