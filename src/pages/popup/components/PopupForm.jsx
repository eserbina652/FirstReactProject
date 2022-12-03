import React, { useEffect, useState } from "react";
import "./form.css";
import Error from "../../../errors/Error";
import BuyButton from "../../../components/Button/BuyButton";
import error from "../../../errors/Error";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passportError, setPassportError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      console.log("validation", validation);
      switch (validation) {
        case "minLength":
          value.length < validations[validation] //не совсем понимаю что означает эта строка
            ? setMinLengthError(true)
            : setMinLengthError(false);
          value
            ? setError((prevState) => ({
                ...prevState,
                minLengthError: "This string should be longer",
              }))
            : setError((prevState) => ({
                ...prevState,
                minLengthError: null,
              }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              minLengthError: null,
            }));
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          value
            ? setError((prevState) => ({ ...prevState, isEmpty: null }))
            : setError((prev) => ({ ...prev, isEmpty: "Empty string" }));
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(false)
            : setMaxLengthError(true);
          value
            ? setError((prevState) => ({
                ...prevState,
                maxLengthError: "This string is too long",
              }))
            : setError((prevState) => ({
                ...prevState,
                maxLengthError: null,
              }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              maxLengthError: null,
            }));
          break;
        case "isEmail":
          const re =
            /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{0,64}@[a-zA-ZöäüÖÄÜß0-9](?:[a-zA-ZöäüÖÄÜß0-9-]{0,255}[a-zA-ZöäüÖÄÜß0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,56}[a-zA-Z0-9])?)+$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          re.test(String(value).toLowerCase())
            ? setError((prevState) => ({
                ...prevState,
                emailError: null,
              }))
            : setError((prev) => ({ ...prev, emailError: "Incorrect email" }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              emailError: null,
            }));
          break;
        case "isName":
          const nameRe = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim;
          nameRe.test(String(value).toLowerCase())
            ? setNameError(false)
            : setNameError(true);
          nameRe.test(String(value).toLowerCase())
            ? setError((prevState) => ({
                ...prevState,
                nameError: null,
              }))
            : setError((prevState) => ({
                ...prevState,
                nameError: "Incorrect name",
              }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              nameError: null,
            }));
          break;
        case "isSurname":
          const surnameRe = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim;
          surnameRe.test(String(value).toLowerCase())
            ? setSurnameError(false)
            : setSurnameError(true);
          surnameRe.test(String(value).toLowerCase())
            ? setError((prevState) => ({
                ...prevState,
                surnameError: null,
              }))
            : setError((prevState) => ({
                ...prevState,
                surnameError: "Incorrect surname",
              }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              surnameError: null,
            }));
          break;
        case "isPhone":
          const phoneRe =
            /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
          phoneRe.test(String(value))
            ? setPhoneError(false)
            : setPhoneError(true);
          phoneRe.test(String(value))
            ? setError((prevState) => ({
                ...prevState,
                phoneError: null,
              }))
            : setError((prevState) => ({
                ...prevState,
                phoneError: "Incorrect phone number",
              }));
          !value &&
            setError((prevState) => ({
              ...prevState,
              phoneError: null,
            }));
          break;
        case "isPassport":
          const passportRe = /^\d{6}[A-Z]{2}$/;
          passportRe.test(String(value))
            ? setPassportError(false)
            : setPassportError(true);
          passportRe.test(String(value))
            ? setError((prev) => ({ ...prev, passportError: null }))
            : setError((prev) => ({
                ...prev,
                passportError: "incorrect passport Series",
              }));
          !value && setError((prev) => ({ ...prev, passportError: null }));
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (
      isEmpty ||
      maxLengthError ||
      minLengthError ||
      emailError ||
      nameError ||
      surnameError ||
      phoneError ||
      passportError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [
    isEmpty,
    maxLengthError,
    minLengthError,
    emailError,
    nameError,
    surnameError,
    phoneError,
    passportError,
  ]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    maxLengthError,
    inputValid,
    error,
    nameError,
    surnameError,
    phoneError,
    passportError,
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

const PopupForm = ({ item, value, addValueInPopup }) => {
  const email = useInput("", { isEmpty: true, minLength: 10, isEmail: true });
  const name = useInput("", { isEmpty: true, minLength: 2, isName: true });
  const surname = useInput("", {
    isEmpty: true,
    minLength: 2,
    isSurname: true,
  });
  const phone = useInput("", {
    isEmpty: true,
    minLength: 9,
    isPhone: true,
  });
  const passport = useInput("", {
    isEmpty: true,
    isPassport: true,
  });
  const isDesaible =
    !!email.error?.emailError &&
    // !!email.isEmpty &&
    !!name.error?.nameError &&
    // !!name.isEmpty &&
    !!surname.error?.surnameError &&
    // !!surname.isEmpty &&
    !!phone.error?.phoneError &&
    // !!phone.isEmpty &&
    !!passport.error?.passportError;
  // !!passport.isEmpty;

  console.log("isDesaible", isDesaible);
  return (
    <div className="popup-middle">
      <form
        className="popup-form"
        action="/react/first-project-of-react/public"
      >
        <div className="name-input" style={{ display: "flex" }}>
          <input
            onBlur={(e) => name.onBlur(e)}
            onChange={(e) => name.onChange(e)}
            value={name.value}
            className="form-input"
            type="text"
            placeholder="write your name"
          />
          {name.isDirty && name.isEmpty && <Error error={name.error.isEmpty} />}
          {name.isDirty && name.minLengthError && (
            <Error error={name.error.minLengthError} />
          )}
          {name.isDirty && name.nameError && (
            <Error error={name.error.nameError} />
          )}
        </div>
        <div className="surname-input" style={{ display: "flex" }}>
          <input
            onBlur={(e) => surname.onBlur(e)}
            onChange={(e) => surname.onChange(e)}
            value={surname.value}
            className="form-input"
            type="text"
            placeholder="write your surname"
          />
          {surname.isDirty && surname.isEmpty && (
            <Error error={surname.error.isEmpty} />
          )}
          {surname.isDirty && surname.minLengthError && (
            <Error error={surname.error.minLengthError} />
          )}
          {surname.isDirty && surname.surnameError && (
            <Error error={surname.error.surnameError} />
          )}
        </div>
        <div className="email-input" style={{ display: "flex" }}>
          <input
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            className="form-input"
            type="email"
            placeholder="write your e-mail"
          />
          {email.isDirty && email.isEmpty && (
            <Error error={email.error.isEmpty} />
          )}
          {email.isDirty && email.minLengthError && (
            <Error error={email.error.minLengthError} />
          )}
          {email.isDirty && email.emailError && (
            <Error error={email.error.emailError} />
          )}
        </div>
        <div className="number-input" style={{ display: "flex" }}>
          <input
            onBlur={(e) => phone.onBlur(e)}
            onChange={(e) => phone.onChange(e)}
            value={phone.value}
            className="form-input"
            type="text"
            placeholder="write your phone number"
          />
          {phone.isDirty && phone.isEmpty && (
            <Error error={phone.error.isEmpty} />
          )}
          {phone.isDirty && phone.minLengthError && (
            <Error error={phone.error.minLengthError} />
          )}
          {phone.isDirty && phone.phoneError && (
            <Error error={phone.error.maxLengthError} />
          )}
          {phone.isDirty && phone.phoneError && (
            <Error error={phone.error.phoneError} />
          )}
        </div>
        <div className="passport-input" style={{ display: "flex" }}>
          <input
            onBlur={(e) => passport.onBlur(e)}
            onChange={(e) => passport.onChange(e)}
            value={passport.value}
            className="form-input"
            type="text"
            placeholder="write your passport series"
          />
          {passport.isDirty && passport.isEmpty && (
            <Error error={passport.error.isEmpty} />
          )}
          {passport.isDirty && passport.error.passportError && (
            <Error error={passport.error.passportError} />
          )}
        </div>
        <BuyButton
          additionalStyle={"popup-button"}
          item={item}
          value={value}
          onClick={() => {
            if (isDesaible) {
              addValueInPopup(item);
            }
          }}
        />
      </form>
    </div>
  );
};

export default PopupForm;
