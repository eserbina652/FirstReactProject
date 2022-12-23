import {
  ON_CLOSE,
  ON_CLOSE_SUCCESS,
  ON_OPEN,
  ON_OPEN_SUCCESS,
} from "../types/popupsTypes";

const initialState = {
  visible: false,
  successVisible: false,
  item: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_OPEN:
      return {
        ...state,
        visible: true,
        item: action.item,
      };
    case ON_CLOSE:
      return {
        ...state,
        visible: initialState.visible,
        item: initialState.item,
      };
    case ON_OPEN_SUCCESS:
      return {
        ...state,
        successVisible: true,
      };
    case ON_CLOSE_SUCCESS:
      return {
        ...state,
        successVisible: initialState.successVisible,
      };
    default:
      return state;
  }
};
