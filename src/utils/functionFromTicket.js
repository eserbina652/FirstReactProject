export const getCurrencySymbol = (value) => {
  console.log("value", value);
  if (!value) {
    return "₴";
  }
  switch (value) {
    case "UAH":
      return "₴";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "₴";
  }
};

export const getPrise = (item, value) => {
  console.log("value", value);
  console.log("item", item);
  if (!value) {
    return item.price;
  }
  switch (value) {
    case "UAH":
      return item.price;
    case "USD":
      return item.price / 40;
    case "EUR":
      return (item.price / 42).toFixed(2);
    default:
      return item.price;
  }
};
