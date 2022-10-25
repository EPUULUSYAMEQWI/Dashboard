import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Paza Forum</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Dashboard</p>
                <li>
                <NavLink className="nav-link" >   
                    <a href="#">Forums</a>
                </NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to={'/new-post'}>   
                    <a href="#">New Post</a>
                </NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to={'/posts'}>   
                    <a href="#">Community</a>
                </NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to={''}>   
                    <a href="#">Contact Us</a>
                </NavLink> 
                </li>
            </ul>
        </nav>
    );
}
export default Sidebar;
