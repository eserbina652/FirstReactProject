import React, { useEffect, useState } from "react";
import "./form.css";
import Error from "../../../errors/Error";
import BuyButton from "../../../components/Button/BuyButton";
import error from "../../../errors/Error";
import { Formik } from "formik";

const PopupForm = ({ item, value, addValueInPopup }) => {
  // const email = useInput("", { isEmpty: true, minLength: 10, isEmail: true });
  // const name = useInput("", { isEmpty: true, minLength: 2, isName: true });
  // const surname = useInput("", {
  //   isEmpty: true,
  //   minLength: 2,
  //   isSurname: true,
  // });
  // const phone = useInput("", {
  //   isEmpty: true,
  //   minLength: 9,
  //   isPhone: true,
  // });
  // const passport = useInput("", {
  //   isEmpty: true,
  //   isPassport: true,
  // });
  // const isDesaible =
  //   !!email.error?.emailError &&
  //   // !!email.isEmpty &&
  //   !!name.error?.nameError &&
  //   // !!name.isEmpty &&
  //   !!surname.error?.surnameError &&
  //   // !!surname.isEmpty &&
  //   !!phone.error?.phoneError &&
  //   // !!phone.isEmpty &&
  //   !!passport.error?.passportError;
  // // !!passport.isEmpty;
  //
  // console.log("isDesaible", isDesaible);
  return (
    <div className="popup-middle">
      <Formik />
      {/*<form*/}
      {/*  className="popup-form"*/}
      {/*  action="/react/first-project-of-react/public"*/}
      {/*>*/}
      {/*  <div className="name-input" style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      onBlur={(e) => name.onBlur(e)}*/}
      {/*      onChange={(e) => name.onChange(e)}*/}
      {/*      value={name.value}*/}
      {/*      className="form-input"*/}
      {/*      type="text"*/}
      {/*      placeholder="write your name"*/}
      {/*    />*/}
      {/*    {name.isDirty && name.isEmpty && <Error error={name.error.isEmpty} />}*/}
      {/*    {name.isDirty && name.minLengthError && (*/}
      {/*      <Error error={name.error.minLengthError} />*/}
      {/*    )}*/}
      {/*    {name.isDirty && name.nameError && (*/}
      {/*      <Error error={name.error.nameError} />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <div className="surname-input" style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      onBlur={(e) => surname.onBlur(e)}*/}
      {/*      onChange={(e) => surname.onChange(e)}*/}
      {/*      value={surname.value}*/}
      {/*      className="form-input"*/}
      {/*      type="text"*/}
      {/*      placeholder="write your surname"*/}
      {/*    />*/}
      {/*    {surname.isDirty && surname.isEmpty && (*/}
      {/*      <Error error={surname.error.isEmpty} />*/}
      {/*    )}*/}
      {/*    {surname.isDirty && surname.minLengthError && (*/}
      {/*      <Error error={surname.error.minLengthError} />*/}
      {/*    )}*/}
      {/*    {surname.isDirty && surname.surnameError && (*/}
      {/*      <Error error={surname.error.surnameError} />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <div className="email-input" style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      onBlur={(e) => email.onBlur(e)}*/}
      {/*      onChange={(e) => email.onChange(e)}*/}
      {/*      value={email.value}*/}
      {/*      className="form-input"*/}
      {/*      type="email"*/}
      {/*      placeholder="write your e-mail"*/}
      {/*    />*/}
      {/*    {email.isDirty && email.isEmpty && (*/}
      {/*      <Error error={email.error.isEmpty} />*/}
      {/*    )}*/}
      {/*    {email.isDirty && email.minLengthError && (*/}
      {/*      <Error error={email.error.minLengthError} />*/}
      {/*    )}*/}
      {/*    {email.isDirty && email.emailError && (*/}
      {/*      <Error error={email.error.emailError} />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <div className="number-input" style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      onBlur={(e) => phone.onBlur(e)}*/}
      {/*      onChange={(e) => phone.onChange(e)}*/}
      {/*      value={phone.value}*/}
      {/*      className="form-input"*/}
      {/*      type="text"*/}
      {/*      placeholder="write your phone number"*/}
      {/*    />*/}
      {/*    {phone.isDirty && phone.isEmpty && (*/}
      {/*      <Error error={phone.error.isEmpty} />*/}
      {/*    )}*/}
      {/*    {phone.isDirty && phone.minLengthError && (*/}
      {/*      <Error error={phone.error.minLengthError} />*/}
      {/*    )}*/}
      {/*    {phone.isDirty && phone.phoneError && (*/}
      {/*      <Error error={phone.error.maxLengthError} />*/}
      {/*    )}*/}
      {/*    {phone.isDirty && phone.phoneError && (*/}
      {/*      <Error error={phone.error.phoneError} />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <div className="passport-input" style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      onBlur={(e) => passport.onBlur(e)}*/}
      {/*      onChange={(e) => passport.onChange(e)}*/}
      {/*      value={passport.value}*/}
      {/*      className="form-input"*/}
      {/*      type="text"*/}
      {/*      placeholder="write your passport series"*/}
      {/*    />*/}
      {/*    {passport.isDirty && passport.isEmpty && (*/}
      {/*      <Error error={passport.error.isEmpty} />*/}
      {/*    )}*/}
      {/*    {passport.isDirty && passport.error.passportError && (*/}
      {/*      <Error error={passport.error.passportError} />*/}
      {/*    )}*/}
      {/*  </div>*/}
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
      {/*// </form>*/}
    </div>
  );
};

export default PopupForm;
