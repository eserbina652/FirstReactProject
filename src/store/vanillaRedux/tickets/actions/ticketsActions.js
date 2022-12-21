import { ON_SET_CURRENCY, ON_SORT } from "../types/ticketsTypes";

export const actionOnSort = () => ({
  type: ON_SORT,
});

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});
