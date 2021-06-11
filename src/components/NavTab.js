import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavTab = (props) =>
{
    return (
        <li className={`d-block rounded-lg ${ props.active ? props.active : '' }`}>
            <NavLink isActive={(match, location) => false ? !match : true} to={ props.to }>
                <i className={`${ props.icon } font-sm`}></i>
                <span> { props.routeName }</span></NavLink>
        </li>
    )
}
