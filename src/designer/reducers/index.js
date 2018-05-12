/**
 * 设计器reducer的入口文件
 */

import { combineReducers } from 'redux';
import uiReducers from './uiReducers';
import controlReducers from './controlReducers';

export default combineReducers({
    ui: uiReducers,
    controls: controlReducers
})
