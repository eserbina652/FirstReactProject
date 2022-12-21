import { ON_SET_CURRENCY, ON_SORT } from "../types/tiketsTypes";

export const actionOnSort = () => ({
  type: ON_SORT,
});

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});

/*
ticketsActions.js - this file to contain the actions functions
with action's type which wrote in file ticketsTypes.js and
if I pass some arguments in action, I mast to write this argument
in the action's body.

it's syntax ALWAYS should to return the object, so I mast to write
the object's literal in parentheses after the arrow

All actions mast to starting from action word and exporting
before they were created
 */
