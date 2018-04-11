/**
 * 创建action
 */
import { ADD_CONTROL } from './actionNames';

export const addControl = (args) => {
    return {
        type:ADD_CONTROL,
        args:args
    }
}