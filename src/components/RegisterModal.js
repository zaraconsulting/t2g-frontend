import React from 'react'
import { useAuth } from '../contexts/AuthContext';

export const RegisterModal = () => {
    const { register } = useAuth();

    const handleRegister = (e) =>
    {
        e.preventDefault();
        if (e.target.password.value === e.target.confirm_password.value) {
            e.preventDefault();
            console.log(e.target.email.value)
            console.log(e.target.password.value)
            register(e.target.email.value, e.target.password.value)
        }
    }

    return (
        <div class="modal bottom fade" id="ModalregisterD" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-0">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="ti-close text-grey-500"></i></button>
                    <div class="modal-body p-3 d-flex align-items-center bg-none">
                        <div class="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                            <div class="card-body rounded-0 text-left pt-0">
                                <h2 class="fw-600 display2-size mb-4">Create <br />your account</h2>
                                <form onSubmit={(e) => handleRegister(e)}>
                                    {/* <div class="form-group mb-3">
                                        <input type="text" class="form-control h60 border-2 bg-color-none text-grey-700" name="name" placeholder="Name" />                        
                                    </div> */}
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control h60 border-2 bg-color-none text-grey-700" name="email" placeholder="Email" />                        
                                    </div>
                                    <div class="form-group icon-tab mb-3">
                                        <input type="password" class="form-control h60 border-2 bg-color-none text-grey-700" name="password" placeholder="Password" />
                                        <i class="ti-lock text-grey-700 pr-0"></i>
                                    </div>
                                    <div class="form-group icon-tab mb-3">
                                        <input type="password" class="form-control h60 border-2 bg-color-none text-grey-700" name="confirm_password" placeholder="Confirm Password" />
                                        <i class="ti-lock text-grey-700 pr-0"></i>
                                    </div>
                                    <div class="col-sm-12 p-0 text-center">
                                        <button type="submit" class="form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0">Create an account</button>
                                        <h6 class="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">Are you already member? <a href="." class="fw-700 ml-1">Login</a></h6>
                                        {/* <div class="row">
                                            <div class="col-6 pr-1"><a href="." class="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative"><img src="images/icon-facebook.png" style={{ width: '30px', position: 'absolute', left: '10px', top: '15px' }} alt="" /> Connect with Facebook</a></div>
                                            <div class="col-6 pl-1"><a href="." class="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative"><img src="images/google-icon.png" style={{ width: '30px', position: 'absolute', left: '10px', top: '15px' }} alt="" /> Connect with Google</a></div>
                                        </div> */}
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
