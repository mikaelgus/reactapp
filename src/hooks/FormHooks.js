import {useState} from 'react';

const useForm = (callback, initSate) => {
  const [inputs, setInputs] = useState(initSate);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value, // event.target.files[0]
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
