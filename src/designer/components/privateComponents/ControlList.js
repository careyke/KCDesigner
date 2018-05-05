/**
 * 控件列表
 */

import React from 'react';
import PropTypes from 'prop-types';
import privateStyle from './privateComponent.less';
import CollapsePanel from './base/CollapsePanel';
import {model} from '../../model';

export default class ControlList extends React.Component{
    constructor(props){
        super(props);
    }

    static contextTypes={
        controls:PropTypes.object
    }

    renderCollapse(){
        let controls=this.context.controls;
        let collapsePanels=controls.map((panel,index)=>{
            let title=model.getDataByPath(panel,'title');
            let items=model.getDataByPath(panel,'items');
            return(
                <CollapsePanel key={index} title={title} items={items} />
            )
        })
        return collapsePanels;
    }

    render(){
        return (
            <div className={privateStyle['controlList']}>
                {this.renderCollapse()}
            </div>
        )
    }
}