import { 
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL 
} from "../actions/actions";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }


        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload, 
                isAuthenticated: true,
                isLoading: false,
               
            }

        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: localStorage.getItem('token'),
                isAuthenticated: false,
                isLoading: false,
                user: null
            }

        default:
            return state


    }
}