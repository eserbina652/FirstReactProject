export const getCurrencySymbol = (value) => {
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
