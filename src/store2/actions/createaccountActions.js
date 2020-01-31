import { FETCH_CREATEACCOUNT } from "./types";

export const fetchCreateAccount = ({ email, password }) => dispatch => {
    console.log("working")
    const body = JSON.stringify({ email, password })
    console.log(body)
    fetch("http://localhost:5000/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body
    })
        .then(res =>
            dispatch({
                type: FETCH_CREATEACCOUNT,
                payload: res.data
            })
        );
};
