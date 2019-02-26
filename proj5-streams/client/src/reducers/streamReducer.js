import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {    
    switch (action.type) {
    case FETCH_STREAMS:
        // _.mapKeys makes objects has key of the value of the second argument (i.e. "id" in this case)
        return {...state, ..._.mapKeys(action.payload, "id")};
    case FETCH_STREAM:
        // Regular
        const newState = {...state};
        newState[action.payload.id] = action.payload;
        return newState;
    case CREATE_STREAM:
        // Simplified
        // For reference:  [Obj key, instead of array]: action.payload 
        return {...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
        return {...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
        return _.omit(state, action.payload);
    default:
        return state;
    }
};