import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activitiesReducer from "./activitiesReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  activities: activitiesReducer,
  login: loginReducer
});

export default rootReducer;
