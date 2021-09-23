import React from 'react';
import { signInWithGoogle } from '../Services/authService';
import './LoginFormStyles.scss';

const LoginFormComponent = () => {
  return (
    <div className="login-form-component">
      <div className="login-heading">Welcome Back :)</div>
      <div className="password-login-section">
        <form action="" className="login-form">
          <input type="email" className="login-email" placeholder="Email address" />
          <input type="text" className="login-password" placeholder="Password" />
        </form>
      </div>
      <div className="google-login-section">
        <button onClick={signInWithGoogle}>Login with google</button>
      </div>
    </div>
  )
}

export default LoginFormComponent;
