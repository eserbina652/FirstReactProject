import {
  ON_CLOSE,
  ON_CLOSE_SUCCESS,
  ON_OPEN,
  ON_OPEN_SUCCESS,
} from "../types/popupsTypes";

export const actionOnOpen = (item) => ({
  type: ON_OPEN,
  item,
});

export const actionOnClose = () => ({
  type: ON_CLOSE,
});

export const actionOnOpenSuccess = () => ({
  type: ON_OPEN_SUCCESS,
});

export const actionOnCloseSuccess = () => ({
  type: ON_CLOSE_SUCCESS,
});
