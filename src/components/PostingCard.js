import React from 'react'

export const PostingCard = (props) => {
    const selectedPost = props.selectedPost;
    return (
        <div className="chat-wrapper pt-0 w-100 position-relative">
            <div className="chat-body p-4">
                <div className="card border-0 w-100 p-0 mb-3 shadow-none">
                    <div className="card-body p-0">
                        <h6 className="fw-600 text-grey-500 font-xssss">Today, 16th September 2020, 11:45 </h6>
                        <h2 className="font-lg text-grey-900 fw-600">{selectedPost.title}</h2>
                    </div>
                </div>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default p-0 bg-transparent border-bottom rounded-0">
                        <div className="panel-heading  pb-2" role="tab" id="headingOne">
                            <h2 className="panel-title fw-400 mb-0 accordion-toggle collapsed d-flex justify-content-between pr-0" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <figure className="avatar mr-2 mb-0 w35 mt-2 pt-1"><img src="https://via.placeholder.com/50x50.png" alt="." className="float-right shadow-sm rounded-circle w-100" /></figure>
                                <span className="font-xsss text-grey-700 pt-2 mt-1 pl-2 fw-700 mb-0 mr-auto">{ selectedPost.school } </span>
                                <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">14.09.2020 10:23</span>

                            </h2>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <p className="text-grey-600 mb-4 mt-4 font-xsss fw-500">{selectedPost.school} </p>
                        </div>
                    </div>
                    <div className="panel panel-default p-0 bg-transparent rounded-0">
                        <div id="collapseThree" className="panel-collapse collapse in show" role="tabpanel" aria-labelledby="headingThree">
                            <p className="text-grey-600 mb-4 font-xsss fw-500 mt-3">{ selectedPost.desc } </p>
                            <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..."></textarea>
                        </div>
                    </div>
                    <div className="panel panel-default p-0 mb-0 bg-transparent border-bottom rounded-0">
                        <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body pt-4">
                                <p className="text-grey-600 mb-4 font-xsss fw-500">{selectedPost.school} </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="chat-bottom p-3 w-100 border-top">
                <form className="chat-form d-block">
                    <button className="bg-dark border-0 btn-round-md float-left"><i className="ti-microphone text-white lh-4 font-md"></i></button>
                    <button className="bg-dark border-0 btn-round-md ml-2 float-left"><i className="ti-clip text-white lh-4 font-md"></i></button>
                    <button className="bg-dark border-0 btn-round-md ml-2 float-left"><i className="ti-image text-white lh-4 font-md"></i></button>
                    <button className="bg-current border-0 p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">Send</button>
                </form>
            </div>
        </div>
    )
}
