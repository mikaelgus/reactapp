/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const RegisterForm = (props) => {
  const {inputs, handleInputChange} = useForm();
  console.log(inputs);
  return (
    <>
      <form>
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleInputChange}
        />
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          placeholder="full name"
          type="text"
          name="full_name"
          onChange={handleInputChange}
        />
        <input type="submit" value="register" />
      </form>
    </>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
