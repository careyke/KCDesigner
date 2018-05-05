/**
 * 控件
 */

import React from 'react';
import itemClass from './ControlItem.less';
import classnames from 'classnames';
import * as icon from '../../../constant/iconClassConstant';
import {model} from '../../../model';

export default class ControlItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let control=this.props.control;
        let type=model.getDataByPath(control,'type');
        let iconType=icon[type] || icon.defaultType;
        let iconClass=classnames({
            [itemClass['icon']]:true,
            'kc-iconfont':true,
            [iconType]:true
        })
        return (
            <div className={itemClass['ctrlContainer']}>
                <span className={itemClass['iconCon']}>
                    <span className={iconClass}></span>
                </span>
                <span className={itemClass['text']}>{control.get('text')}</span>
            </div>
        )
    }
}