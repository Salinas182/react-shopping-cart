import { useState } from 'react';

export default function useFormValidation (initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = () => {
    const valid = Object.values(formValues).every(value => value);
    return { valid };
  };

  return { formValues, handleInputChange, validateForm };
};
