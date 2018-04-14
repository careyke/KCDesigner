/**
 * 页面设计区域
 */


import React from 'react';
import privateStyle from './privateComponent.less';

export default class DesignerStage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['designerStage']}>
                
            </div>
        )
    }
}