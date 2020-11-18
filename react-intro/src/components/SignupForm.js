import './SignupForm.css';
import React from 'react';
const SignupForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.onSubmitHandler} style={{border:'1px solid #ccc'}}>
            <div className="container">
                <h1>{props.title || 'SignUp'}</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label forhtml="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" />

                <label forhtml="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" />

                <label forhtml="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" />
                
                <label>
                    <input type="checkbox" name="remember" style={{marginBottom:'15px'}} /> Remember me
                </label>
                
                <p>By creating an account you agree to our <a href="/" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button onClick={props.onCancel} type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    );
};

export default React.memo(SignupForm);
