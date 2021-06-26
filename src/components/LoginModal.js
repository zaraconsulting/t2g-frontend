import React from 'react'
import { useAuth } from '../contexts/AuthContext';

export const LoginModal = () => {
    const { signIn } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        signIn(e.target.email.value, e.target.password.value);

        document.querySelector('#Modallogin').classList.remove('show');
        document.querySelector('#Modallogin').setAttribute('style', 'display: none');
        document.querySelector('#Modallogin').setAttribute('aria-hidden', 'true');
        document.querySelectorAll('body.modal-open')[0].classList.remove('modal-open');
        
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        document.body.removeChild(modalBackdrops[0]);
        setTimeout(2000, () => window.location.reload())
    }

    return (
        <div className="modal bottom fade" id="Modallogin" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-0">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close text-grey-500"></i></button>
                    <div className="modal-body p-3 d-flex align-items-center bg-none">
                        <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                            <div className="card-body rounded-0 text-left pt-0 pb-2">
                                <h2 className="fw-600 display2-size mb-4">Login into <br />your account</h2>
                                <form onSubmit={(e) => handleLogin(e)} action="POST">
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control h60 border-2 bg-color-none text-grey-700" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group icon-tab mb-1">
                                        <input type="password" className="form-control h60 border-2 bg-color-none text-grey-700" name="password" placeholder="Password" />
                                        <i className="ti-lock text-grey-700 pr-0"></i>
                                    </div>
                                    <div className="form-check text-left mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck1" name="remember_me" />
                                        <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck1">Remember me</label>
                                        <a href="." className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                                    </div>
                                    <div className="col-sm-12 p-0 text-center">
                                        <button type="submit" className="form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0">Login</button>
                                        {/* <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-0 lh-32">Dont have account <a href="." className="fw-700 ml-1">Register</a></h6> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
