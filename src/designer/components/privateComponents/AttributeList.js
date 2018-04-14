/**
 * 属性列表
 */


import React from 'react';
import privateStyle from './privateComponent.less';

export default class AttributeList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['attrList']}>
                
            </div>
        )
    }
}