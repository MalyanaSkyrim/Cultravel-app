import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import commonReducer from "./reducers/commonReducer";

export default combineReducers({
  authReducer,
  commonReducer
});
