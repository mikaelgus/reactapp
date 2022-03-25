/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = (props) => {
  const startingValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const {postUser} = useUser();

  const doRegister = async () => {
    console.log('doRegister');
    try {
      const userData = await postUser(inputs);
      console.log(userData);
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    startingValues
  );
  console.log(inputs);
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <input
          placeholder="full name"
          type="text"
          name="full_name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <input type="submit" value="register" />
      </form>
    </>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
