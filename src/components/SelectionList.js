import React from 'react'
import { useLocation } from 'react-router-dom';

export const SelectionList = (props) => {
    const data = props.data;
    const path = useLocation().pathname;

    const handleSelectPlayer = (data) => {
        props.setCardData({ ...data, selected: true });
    }
    

    return (
        <div id="selection-list-info" className="col-lg-4 chat-left border-right-light p-4">
            <div className="section full mt-2 mb-2">
                <ul className="list-group list-group-flush d-flex justify-content-between">
                    {data.list.map(info => (
                        <div key={info.name}>
                            <a href="#sports-card-info">
                                <li key={info.email} onClick={() => handleSelectPlayer(info)} className="rounded-lg bg-transparent pt-3 pb-3 pr-0 border-0 list-group-item no-icon pl-0">
                                    <figure className="avatar float-left mb-0 mr-2">
                                        <img src="https://via.placeholder.com/80x80.png" alt="." className="w45" />
                                    </figure>
                                    <h3 className="fw-700 mb-0 mt-1 d-inline-block">
                                        <a className="font-xsss text-grey-900 d-block" href={path === '/' ? '#card-info' : '#sports-card-info'}>{info.firstName} {info.lastName}</a>
                                        <span className="d-inline fw-500 text-grey-500">{info.team}</span>
                                    </h3>
                                    <h4 className="fw-600 mb-0 text-right text-grey-500 font-xssss float-right mt-2 d-inline-block">
                                        {/* <i className="ti-star d-block mt-1"></i> */}
                                    </h4>
                                </li>
                            </a>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
