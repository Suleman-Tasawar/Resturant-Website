import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center mt-5">
      <div>
        <h3 className="text-2xl  font-black">Suleman Caters</h3>
      </div>
      <nav className="mt-1.5 ml-16">
        <NavLink
             className={({ isActive}) =>
              `ml-5 ${isActive ? "active" : "" }  `
             }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) =>
           `ml-5 ${isActive ? "active" : "" }  `
          }
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "active" : "" }  `
           }
          to="/catering"
        >
          Catering
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "active" : "" }  `
           }
          to="/quote"
        >
          Quotes
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 ${isActive ? "active" : "" }  `
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
