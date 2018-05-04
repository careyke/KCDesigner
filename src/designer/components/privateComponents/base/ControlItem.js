/**
 * 控件
 */

import React from 'react';
import itemClass from './ControlItem.less';
import classnames from 'classnames';

export default class ControlItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let iconClass=classnames({
            'kc-iconfont':true,
            
        })
        return (
            <div className={itemClass['ctrlContainer']}>
                <span className={itemClass['iconCon']}>
                    <span className={}></span>
                </span>
                <span className={itemClass['text']}></span>
            </div>
        )
    }
}