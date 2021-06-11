import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavbar() {
    return (
      <div className="col-lg-3">
        <div className="dashboard-nav bg-white rounded-lg shadow-xs">
          <ul className="dash-menu-ul">
            <li className="d-block rounded-lg">
              <Link to="/postings">
                <i className="ti-comments font-sm"></i>
                <span>Postings</span>
              </Link>
            </li>
            <li className="d-block rounded-lg">
              <Link to="/sports">
                <i className="ti-pie-chart font-sm"></i>
                <span> Sports</span>
              </Link>
            </li>
            <li className="d-block rounded-lg">
              <li className="d-block rounded-lg">
                <Link to="/users">
                  <i className="ti-user font-sm"></i>
                  <span> Users</span>
                </Link>
              </li>
              <li className="d-block rounded-lg active">
                <Link to="/coaches">
                  <i className="ti-cup font-sm"></i>
                  <span> Coaches</span>
                </Link>
              </li>
              <Link to="/players">
                <i className="ti-package font-sm"></i>
                <span> Players</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    );
}

export default LeftNavbar
