import React from 'react'
import { Route, Switch } from 'react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoginModal } from '../components/LoginModal'
import { RegisterModal } from '../components/RegisterModal'
import { SideNav } from '../components/SideNav'
import { useAuth } from '../contexts/AuthContext'
import { Home } from './Home'
import { Password } from './Password'
import { Postings } from './Postings'
import { Profile } from './Profile'

export const Main = () =>
{
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <div className="preloader"></div>

            <div className="main-wrapper">
                {/* <!-- header wrapper --> */}
                <Header />
                {/* <!-- header wrapper --> */}

                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <SideNav />
                            </div>

                            <div className="col-lg-9">
                                {
                                    currentUser.loggedIn
                                        ?
                                    <Switch>
                                        <Route exact path='/' render={() => <Home />} />
                                        <Route exact path='/postings' render={() => <Postings />} />
                                        <Route exact path='/password' render={() => <Password />} />
                                        <Route exact path='/profile' render={() => <Profile />} />
                                    </Switch>
                                        :
                                    <React.Fragment>
                                        <div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">
                                            <div className="row">
                                                <div className="col-lg-12 mt-3">
                                                    <h3 style={{ fontSize: '20px' }} className="text-left fw-900 mt-0 mb-0 lh-1">Please Log In to View Your Dashboard</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- footer wrapper --> */}
                <Footer />
                {/* <!-- footer wrapper --> */}

            </div>

            {/* Modal Register */}
            <RegisterModal />
            {/* Modal Register */}

            {/* <!-- Modal Login --> */}
            <LoginModal />
            {/* <!-- Modal Login --> */}
        </React.Fragment>
    )
}
