import { LOGIN_SUCCESS  } from "../actions/login";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log("action" ,action.userData);
            return {
                ...state,
                userData: action.userData
            };
            break;
        default:
            return state
    }
}
 