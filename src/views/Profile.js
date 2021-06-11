import React from 'react'

export const Profile = () =>
{
    return (
        <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
            <div className="row">
                <div className="col-lg-4 offset-sm-4 text-center">
                    <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src="https://via.placeholder.com/300x300.png" alt="something" className="shadow-sm rounded-lg w-100" /></figure>
                    <h2 className="fw-900 font-sm text-grey-900 mt-3">Test User</h2>
                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Brooklyn</h4>
                    {/* <a href="." className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-lg">Upload New Photo</a> */}
                </div>
            </div>
            <form action="#">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">First Name</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Last Name</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Email</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Phone</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Country</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Address</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">City</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Postal Code</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                        <div className="card mt-3 border-0">
                            <div className="card-body d-flex justify-content-between align-items-end p-0">
                                <div className="form-group mb-0 w-100">
                                    <input type="file" name="file" id="file" className="input-file" />
                                    <label htmlFor="file" className="rounded-lg text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                        <i className="ti-cloud-down large-icon mr-3 d-block"></i>
                                        <span className="js-fileName">Drag and drop or click to replace</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Description</label>
                        <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..." spellCheck="false"></textarea>
                    </div>

                    <div className="col-lg-12 mb-5">
                        <a href="." className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                    </div>
                </div>

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


                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb-4 font-xs fw-700 mont-font mt-3">Contact Information</h4>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Country</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">City</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Address</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xsss" htmlFor="comment-name">Postal Code</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mb-0 mt-2 pl-0">
                    <a href="." className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                </div>
            </form>
        </div>
    )
}
