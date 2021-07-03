import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import firebase from '../util/firebase';

export const Profile = () =>
{
    const { currentUser } = useAuth();
    const db = firebase.database();

    const handleBasicInfo = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target[ 'contact-first-name' ].value,
            lastName: e.target[ 'contact-last-name' ].value,
            email: e.target[ 'contact-email' ].value,
            team: e.target[ 'contact-team' ].value,
            role: e.target[ 'contact-role' ].value,
            // address: e.target[ 'contact-address' ].value,
            // city: e.target[ 'contact-city' ].value,
            // postal: e.target[ 'contact-postal' ].value
        }

        try {
            // update database with new user info from submission
            // db.ref().child(`users/${formData.role}/${currentUser.user.uid}`).update(formData);
            // var updates = {
                
            // }
            db.ref(`users/${ formData.role }/${ currentUser.user.uid }`).update(formData);

            // clear form data
            // e.target[ 'contact-first-name' ].value = '';
            // e.target[ 'contact-last-name' ].value = '';
            // e.target[ 'contact-email' ].value = '';
            // e.target[ 'contact-phone' ].value = '';
            // e.target[ 'contact-country' ].value = '';
            // e.target[ 'contact-address' ].value = '';
            // e.target[ 'contact-city' ].value = '';
            // e.target[ 'contact-postal' ].value = '';
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
            <div className="row">
                <div className="col-lg-4 offset-sm-4 text-center">
                    {/* <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src="https://via.placeholder.com/300x300.png" alt="something" className="shadow-sm rounded-lg w-100" /></figure> */}
                    {/* <h2 className="fw-900 font-sm text-grey-900 mt-3">{ currentUser.user.email }</h2> */}
                    {/* <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Team Name</h4> */}
                    {/* <a href="." className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-lg">Upload New Photo</a> */}
                </div>
            </div>
            <form onSubmit={(e) => handleBasicInfo(e)} id="contact-basic-info">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-first-name">First Name</label>
                            <input type="text" name="contact-first-name" className="form-control" defaultValue={''} />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-last-name">Last Name</label>
                            <input type="text" name="contact-last-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-email">Email</label>
                            <input type="text" name="contact-email" className="form-control" disabled={true} defaultValue={currentUser.user.email} />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-team">Team</label>
                            <input type="text" name="contact-team" className="form-control" />
                        </div>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-country">Country</label>
                            <input type="text" name="contact-country" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-address">Address</label>
                            <input type="text" name="contact-address" className="form-control" />
                        </div>
                    </div>
                </div> */}

                <div className="row">
                    {/* <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-city">City</label>
                            <input type="text" name="contact-city" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="contact-postal">Postal Code</label>
                            <input type="text" name="contact-postal" className="form-control" />
                        </div>
                    </div> */}

                    <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss" htmlFor="contact-role">Role</label>
                          <select className="form-control" name="contact-role" id="form-role">
                            <option disabled selected>Please select a role</option>
                            <option value='owners'>Owner</option>
                            <option value='coaches'>Coach</option>
                            <option value='players'>Player</option>
                          </select>
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

                    {/* <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Description</label>
                        <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..." spellCheck="false"></textarea>
                    </div> */}

                    <div className="col-lg-12 mb-5">
                        <button type="submit" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block profile-form-btn">Click to save</button>
                    </div>
                </div>
            </form>
            <form onSubmit={(e) => console.log(e)} id="contact-social-info" action="#">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb-4 font-xs fw-700 mont-font">Social Network</h4>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Facebook</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Twitter</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Linkedin</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Instagram</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-12 mb-5 mt-2">
                        <a href="." className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
