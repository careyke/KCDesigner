/**
 * 工具方法
 * 用来处理从store中取数据
 * 操作immutable
 */

import { isArray } from "util";

export const getDataByPath=(state,path)=>{
    if(isArray(path)){
        return state.getIn(path);
    }else{
        return state.get(path);
    }
}