import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((auth) => {
        //create a user and logged in...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://i.pinimg.com/originals/42/a7/86/42a7861bb1a403af534b18986ab4e198.png'
          alt='amazon'
        />
      </Link>
      <div className='login__container'>
        <h2>sign in</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={login} className='login__signInButton'>
            sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className='login__registerButton' onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
