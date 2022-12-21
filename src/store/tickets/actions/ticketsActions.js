import { ON_SET_CURRENCY, ON_SORT } from "../types/ticketsTypes";

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});

export const actionOnSort = () => ({
  type: ON_SORT,
});
