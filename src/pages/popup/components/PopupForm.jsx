import React from "react";
import "./form.css";
import Error from "../../../errors/Error";
import { Formik } from "formik";
import { formValidation } from "../../../validations/FormValidations";
import { getCurrencySymbol, getPrise } from "../../../utils/functionFromTicket";
import { useDispatch, useSelector } from "react-redux";
import {
  onClose,
  onCloseSuccess,
  onOpenSuccess,
} from "../../../store/reducers/popups";

const PopupForm = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.popups.item);
  const currency = useSelector((state) => state.popups.currency);
  const closePopup = () => {
    dispatch(onClose());
  };

  const openSuccess = () => {
    dispatch(onOpenSuccess());
  };

  const closeSuccess = () => {
    setTimeout(() => {
      dispatch(onCloseSuccess());
    }, 3000);
  };
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
        onSubmit={() => {
          closePopup();
          openSuccess();
          closeSuccess();
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
        }) => (
          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="name-input">
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                className="form-input"
                name="name"
                placeholder="Write your name"
              />
              {errors?.name && <Error error={errors.name} />}
            </div>
            <div className="surname-input">
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.surname}
                className="form-input"
                name="surname"
                placeholder="Write your surname"
              />
              {errors?.surname && <Error error={errors.surname} />}
            </div>
            <div className="email-input">
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
            <div className="phone-input">
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                className="form-input"
                name="phone"
                placeholder="Write your phone"
              />
              {errors?.phone && <Error error={errors.phone} />}
            </div>
            <div className="passport-input">
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passport}
                className="form-input"
                name="passport"
                placeholder="Write your passport"
              />
              {errors?.passport && <Error error={errors.passport} />}
            </div>
            <button
              onSubmit={handleSubmit}
              className="button-for-buy-a-ticket"
              type="submit"
              disabled={isSubmitting}
              id="popup-button"
            >
              Buy for {getPrise(item, currency)} {getCurrencySymbol(currency)}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PopupForm;
