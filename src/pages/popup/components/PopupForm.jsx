import React, { useEffect, useState } from "react";
import "./form.css";
import BuyButton from "../../../components/Button/BuyButton";
import { Formik } from "formik";
import Error from "../../../errors/Error";
import { getCurrencySymbol, getPrise } from "../../../utils/functionFromTicket";
import { formValidation } from "../../../validation/FormValidation";

const PopupForm = ({ item, value, addValueInPopup }) => {
  // const handleAddtoLocalStorag = (id, value) => {
  //   localStorage.setItem("2", JSON.stringify(value));
  // };
  // const [initialValue, setInitialValue] = useState({
  //   email: "",
  //   phone: "",
  //   name: "",
  //   surname: "",
  //   passport: "",
  // });
  // const getLocalData = () => {
  //   const res = localStorage.getItem("2");
  //   console.log("res", res);
  //   if (res) {
  //     setInitialValue(JSON.parse(res));
  //   }
  // };
  // useEffect(() => {
  //   getLocalData();
  // }, []);
  // console.log("value", initialValue);
  return (
    <div className="popup-middle">
      <Formik
        initialValues={{
          email: "",
          phone: "",
          name: "",
          surname: "",
          passport: "",
        }}
        validate={formValidation}
        onSubmit={(values, { setSubmitting }) => {
          addValueInPopup(null);
          // handleAddtoLocalStorag("2", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="name-input" style={{ display: "flex" }}>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className="form-input"
                type="email"
                name={"email"}
                placeholder="write your email"
              />
              {errors?.email && <Error error={errors.email} />}
            </div>
            <div className="surname-input" style={{ display: "flex" }}>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                className="form-input"
                type="text"
                name={"phone"}
                placeholder="write your phone"
              />
              {errors.phone && <Error error={errors.phone} />}
            </div>
            <button
              onSubmit={handleSubmit}
              className="button-for-buy-a-ticket"
              id={"popup-button"}
              type={"submit"}
              disabled={isSubmitting}
            >
              Buy for {getPrise(item, value)} {getCurrencySymbol(value)}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PopupForm;
