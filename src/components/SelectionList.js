import React from 'react'
import { Link } from 'react-router-dom';

export const SelectionList = (props) => {
    const data = props.data;
    
    const handleSelectPlayer = (data) => {
        props.setPlayerCardData(data);
    }

    return (
        <div id="selection-list-info" className="col-lg-4 chat-left border-right-light p-4">
            <div className="section full mt-2 mb-2">
                <ul className="list-group list-group-flush d-flex justify-content-between">
                    {data.list.map(info => (
                        <a href="#card-info">
                            <li key={info.email} onClick={() => handleSelectPlayer(info)} className="rounded-lg bg-transparent pt-3 pb-3 pr-0 border-0 list-group-item no-icon pl-0">
                                <figure className="avatar float-left mb-0 mr-2">
                                    <img src="https://via.placeholder.com/80x80.png" alt="." className="w45" />
                                </figure>
                                <h3 className="fw-700 mb-0 mt-1 d-inline-block">
                                    <Link className="font-xsss text-grey-900 d-block" to="">{info.name}</Link>
                                    <span className="d-inline fw-500 text-grey-500">{info.team}</span>
                                </h3>
                                <h4 className="fw-600 mb-0 text-right text-grey-500 font-xssss float-right mt-2 d-inline-block">
                                    {/* <i className="ti-star d-block mt-1"></i> */}
                                </h4>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    )
}
