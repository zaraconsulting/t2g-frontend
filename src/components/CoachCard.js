import React from 'react'

export const CoachCard = (props) => {
    const data = props.data;
    // console.log(data)

    return (
        <React.Fragment>
            {/* <div className="dashboard-tab p-0 bg-white rounded-lg shadow-xs pl-3">
                <div className="row">
                    <div className="col-lg-4 offset-sm-4 text-center"> */}
                        <div className="text-center">
                            <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src="https://via.placeholder.com/300x300.png" alt="." className="shadow-sm rounded-lg w-100" /></figure>
                            <h2 className="fw-900 font-sm text-grey-900 mt-3">{data.name}</h2>
                            <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">{data.team}</h4>
                            <p className="text-grey-500 fw-500 mb-3 font-xsss mb-4">{data.email}</p>
                        </div>
                        {/* <!-- <a href="#" className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-lg">Upload New Photo</a> --> */}
                {/* </div>   */}
            {/* </div> */}


        </React.Fragment>
    )
}
