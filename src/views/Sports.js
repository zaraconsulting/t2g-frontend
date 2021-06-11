import React from 'react'

export function Sports() {
  return (
    <React.Fragment>
      <div className="col-lg-9">
        <div className="dashboard-tab rounded-lg shadow-xs bg-white">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card border-0 rounded-xxl w-100 p-0 b-r-15 bg-facebook">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 pl-1 text-center pr-0">
                      <i className="ti-facebook text-white display1-size mt-3 pt-1 d-inline-block"></i>
                    </div>
                    <div className="col-4 text-left pr-0 pl-2">
                      <h2 className="text-white fw-900 font-xl mt-3 mb-0">
                        543K
                      </h2>
                      <h4 className="fw-900 text-white font-xsssss ls-lg text-uppercase mb-0">
                        {" "}
                        Active user
                      </h4>
                    </div>
                    <div className="col-6">
                      <div id="chart-facebook"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="card border-0 rounded-xxl w-100 p-0 b-r-15 bg-messenger">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 pl-1 text-center pr-0">
                      <i className="ti-twitter-alt text-white display1-size mt-3 pt-1 d-inline-block"></i>
                    </div>
                    <div className="col-4 text-left pr-0 pl-2">
                      <h2 className="text-white fw-900 font-xl mt-3 mb-0">
                        22K
                                </h2>
                      <h4 className="fw-900 text-white font-xsssss ls-lg text-uppercase mb-0">
                        {" "}
                                  Active user
                                </h4>
                    </div>
                    <div className="col-6">
                      <div id="chart-twiiter"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="card border-0 rounded-xxl w-100 p-0 b-r-15 bg-instagram">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 pl-1 text-center pr-0">
                      <i className="ti-instagram text-white display1-size mt-3 pt-1 d-inline-block"></i>
                    </div>
                    <div className="col-4 text-left pr-0 pl-2">
                      <h2 className="text-white fw-900 font-xl mt-3 mb-0">
                        43K
                                </h2>
                      <h4 className="fw-900 text-white font-xsssss ls-lg text-uppercase mb-0">
                        {" "}
                                  Active user
                                </h4>
                    </div>
                    <div className="col-6">
                      <div id="chart-instagram"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="card border-0 w-100 p-0 rounded-xxl bg-greyblue theme-light-bg shadow-none">
                <div className="card-body p-4">
                  <h4 className="text-grey-800 text-left fw-900 font-xsss ls-lg font-xssss text-uppercase mb-3 mt-1">
                    Analysis{" "}
                    <span className="d-block fw-600 text-grey-500 font-xsssss">
                      Last 7 days
                              </span>
                  </h4>
                  <div
                    id="chart-candlestick"
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="card-body pb-4 pl-4 pr-4 pt-0">
                  <div className="row">
                    <div className="col-6 text-center">
                      <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                        <span className="mr-2 bg-success p-2 mt-0 rounded-circle"></span>{" "}
                        this week
                      </h4>
                    </div>
                    <div className="col-6 text-center">
                      <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                        <span className="mr-2 bg-instagram p-2 mt-0 rounded-circle"></span>{" "}
                        this month
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}


