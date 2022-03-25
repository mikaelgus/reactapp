/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {userLogin, useUser} from '../hooks/ApiHooks';
import {Navigate, useNavigate} from 'react-router-dom';

const LoginForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = userLogin();

  const navigate = useNavigate();

  const doLogin = async () => {
    console.log('doLogin');
    try {
      const userData = await postLogin(inputs);
      console.log(userData);
      localStorage.setItem('token', userData.token);
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
