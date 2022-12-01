import React, { useEffect, useState } from "react";
import "./form.css";
import Error from "../../../errors/Error";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmail":
          const re =
            /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{0,64}@[a-zA-ZöäüÖÄÜß0-9](?:[a-zA-ZöäüÖÄÜß0-9-]{0,255}[a-zA-ZöäüÖÄÜß0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,56}[a-zA-Z0-9])?)+$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          re.test(String(value).toLowerCase())
            ? setEmailError((prevState) => ({
                ...prevState,
                emailError: null,
              }))
            : setError((prev) => ({ ...prev, emailError: "Incorrect email" }));
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    maxLengthError,
    inputValid,
    error,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const PopupForm = () => {
  const email = useInput("", { isEmpty: true, minLength: 5 });

  console.log(email);
  return (
    <div className="popup-middle">
      <form
        className="popup-form"
        action="/react/first-project-of-react/public"
      >
        <input
          className="form-input"
          type="text"
          placeholder="write your name"
        />
        <input
          className="form-input"
          type="text"
          placeholder="write your surname"
        />
        {email.isDirty && email.isEmpty && <Error />}
        {email.isDirty && email.minLengthError && <Error />}
        {email.isDirty && email.emailError && (
          <Error error={email.error.emailError} />
        )}
        <input
          onBlur={(e) => email.onBlur(e)}
          onChange={(e) => email.onChange(e)}
          value={email.value}
          className="form-input"
          type="email"
          placeholder="write your e-mail"
        />
        <input
          className="form-input"
          type="number"
          placeholder="write your phone number"
        />
        <input
          className="form-input"
          type="number"
          placeholder="write your passport series"
        />
      </form>
    </div>
  );
};

export default PopupForm;
