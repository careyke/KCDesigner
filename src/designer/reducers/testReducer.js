import { ADD_CONTROL } from '../actions/actionNames';
import { combineReducers } from 'redux';

let testReducer = (state = {}, action) => {
    if (action.type === ADD_CONTROL) {
        return state = Object.assign({}, state, { status: action.status });
    } else {
        return state;
    }
}
let controlReducer=(state = {}, action)=>{
    return state;
}

let allReducers = combineReducers({
    // test: testReducer,
    controls: controlReducer
})

export default allReducers;