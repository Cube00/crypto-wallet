import { GET_DASH } from "../actions/action";

const defaultStore = {
  dashstore: undefined,
};

const dashboardReducer = (state = defaultStore, action) => {
  if (action.type === GET_DASH) {
    return { ...state, dashstore: action.payload };
  }
  return { ...state };
};

export default dashboardReducer;
