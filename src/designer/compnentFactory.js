/**
 * 组件工厂函数
 * 根据ui数据来渲染出对应的组件
 */
import React from 'react';
import controls from './components/designerComponents';
import {Map,List} from 'immutable';

export function renderChildren(items=List(),...props){
    let components=[];
    if(items.length===0){
        return null
    }else{
        components=items.map((item)=>{
            return renderComponent(item,props);
        })
    }
    return components;
}

//渲染树节点
export function renderComponent (node=Map(),props){
    let type = node.get('type');
    console.log(props);
    if(type){
        return React.createElement(controls[type],{...props,node});
    }else{
        return null;
    }
}