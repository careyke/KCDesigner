/**
 * 创建action
 */
import * as actionNames from './actionNames';

export const addControl = (args) => {
    return {
        type:actionNames.ADD_CONTROL,
        args:args
    }
}

export const selectControls = (args) =>{
    return {
        type:actionNames.SELECT_CONTROL,
        args:args
    }
}