/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {userLogin, useUser} from '../hooks/ApiHooks';
import {Navigate, useNavigate} from 'react-router-dom';
import {Button, TextField} from '@mui/material';

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
        <TextField
          id="outlined-basic"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <TextField
          id="outlined-basic"
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <Button variant="contained" color="success" type="submit" value="login">
          LOGIN
        </Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
