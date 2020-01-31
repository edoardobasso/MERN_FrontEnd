import { FETCH_LOGIN, USER_LOADED } from "./types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken"


export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        console.log(localStorage)
        const res = await axios.get('http://localhost:5000/user/pass', {
            headers: { Authorization: localStorage.token }
        })
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        console.log("load user")
    }
}

export const fetchLogin = ({ email, password }) => dispatch => {
    const body = JSON.stringify({ email, password })
    fetch(`http://localhost:5000/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body
    })
        .then(res => console.log(res)
            /*  dispatch({
 
                 type: FETCH_LOGIN,
                 payload: res.data
             }) */
        );
    dispatch(loadUser())
};
