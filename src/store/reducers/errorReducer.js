import { GET_ERRORS, CLEAR_ERRORS } from "../actions/actions";

const initialState = {
    msg: {},
    status: null,
    id: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ERRORS:
            return{
                ...state,
                msg: {},
                status: null,
                id: null
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                msg: {},
                status: null,
                id: null
            }
        default:
            return state
    }
}