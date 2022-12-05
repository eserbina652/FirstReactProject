import React, { useEffect, useState } from "react";
import "./form.css";
import Error from "../../../errors/Error";
import BuyButton from "../../../components/Button/BuyButton";
import error from "../../../errors/Error";
import { Formik } from "formik";
import { formValidation } from "../../../validations/FormValidations";
import { getCurrencySymbol, getPrise } from "../../../utils/functionFromTicket";

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
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
          passport: "",
        }}
        validate={formValidation}
        onSubmit={(value, { setSubmitting }) => {
          addValueInPopup(null);
          // handleAddtoLocalStorag("2", values);
        }}
      />
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /*and other goodies*/
      }) => (
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="name-input" style={{ display: "flex" }}>
            <input
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              className="form-input"
              name="name"
              placeholder="Write your name"
            />
            {errors?.email && <Error error={errors.email} />}
          </div>
          <div className="surname-input" style={{ display: "flex" }}>
            <input
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.surname}
              className="form-input"
              name="surname"
              placeholder="Write your surname"
            />
            {errors?.email && <Error error={errors.email} />}
          </div>
          <div className="email-input" style={{ display: "flex" }}>
            <input
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              className="form-input"
              name="email"
              placeholder="Write your email"
            />
            {errors?.email && <Error error={errors.email} />}
          </div>
          <div className="phone-input" style={{ display: "flex" }}>
            <input
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              className="form-input"
              name="phone"
              placeholder="Write your phone"
            />
            {errors?.email && <Error error={errors.email} />}
          </div>
          <div className="passport-input" style={{ display: "flex" }}>
            <input
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passport}
              className="form-input"
              name="passport"
              placeholder="Write your passport"
            />
            {errors?.email && <Error error={errors.email} />}
          </div>
          <button
            onSubmit={handleSubmit}
            className="button-for-buy-a-ticket"
            type="submit"
            // disabled={isSubmiting}
            id="popup-button"
          >
            Buy for {getPrise(item, value)} {getCurrencySymbol(value)}
          </button>
        </form>
      )}
    </div>
  );
};

export default PopupForm;
