/**
 * 控件列表
 */

import React from 'react';
import privateStyle from './privateComponent.less';
import CollapsePanel from './base/CollapsePanel';

export default class CollapsePanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={privateStyle['controlList']}>
                
            </div>
        )
    }
}