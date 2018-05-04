/**
 * 设计器底部
 */

import React from 'react';
import privateStyle from './privateComponent.less';
import DesignerLeft from './DesignerLeft';
import DesignerRight from './DesignerRight';
import DesignerStage from './DesignerStage';

export default class ContainerBottom extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['botContainer']}>
                <DesignerLeft></DesignerLeft>
                <DesignerStage></DesignerStage>
                <DesignerRight></DesignerRight>
            </div>
        )
    }
}