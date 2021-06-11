import React from 'react'

export const Footer = () => {
    return (
        <div className="footer-wrapper mt-0 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="footer-about col-md-4 col-lg-4 col-sm-9 col-xs-12 md-mb25">
                                <a href="index.html" className="logo"><img src="https://via.placeholder.com/133x53&text=Logo" alt="logo" /></a>
                                <p className="w-100 mt-lg-5 mt-4">Address 1, Address 2 City, <br />State ZIP 1-XXX-XXX-XXXX <br /> mail@mail.com</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item mr-3"><a href="."><i className="ti-facebook"></i></a></li>
                                    <li className="list-inline-item mr-3"><a href="."><i className="ti-twitter-alt"></i></a></li>
                                    <li className="list-inline-item mr-3"><a href="."><i className="ti-linkedin"></i></a></li>
                                    <li className="list-inline-item"><a href="."><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="footer-about col-md-4 col-lg-4 col-xs-12">
                                <h5 className="mb-3">About</h5>
                                <ul>
                                    <li><a href=".">FAQ</a></li>
                                    <li><a href=".">Term of use</a></li>
                                    <li><a href=".">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="footer-about col-md-4 col-lg-4 col-xs-12">
                                <h5 className="mb-3">Location</h5>
                                <p style={{ width: "100%" }}>Address 1, Address 2 City, State ZIP <br />1-XXX-XXX-XXXX</p>
                            </div>
                        </div>
                        <div className="middle-footer mt-5 pt-4"></div>
                    </div>
                    <div className="col-sm-12 lower-footer pt-0"></div>
                    <div className="col-sm-6 col-xs-12">
                        <p className="copyright-text">© 2021 copyright. All rights reserved.</p>
                    </div>
                    <div className="col-sm-6 col-xs-12 text-right">
                        <p className="copyright-text float-right">Website by <a href={process.env.REACT_APP_DEVELOPER_URL} target="_blank" rel="noreferrer" className="">Zara Consulting</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
