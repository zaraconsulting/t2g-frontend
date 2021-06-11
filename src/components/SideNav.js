import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const SideNav = () =>
{
    const { currentUser, logout } = useAuth();
    // console.log(currentUser.loggedIn);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }


    return (
        <div className="dashboard-nav bg-white rounded-lg shadow-xs">
            <a href="." className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
            <ul className="dash-menu-ul">
                {
                    currentUser.loggedIn
                    ?
                    <React.Fragment>
                            <li className="d-block rounded-lg active"><Link to="/"><i className="ti-package font-sm"></i><span> Teams</span></Link></li>
                            <li className="d-block rounded-lg"><Link to="/profile"><i className="ti-user font-sm"></i><span> Profile</span></Link></li>
                            <li className="d-block rounded-lg "><Link to="/password"><i className="ti-lock font-sm"></i><span> Password</span></Link></li>
                            <li className="d-block rounded-lg"><Link to="" onClick={(e) => handleLogout(e)}><i className="ti-power-off font-sm"></i><span> Logout</span></Link></li>
                    </React.Fragment>
                    :
                    <li className="d-block rounded-lg active"><a href="." data-toggle="modal" data-target="#Modallogin"><i className="ti-download font-sm"></i><span> Login</span></a></li>
                }
            </ul>
        </div>
    )
}
