/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {userLogin, useUser} from '../hooks/ApiHooks';

const LoginForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = userLogin();

  const doLogin = () => {
    console.log('doLogin');
    postLogin(inputs);
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
