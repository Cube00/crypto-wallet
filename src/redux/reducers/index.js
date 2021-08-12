import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";

export const index = combineReducers({ dashboardReducer: dashboardReducer });
