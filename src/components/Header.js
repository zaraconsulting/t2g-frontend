import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';



export const Header = () => {
    const { currentUser, logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }
    

    return (
        <div className="header-wrapper shadow-xs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 navbar">
                        <a href="index.html" className="logo"><h1 className="fredoka-font ls-3 fw-700 text-current display1-size">T2G Manager</h1></a>
                    </div>
                    <div className="col-lg-4 text-right auth-buttons">
                        { 
                            currentUser.loggedIn
                         ? 
                            <Link onClick={(e) => handleLogout(e)} to="" style={{ marginRight: '10px' }} className="header-btn bg-dark fw-500 text-white font-xssss" data-toggle="modal" data-target="#Modallogin">Logout</Link>
                        :
                            <React.Fragment>
                                <a href="." style={{ marginRight: '10px' }} className="header-btn bg-dark fw-500 text-white font-xssss" data-toggle="modal" data-target="#Modallogin">Login</a>
                                {/* <a href="." className="header-btn bg-current fw-500 text-white font-xssss" data-toggle="modal" data-target="#ModalregisterD">Register</a> */}
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
