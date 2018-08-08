/**
 * 工具方法
 * 用来处理从store中取数据
 * 操作immutable
 */

// import { isArray } from "util";
import {Type} from '../../utils/common';
import {List} from 'immutable'

export const getDataByPath=(state,path)=>{
    if(Type.isArray(path)){
        return state.getIn(path);
    }else{
        return state.get(path);
    }
}

export const getSelectedCtrls=(state)=>{
    let selectedList = state.get('selectedControls');
    if(selectedList && selectedList.size>0){
        return selectedList;
    }else{
        return List([]);
    }
}

export const judgeSelected =(state,id)=>{
    let selectedList = getSelectedCtrls(state);
    if(selectedList.includes(id)){
        return true;
    }else{
        return false;
    }
}