/**
 * 操作中间ui部分的reducer
 */

import * as actionnames from '../actions/actionNames';
import { Map } from 'immutable';

export default function uiReducers(state = Map(), action) {
    switch (action.type) {
        case actionnames.ADD_CONTROL:
            return addControlReducer(state, action);
        case actionnames.SELECT_CONTROL:
            return selectControls(state,action);
    }
    return state;
}

const addControlReducer = (state, action) => {
    return state;
}

const selectControls = (state, action) => {
    let id = action.args;
    let selectedList = state.getIn(['selectedControls']);
    let newList = selectedList.push(id);
    return state.set('selectedControls',newList);
}