import { init } from "@emailjs/browser";
import { useState } from "react";
// import { sendMessageForm } from "../utils/email-js/email";
import { useAppContext } from "../context/app-context";
const useEmailForm = (validate) => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const { startRequest, endRequest, showSuccessMessage } = useAppContext();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // const { name, email, subject, message } = errors;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event, formCurrent) => {
    event.preventDefault();
    const getErrors = validate(values);
    setErrors(validate(values));

    if (Object.keys(getErrors).length === 0) {
      startRequest();
      setTimeout(() => {
        //sendMessageForm(formCurrent);
        showSuccessMessage();
        endRequest();
        resetValues();
      }, 1000);
    } else {
      resetValues();
    }
  };
  const resetValues = () => {
    setValues(initialState);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useEmailForm;
