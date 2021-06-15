import React from 'react'

export const PlayerCard = (props) => {
    const data = props.data;
    console.log(data)

    return (
        <React.Fragment>
            {/* <div className="dashboard-tab p-0 bg-white rounded-lg shadow-xs pl-3">
                <div className="row">
                    <div className="col-lg-4 offset-sm-4 text-center"> */}
                        <div className="text-center">
                            <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src="https://via.placeholder.com/300x300.png" alt="." className="shadow-sm rounded-lg w-100" /></figure>
                            <h2 className="fw-900 font-sm text-grey-900 mt-3">{data.name}</h2>
                            <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">{data.team}</h4>
                        </div>
                        {/* <!-- <a href="#" className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-lg">Upload New Photo</a> --> */}
                        <div className="chat-wrapper pt-0 w-100 position-relative">
                            <div className="chat-body p-4">
                                
                                {/* If stats */}
                                {
                                    data.stats
                                    ?
                                    <React.Fragment>
                                        <div className="card border-0 w-100 p-0 mb-3 shadow-none">
                                            <div className="card-body p-0">
                                                <h2 className="font-md text-grey-900 fw-600">Stats</h2>
                                            </div>
                                        </div>
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default p-0 bg-transparent rounded-0">
                                                <div className="panel-heading  pb-2" role="tab" id="headingOne">
                                                    {Object.values(data.stats).map(stat => (
                                                        <h2 key={stat.id} className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">{ stat.name } </span>
                                                            <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">{ stat.stat }</span>
                                                        </h2>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    :
                                    null
                                }
                                

                                {/* if academics */}
                                {
                                    data.academics
                                    ?
                                    <React.Fragment>
                                        <div className="card border-0 w-100 p-0 mb-3 shadow-none">
                                            <div className="card-body p-0">
                                                <h2 className="font-md text-grey-900 fw-600">Academics</h2>
                                            </div>
                                        </div>
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default p-0 bg-transparent rounded-0">
                                                <div className="panel-heading  pb-2" role="tab" id="headingOne">
                                                    <h2  className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">ACT </span> <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">{ data.academics.act }</span>
                                                    </h2>
                                                    <h2  className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">GPA </span> <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">{ data.academics.gpa }</span>
                                                    </h2>
                                                    <h2  className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">SAT </span> <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">{ data.academics.sat }</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    :
                                    null
                                }

                                {/* if videos */}
                                {
                                    data['available-videos']
                                    ?
                                    <React.Fragment>
                                        <div className="card border-0 w-100 p-0 mb-3 shadow-none">
                                            <div className="card-body p-0">
                                                <h2 className="font-md text-grey-900 fw-600">Downloadable Footage</h2>
                                            </div>
                                        </div>
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default p-0 bg-transparent rounded-0">
                                                <div className="panel-heading  pb-2" role="tab" id="headingOne">
                                                    {/* <!-- 4:3 aspect ratio --> */}
                                                    {Object.values(data['available-videos']).map(video => (
                                                        <h2 className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">
                                                                <a href={video[ 'video-url' ]}>{video.id}</a>
                                                                {/* <a href={video[ 'video-url' ]}>
                                                                    <img className="img-thumbnail" src={video['thumbnail-url']} alt={video.id} />
                                                                </a> */}
                                                            </span>
                                                        </h2>
                                                        // <div key={video.id} className="embed-responsive embed-responsive-4by3">
                                                        //     <iframe title={video.id} className="embed-responsive-item" src={video['video-url']} allowFullScreen></iframe>
                                                        // </div>
                                                    ))}
                                                    {/* <h2  className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">ACT </span> <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">{ data.academics.act }</span>
                                                    </h2> */}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    :
                                    null
                                }

                            </div>
                            {/* <div className="chat-bottom p-3 w-100 border-top">
                                <form className="chat-form d-block">
                                    <button className="bg-dark border-0 btn-round-md float-left"><i className="ti-microphone text-white lh-4 font-md"></i></button>
                                    <button className="bg-dark border-0 btn-round-md ml-2 float-left"><i className="ti-clip text-white lh-4 font-md"></i></button>
                                    <button className="bg-dark border-0 btn-round-md ml-2 float-left"><i className="ti-image text-white lh-4 font-md"></i></button>
                                    <button className="bg-current border-0 p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">Send</button>
                                </form>
                            </div>   */}
                        </div>
                    {/* </div> */}
                {/* </div>   */}
            {/* </div> */}


        </React.Fragment>
    )
}
