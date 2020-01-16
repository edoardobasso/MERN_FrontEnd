import { FETCH_ACTIVITIES } from "./types";

export const fetchActivities = () => dispatch => {
    fetch("http://localhost:5000/activities/all")
        .then(results => results.json())
        .then(activities =>
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities
            })
        );
};
