import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Sidebar.css";

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" data-bs-toggle="dropdown" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/sign-in'}>   
                            <a className="nav-link active" aria-current="page">Login</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/sign-up'}>   
                            <a className="nav-link active" aria-current="page">Register</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/dashboard'}>   
                            <a className="nav-link active" aria-current="page">Search</a>
                        </Link>
                    </li>
{/* 
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Topbar;
