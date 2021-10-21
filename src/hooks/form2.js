import { useState } from 'react';

const useForm2 = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit2 = (event) => {
    event.preventDefault();
    callback(values);
    // event.target.reset();
  };

  const handleChange2 = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange2,
    handleSubmit2,
    values,
  };
};

export default useForm2;