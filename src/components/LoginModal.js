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
        
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        document.body.removeChild(modalBackdrops[0]);
    }

    return (
        <div class="modal bottom fade" id="Modallogin" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-0">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="ti-close text-grey-500"></i></button>
                    <div class="modal-body p-3 d-flex align-items-center bg-none">
                        <div class="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                            <div class="card-body rounded-0 text-left pt-0 pb-2">
                                <h2 class="fw-600 display2-size mb-4">Login into <br />your account</h2>
                                <form onSubmit={(e) => handleLogin(e)} action="POST">
                                    <div class="form-group mb-3">
                                        <input type="email" class="form-control h60 border-2 bg-color-none text-grey-700" name="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group icon-tab mb-1">
                                        <input type="password" class="form-control h60 border-2 bg-color-none text-grey-700" name="password" placeholder="Password" />
                                        <i class="ti-lock text-grey-700 pr-0"></i>
                                    </div>
                                    <div class="form-check text-left mb-3">
                                        <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" name="remember_me" />
                                        <label class="form-check-label font-xsss text-grey-500" for="exampleCheck1">Remember me</label>
                                        <a href="." class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                                    </div>
                                    <div class="col-sm-12 p-0 text-center">
                                        <button type="submit" class="form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0">Login</button>
                                        {/* <h6 class="text-grey-500 font-xsss fw-500 mt-2 mb-0 lh-32">Dont have account <a href="." class="fw-700 ml-1">Register</a></h6> */}
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
