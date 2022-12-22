import {
  ON_SET_CURRENCY,
  ON_SORT,
  ON_RESET_FILTER,
  ON_SET_FILTER,
  ON_SELECT_TICKETS,
} from "../types/ticketsTypes";

export const actionOnSort = () => ({
  type: ON_SORT,
});

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});

export const actionOnSetFilter = (filter) => ({
  type: ON_SET_FILTER,
  filter,
});

export const actionOnResetFilter = () => ({
  type: ON_RESET_FILTER,
});

export const actionOnSelectTickets = () => ({
  type: ON_SELECT_TICKETS,
});
