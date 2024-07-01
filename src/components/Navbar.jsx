import React from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center font-serif mt-5">
      <Link to="/">
        <div>
          <h3 className="text-2xl  font-normal">Suleman Caters</h3>
        </div>
      </Link>
      <nav className="mt-1.5 ml-16">
        <NavLink
             className={({ isActive}) =>
              `ml-5 ${isActive ? "underline" : "" }  `
             }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) =>
           `ml-5 ${isActive ? "underline" : "" }  `
          }
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "underline" : "" }  `
           }
          to="/catering"
        >
          Catering
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "underline" : "" }  `
           }
          to="/quote"
        >
          Quotes
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "underline" : "" }  `
           }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
