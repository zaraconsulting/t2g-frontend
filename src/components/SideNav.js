import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { SideNavLink } from './SideNavLink';

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
                        <SideNavLink data={{ route: '/', icon: 'search', text:'Search' }} />
                        <SideNavLink data={{ route: '/postings', icon: 'pin2', text:'Postings' }} />
                        <SideNavLink data={{ route: '/sports', icon: 'world', text:'Sports' }} />
                        <SideNavLink data={{ route: '/profile', icon: 'user', text:'Profile' }} />
                        <SideNavLink data={{ route: '/password', icon: 'lock', text:'Password' }} />
                        <li className="d-block rounded-lg"><Link to="" onClick={(e) => handleLogout(e)}><i className="ti-power-off font-sm"></i><span> Logout</span></Link></li>
                        <SideNavLink data={{ route: '/manage', icon: 'settings', text:'Manage' }} />
                    </React.Fragment>
                    :
                    <li className="d-block rounded-lg active"><a href="." data-toggle="modal" data-target="#Modallogin"><i className="ti-download font-sm"></i><span> Login</span></a></li>
                }
            </ul>
        </div>
    )
}
