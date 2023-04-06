import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import themeReducer from "./themeReduer";
import gifsReducer from "./gifsReducer";
const rootReducer = combineReducers({
  toggleReducer,
  themeReducer,
  gifsReducer,
});

export default rootReducer;
