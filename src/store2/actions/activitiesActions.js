import { FETCH_ACTIVITIES } from "./types";



export const fetchActivities = id => dispatch => {
    console.log(id)
    fetch(`http://localhost:5000/Activities/${id}`)
        .then(results => results.json())
        .then(activities =>
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities
            })
        );
};
/* export const fetchActivities = id => dispatch => {
    console.log(id)
    fetch(`http://localhost:5000/Activities/${id}`)
        .then(results => results.json())
        .then(activities => console.log(activities),
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities
            })
        );
};
 */
