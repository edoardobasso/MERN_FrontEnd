import { FETCH_ITINERARIES } from "./types";
export const fetchItineraries = id => dispatch => {
  fetch(`http://localhost:5000/Itinerary/${id}`)
    .then(results => results.json())
    .then(itineraries =>
      dispatch({
        type: FETCH_ITINERARIES,
        payload: itineraries
      })
    );
};
