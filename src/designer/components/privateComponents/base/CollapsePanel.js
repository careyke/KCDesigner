/**
 * 折叠面板组件
 */

import React from 'react';
import collapsePanelStyle from './Collapse.less';

export default class CollapsePanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={collapsePanelStyle['colContainer']}>
                <div className={collapsePanelStyle['colHeader']}>
                    <span></span>
                    <span></span>
                </div>
                <div className={collapsePanelStyle['colContent']}></div>
            </div>
        )
    }
}