export const formValidation = (values) => {
  const errors = {};
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
  console.log("error", errors);
  return errors;
};
