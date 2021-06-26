import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const SideNavLink = (props) => {
    const data = props.data
    return (
        <li className={`d-block rounded-lg ${ useLocation().pathname === data.route ? 'active' : '' }`}>
            <Link to={data.route}><i className={`ti-${ data.icon } font-sm`}></i><span> {data.text}</span></Link>
            {/* { data.route !== '/profile' ? <Link to={data.route}><i className={`ti-${ data.icon } font-sm`}></i><span> {data.text}</span></Link> : <a href={data.route}><i className={`ti-${ data.icon } font-sm`}></i><span> {data.text}</span></a> } */}
        </li>
    )
}
