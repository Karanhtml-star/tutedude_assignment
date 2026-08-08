import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const navStyle = ({ isActive }) =>
        isActive
            ? "text-yellow-300 font-bold"
            : "text-white hover:text-yellow-200 transition";

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    MyWebsite
                </NavLink>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-6">

                        <li>
                            <NavLink to="/" className={navStyle}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard" className={navStyle}>
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/login" className={navStyle}>
                                Login
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/signup"
                                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Sign Up
                            </NavLink>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;