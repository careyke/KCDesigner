/**
 * 设计器UI的根节点
 */

import React from 'react';
import commonStyles from './acommon.less';
import classnames from 'classnames';
import {judgeSelected,getSelectedCtrls} from '../../model/commonModel'

export default class DesignerUI extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount(){
        let {ui,node} = this.props;
        let id = node.get('id');
        let selectedList = getSelectedCtrls(ui);
        if(selectedList.size<1){
            this.props.selectControls(id);
        }
    }

    renderItems(){
        let {renderChildren,node,...other}=this.props;
        let items = node.get('items');
        return renderChildren(items,...other,renderChildren);
    }

    render() {
        let {ui,node}=this.props;
        let id=node.get('id');
        let isSelected=judgeSelected(ui,id);
        let className = classnames({
            [commonStyles['designer-ui']]:true,
            [commonStyles['isSelected']]: isSelected
        })
        return (
            <div className={className}>
                {this.renderItems()}
            </div>
        )
    }
}