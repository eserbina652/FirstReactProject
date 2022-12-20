import { ON_SELECT, ON_SET_CURRENCY, ON_SORT } from "../types/tiketsTypes";

export const actionOnSort = (data) => ({
  type: ON_SORT,
});

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});
