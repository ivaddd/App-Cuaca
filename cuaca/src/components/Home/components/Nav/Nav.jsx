import React from "react";
import { Link } from "react-router-dom";
import API from "../API/API";

function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-semibold">
          <Link to="/">Home</Link>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white mr-10">
            <Link to="/API">Countries</Link>
          </li>
          <li className="text-white ">
            <Link to="/region">Weather</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
