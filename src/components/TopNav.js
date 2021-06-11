import React from 'react'
import { Link } from 'react-router-dom';

function TopNav() {
    return (
      <React.Fragment>
        {/* header wrapper */}
        <div className="header-wrapper shadow-xs">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 navbar">
                <Link to="/postings" className="logo">
                  <h1 className="fredoka-font ls-3 fw-700 text-current display1-size">
                    T2G
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* header wrapper */}
      </React.Fragment>
    );
}

export default TopNav
