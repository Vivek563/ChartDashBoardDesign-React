import React from 'react'

function Signin() {
  return (
    <>
    <div className="split left">
        <div>
            <h1 className="logo">LOGO</h1>
        </div>
        <div>
            <h1 className="centered">Board.</h1>
        </div>
        <div className="wrapper">
            <div className="imgsizeproperties">
                <img src="src/assets/github.png" />
                <img src="src/assets/twitter.png" />
                <img src="src/assets/linkdin.png" />
                <img src="src/assets/discord.png" />
            </div>
        </div>
    </div>

    <div className="split right">
        <div className="login-form-parent loginform">
            <form className="login-form">
              <div className="card">
                <div className="card1"></div>
              </div>
              <div className="input-field">
                <input className="input-field1" placeholder="Please enter your Email" type="text" />
              </div>
              <input className="input" placeholder="Please enter your Password" type="text" />
      
              <button className="button-sign-in">
                <div className="button-primary">
                  <div className="button-primary1"></div>
                </div>
                <b className="sign-in">Sign In</b>
              </button>
              <div className="email-address">Email address</div>
              <div className="password">Password</div>
              <div className="forgot-password">Forgot password?</div>
              <div className="dont-have-an-container">
                <span className="dont-have-an">Don’t have an account? </span>
                <span className="register-here">Register here</span>
              </div>
            </form>
            <button className="google-sign-in">
              <div className="white">
                <div className="button"></div>
              </div>
              <div className="sign-in-with">Sign in with Google</div>
              <img className="google-icon-1" alt="" src="src/assets/google.png" />
            </button>
            <div className="apple-sign-in">
              <div className="white">
                <div className="button"></div>
              </div>
              <div className="sign-in-with1">Sign in with Apple</div>
              <img className="apple-1-icon" alt="" src="src/assets/apple.png" />
            </div>
            <div className="sign-in-to">Sign in to your account</div>
            <h1 className="sign-in1">Sign In</h1>
          </div>
    </div>    
    </>
  )
}

export default Signin