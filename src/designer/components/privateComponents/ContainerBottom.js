/**
 * 设计器底部
 */

import React from 'react';
import privateStyle from './privateComponent.less';
import ControlList from './ControlList';
import AttributeList from './AttributeList';
import DesignerStage from './DesignerStage';

export default class ContainerBottom extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['botContainer']}>
                <ControlList></ControlList>
                <DesignerStage></DesignerStage>
                <AttributeList></AttributeList>
            </div>
        )
    }
}