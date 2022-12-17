export const formValidation = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim.test(values.name)) {
    errors.name = "Invalid name";
  }
  if (!values.surname) {
    errors.surname = "Required";
  } else if (
    !/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim.test(values.surname)
  ) {
    errors.surname = "Invalid surname";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{0,64}@[a-zA-ZöäüÖÄÜß0-9](?:[a-zA-ZöäüÖÄÜß0-9-]{0,255}[a-zA-ZöäüÖÄÜß0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,56}[a-zA-Z0-9])?)+$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)
  ) {
    errors.phone = "Invalid phone";
  }
  if (!values.passport) {
    errors.passport = "Required";
  } else if (!/^\d{6}[A-Z]{2}$/.test(values.passport)) {
    errors.passport = "Invalid passport";
  }

  return errors;
};

// import { useEffect, useState } from "react";
//
// const useValidation = (value, validations) => {
//   const [isEmpty, setEmpty] = useState(true);
//   const [minLengthError, setMinLengthError] = useState(false);
//   const [maxLengthError, setMaxLengthError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [error, setError] = useState(null);
//   const [nameError, setNameError] = useState(false);
//   const [surnameError, setSurnameError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);
//   const [passportError, setPassportError] = useState(false);
//   const [inputValid, setInputValid] = useState(false);
//
//   useEffect(() => {
//     for (const validation in validations) {
//       console.log("validation", validation);
//       switch (validation) {
//         case "minLength":
//           value.length < validations[validation] //не совсем понимаю что означает эта строка
//             ? setMinLengthError(true)
//             : setMinLengthError(false);
//           value
//             ? setError((prevState) => ({
//                 ...prevState,
//                 minLengthError: "This string should be longer",
//               }))
//             : setError((prevState) => ({
//                 ...prevState,
//                 minLengthError: null,
//               }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               minLengthError: null,
//             }));
//           break;
//         case "isEmpty":
//           value ? setEmpty(false) : setEmpty(true);
//           value
//             ? setError((prevState) => ({ ...prevState, isEmpty: null }))
//             : setError((prev) => ({ ...prev, isEmpty: "Empty string" }));
//           break;
//         case "maxLength":
//           value.length > validations[validation]
//             ? setMaxLengthError(false)
//             : setMaxLengthError(true);
//           value
//             ? setError((prevState) => ({
//                 ...prevState,
//                 maxLengthError: "This string is too long",
//               }))
//             : setError((prevState) => ({
//                 ...prevState,
//                 maxLengthError: null,
//               }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               maxLengthError: null,
//             }));
//           break;
//         case "isEmail":
//           const re =
//             /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{0,64}@[a-zA-ZöäüÖÄÜß0-9](?:[a-zA-ZöäüÖÄÜß0-9-]{0,255}[a-zA-ZöäüÖÄÜß0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,56}[a-zA-Z0-9])?)+$/;
//           re.test(String(value).toLowerCase())
//             ? setEmailError(false)
//             : setEmailError(true);
//           re.test(String(value).toLowerCase())
//             ? setError((prevState) => ({
//                 ...prevState,
//                 emailError: null,
//               }))
//             : setError((prev) => ({ ...prev, emailError: "Incorrect email" }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               emailError: null,
//             }));
//           break;
//         case "isName":
//           const nameRe = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim;
//           nameRe.test(String(value).toLowerCase())
//             ? setNameError(false)
//             : setNameError(true);
//           nameRe.test(String(value).toLowerCase())
//             ? setError((prevState) => ({
//                 ...prevState,
//                 nameError: null,
//               }))
//             : setError((prevState) => ({
//                 ...prevState,
//                 nameError: "Incorrect name",
//               }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               nameError: null,
//             }));
//           break;
//         case "isSurname":
//           const surnameRe = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/gim;
//           surnameRe.test(String(value).toLowerCase())
//             ? setSurnameError(false)
//             : setSurnameError(true);
//           surnameRe.test(String(value).toLowerCase())
//             ? setError((prevState) => ({
//                 ...prevState,
//                 surnameError: null,
//               }))
//             : setError((prevState) => ({
//                 ...prevState,
//                 surnameError: "Incorrect surname",
//               }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               surnameError: null,
//             }));
//           break;
//         case "isPhone":
//           const phoneRe =
//             /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//           phoneRe.test(String(value))
//             ? setPhoneError(false)
//             : setPhoneError(true);
//           phoneRe.test(String(value))
//             ? setError((prevState) => ({
//                 ...prevState,
//                 phoneError: null,
//               }))
//             : setError((prevState) => ({
//                 ...prevState,
//                 phoneError: "Incorrect phone number",
//               }));
//           !value &&
//             setError((prevState) => ({
//               ...prevState,
//               phoneError: null,
//             }));
//           break;
//         case "isPassport":
//           const passportRe = /^\d{6}[A-Z]{2}$/;
//           passportRe.test(String(value))
//             ? setPassportError(false)
//             : setPassportError(true);
//           passportRe.test(String(value))
//             ? setError((prev) => ({ ...prev, passportError: null }))
//             : setError((prev) => ({
//                 ...prev,
//                 passportError: "incorrect passport Series",
//               }));
//           !value && setError((prev) => ({ ...prev, passportError: null }));
//           break;
//       }
//     }
//   }, [value]);
//
//   useEffect(() => {
//     if (
//       isEmpty ||
//       maxLengthError ||
//       minLengthError ||
//       emailError ||
//       nameError ||
//       surnameError ||
//       phoneError ||
//       passportError
//     ) {
//       setInputValid(false);
//     } else {
//       setInputValid(true);
//     }
//   }, [
//     isEmpty,
//     maxLengthError,
//     minLengthError,
//     emailError,
//     nameError,
//     surnameError,
//     phoneError,
//     passportError,
//   ]);
//
//   return {
//     isEmpty,
//     minLengthError,
//     emailError,
//     maxLengthError,
//     inputValid,
//     error,
//     nameError,
//     surnameError,
//     phoneError,
//     passportError,
//   };
// };
//
// const useInput = (initialValue, validations) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setDirty] = useState(false);
//   const valid = useValidation(value, validations);
//
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//
//   const onBlur = () => {
//     setDirty(true);
//   };
//
//   return {
//     value,
//     onChange,
//     onBlur,
//     isDirty,
//     ...valid,
//   };
// };


