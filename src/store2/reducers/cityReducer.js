import { FETCH_CITIES } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return { items: action.payload };
    default:
      return state;
  }
}
