import { FETCH_LOGIN, USER_LOADED } from "../actions/types";

const initialState = {
    items: [],
    item: {},
    isAuthenticated: null,
    token: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGIN:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                item: action.payload,
                isAuthenticated: true

            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };

        default:
            return state;
    }
}
