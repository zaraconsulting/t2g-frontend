import React, { useState } from 'react';
import firebase from '../util/firebase';

export default function Input() {

    const [title, SetTitle] = useState('');

    const handleOnChange = (e) => {
        SetTitle(e.target.value)
        };
 
    const createTeamAdmin = () => {
        const teamAdminRef = firebase.database().ref("Admin");
        const admin = {
          
            title
           
    };
    teamAdminRef.push(admin);
  };

    return (
      <div>
        <br />
        <div className="col-lg-12 mt-0">
          <div className="card w-100 p-0 rounded-xxl border-0 bg-white theme-light-bg  shadow-md">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-9">
                  <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                    CRUD Functionality Test{" "}
                  </h2>
                  <h4 className="fw-900 text-grey-500 font-xssss ls-lg text-uppercase mb-0 mt-1">
                    {" "}
                    This is the input
                  </h4>
                  <input type="text" onChange={handleOnChange} value={title} />
                  <button onClick={createTeamAdmin}>
                    Add Team Admin
                  </button>
                </div>
                <div className="col-3 text-left">
                  <div id="chart-revinuee"></div>
                </div>
                <div className="col-12 p-0 mt-3">
                  <div id="chart-usersMultiplee"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-center">
                  <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                    <div className="mr-2 bg-success p-2 mt-0 rounded-circle"></div>{" "}
                    this week
                  </h4>
                </div>
                <div className="col-6 text-center">
                  <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                    <div className="mr-2 bg-instagram p-2 mt-0 rounded-circle"></div>{" "}
                    this month
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  