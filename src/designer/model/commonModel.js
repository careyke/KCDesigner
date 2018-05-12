/**
 * 工具方法
 * 用来处理从store中取数据
 * 操作immutable
 */

// import { isArray } from "util";
import {Type} from '../../utils/common';

export const getDataByPath=(state,path)=>{
    if(Type.isArray(path)){
        return state.getIn(path);
    }else{
        return state.get(path);
    }
}