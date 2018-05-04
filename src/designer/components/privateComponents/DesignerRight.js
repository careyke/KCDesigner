/**
 * 设计器右边
 */


import React from 'react';
import privateStyle from './privateComponent.less';
import { Tab, TabTitle, TabPanelContainer, TabPanel } from './base/DesignerTabs';

const titleData=['业务','样式'];

export default class DesignerRight extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={privateStyle['botRight']}>
                <Tab>
                    <TabTitle type={'title'} titleData={titleData}></TabTitle>
                    <TabPanelContainer type={'panel'}>
                        <TabPanel>
                            <div>{'业务'}</div>
                        </TabPanel>
                        <TabPanel>
                            <div>{'样式'}</div>
                        </TabPanel>
                    </TabPanelContainer>
                </Tab>
            </div>
        )
    }
}