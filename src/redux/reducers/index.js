const { combineReducers } = require("redux");
const { default: robotsReducer } = require("./robotsReducer");

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export default rootReducer;
