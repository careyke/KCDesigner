/**
 * 折叠面板组件
 */

import React from 'react';
import classnames from 'classnames';
import collapsePanelStyle from './CollapsePanel.less';
import ControlItem from './ControlItem';

export default class CollapsePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: true
        }
        this.expandClick=this.expandClick.bind(this);
    }

    expandClick(){
        let expand=this.state.expand;
        this.setState({
            expand:!expand
        })
    }

    renderControls(){
        let items=this.props.items;
        let controls=items.map((ctrl,index)=>{
            return (
                <ControlItem key={index} control={ctrl} />
            )
        })
        return controls;
    }

    render() {
        let {expand}=this.state;
        let iconClass = classnames({
            [collapsePanelStyle['icon']]:true,
            'kc-iconfont': true,
            'kc-icon-xiayi': !expand,
            'kc-icon-shangyi': expand
        })
        let panelClass=classnames({
            [collapsePanelStyle['colContent']]:true,
            [collapsePanelStyle['collapse']]:!expand
        })

        return (
            <div className={collapsePanelStyle['colContainer']}>
                <div className={collapsePanelStyle['colHeader']}>
                    <span className={collapsePanelStyle['title']}>{this.props.title}</span>
                    <span className={iconClass} onClick={this.expandClick}></span>
                </div>
                <div className={panelClass}>
                    {this.renderControls()}
                </div>
            </div>
        )
    }
}