import React, { useState, useContext } from 'react';
import $ from 'jquery';
import firebase from '../util/firebase';
import { UserList } from '../components/UserList';
import { DataContext } from '../contexts/DataProvider';
import { titleCase } from '../contexts/_helpers';

export const Manage = () =>
{
    const db = firebase.database();
    const { roles, users } = useContext(DataContext);
    const [ role, setRole ] = useState({ disabled: true, value: "0" });

    const handleSelectRole = (e) =>
    {
        // setRole(e.target.value);
        setRole({ disabled: true, value: e.target.value });
        $('#remaining-form').css('display', 'block');
        $('#manage-email-container').css('display', 'block');
        $('#manage-team-container').css('display', 'block');
        $('#manage-submit-container').css('display', 'block');
        $('#manage-fname-container').css('display', 'block');
        $('#manage-lname-container').css('display', 'block');
    }
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // have to get values outside of firebase user creation 
        let firstName = $('#manage-fname').val();
        let lastName = $('#manage-lname').val();
        let email = $('#manage-email').val();
        let team = $('#manage-team').val();

        setRole({ disabled: false, value: "0" });

        // Authenticate with Firebase to create new user
        firebase.auth().createUserWithEmailAndPassword($('#manage-email').val(), $('#manage-email').val())
            .then((userCredential) =>
            {
                // Create a new user
                var newUser = userCredential.user;
                console.log('Successfully registered...')

                // Get role name
                let newRole;
                for (const r of roles)
                {
                    if (r.id === parseInt($('#manage-role').val()))
                    {
                        newRole = r;
                        break;
                    }
                }

                // Create Firebase user obj
                let userObj = {
                    id: newUser.uid,
                    firstLogin: new Date().toDateString(),
                    firstName,
                    lastName,
                    email,
                    team,
                    role: newRole
                }

                // Add user to auth
                db.ref(`users/${ newUser.uid }`).set(userObj);

            })
            .catch((error) =>
            {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode);
                console.log(errorMessage);
            });

        // TODO: Set role to default select option
        // Reset form
        $('#manage-role').val("0");
        $('#manage-email').val('');
        $('#manage-team').val('');
        $('#manage-fname').val('');
        $('#manage-lname').val('');
    }

    return (
        <div style={role ? { overflowY: 'scroll', maxHeight: '679px' } : { overflowY: 'hidden' }} className="dashboard-tab cart-wrapper p-4 bg-white rounded-lg shadow-xs">
            <div className="row">
                <div className="col-lg-12 mt-0">

                    <div className="card w-100 p-0 rounded-xxl border-0 bg-white theme-light-bg shadow-md">
                        <div className="card-body p-4">
                            <form id="creation-form" onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">

                                    <div className="col-lg-12 mb-0">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss" htmlFor="manage-role">Create a new user</label>
                                            <select defaultValue={"0"} onChange={(e) => handleSelectRole(e)} className="form-control" name="manage-role" id="manage-role">
                                                <option disabled={true} value={"0"}>Please select a role</option>
                                                {roles.map(r => <option key={r.id} value={r.id}>{titleCase(r.name)}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="manage-fname-container" style={{ display: 'none' }} className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" htmlFor="manage-fname">First Name</label>
                                            <input type="text" id="manage-fname" name="manage-fname" className="form-control" />
                                        </div>
                                    </div>

                                    <div id="manage-lname-container" style={{ display: 'none' }} className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" htmlFor="manage-lname">Last Name</label>
                                            <input type="text" id="manage-lname" name="manage-lname" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div id="manage-email-container" style={{ display: 'none' }} className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss" htmlFor="manage-email">Email</label>
                                            <input type="email" name="manage-email" id="manage-email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="manage-team-container" style={{ display: 'none' }} className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss" htmlFor="manage-team">Team Name</label>
                                            <input type="text" name="manage-team" id="manage-team" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="manage-submit-container" style={{ display: 'none' }} className="col-lg-12 mb-5">
                                        <button type="submit" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block" style={{ border: 'none' }}>Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div className="card mt-3 border-0">
                            <div className="card-body d-flex justify-content-between align-items-end p-0">
                                <div className="form-group mb-0 w-100">
                                    <input type="file" name="file" id="file" className="input-file" />
                                    <label htmlFor="file" className="rounded-lg text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                        <i className="ti-cloud-down large-icon mr-3 d-block"></i>
                                        <span className="js-fileName">Drag and drop or click to replace</span>
                                    </label>
                                </div>
                            </div>
                        </div> */}
                </div>

                <div className="col-lg-12 mt-3 cart-wrapper">
                    <div className="table-content table-responsive table-striped shadow-md">
                        <table className="table text-center bg-white rounded-xxl ">
                            <thead className="bg-greyblue rounded-lg">
                                <tr>
                                    <th className="border-0 p-3">Name</th>
                                    <th className="border-0 p-3">Role</th>
                                    <th className="border-0 p-3">Team</th>
                                    <th className="border-0 p-3">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UserList users={users} />
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {/* <div className="row">
                <div className="col-lg-4 offset-sm-4 text-center">
                    <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100">
                        <img src="https://via.placeholder.com/300x300.png" alt="image" className="shadow-sm rounded-lg w-100" />
                    </figure>
                    <h2 className="fw-900 font-sm text-grey-900 mt-3">Surfiya Zakir</h2>
                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Brooklyn</h4>
                     <a href="#" className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-lg" />Upload New Photo</a>
                </div>
            </div> */}

        </div>
    )
}
