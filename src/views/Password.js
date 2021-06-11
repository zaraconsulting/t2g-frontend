import React from 'react'

export const Password = (props) =>
{
    console.log(props)
    return (
        <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">

            <form action="#">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb-4 font-xs fw-700 mont-font mt-3">Change Password</h4>
                    </div>
                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Current Password</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Change Password</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Confirm Change Password</label>
                            <input type="text" name="comment-name" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mb-0">
                        <a href="." className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
