/**
 * 控件列表
 */


import React from 'react';
import privateStyle from './privateComponent.less';

export default class ControlList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['controlList']}>
                
            </div>
        )
    }
}