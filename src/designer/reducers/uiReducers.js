/**
 * 操作中间ui部分的reducer
 */

import * as actionnames from '../actions/actionNames';
import { Map } from 'immutable';

export default function uiReducers(state = Map(), action) {
    switch (action.type) {
        case actionnames.ADD_CONTROL:
            return addControlReducer(state, action);
    }
    return state;
}

let addControlReducer = (state, action) => {
    return state;
}