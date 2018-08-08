/**
 * 页面设计区域
 */


import React from 'react';
import privateStyle from './privateComponent.less';
import {renderComponent,renderChildren} from '../../compnentFactory';

export default class DesignerStage extends React.Component{
    constructor(props){
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems(){
        let {ui} = this.props;
        let uiTree = ui.get('uiTree');
        return renderComponent(uiTree,{...this.props,renderChildren});
    }

    render(){
        return(
            <div className={privateStyle['designerStage']}>
                {this.renderItems()}
            </div>
        )
    }
}