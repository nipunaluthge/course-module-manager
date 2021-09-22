import React from 'react';

const LoginFormComponent = () => {
  return (
    <div>
      <div className="login-heading">Login</div>
      <div className="password-login-section">
        <form action="" className="loging-form">
          <input type="email" className="login-email" placeholder="Email address" />
          <input type="text" className="login-password" placeholder="Password" />
        </form>
      </div>
      <div className="google-login-section">
        <button>Login with google</button>
      </div>
    </div>
  )
}

export default LoginFormComponent;
