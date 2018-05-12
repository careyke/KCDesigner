/**
 * 组件工厂函数
 * 根据ui数据来渲染出对应的组件
 */
import React from 'react';
import * as controls from './components/designerComponents';

export default function renderComponent(items=[],...props){
    if(items.length===0){
        return null
    }else{
        let components=[];
        components=items.map((item,index)=>{
            let type=item.get('type');
            return React.cloneElement(controls[type],props);
        })
    }
    return components;
}