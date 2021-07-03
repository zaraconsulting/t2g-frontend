import React from 'react'
import { titleCase } from '../contexts/_helpers'

export const UserCell = (props) => {
    return (
        <React.Fragment>
            <td className="product-p pl-4">
                <span className="product-price-wrapper">
                    <span className="money text-grey-500 fw-500">{`${ props.u.firstName } ${ props.u.lastName }`}</span>
                </span>
            </td>
            <td className="product-headline wide-column">
                <span className="product-price-wrapper">
                    <span className="money text-grey-500 fw-500">{ titleCase(props.u.role.name) }</span>
                </span>
            </td>
            <td className="product-p">
                <span className="product-price-wrapper">
                    <span className="money text-grey-500 fw-500">{ props.u.team }</span>
                </span>
            </td>
            <td className="product-remove text-left"><a href="."><i className="text-danger ti-trash font-xs"></i></a></td>
        </React.Fragment>
    )
}
