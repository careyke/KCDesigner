/**
 * 设计器左边
 */


import React from 'react';
import privateStyle from './privateComponent.less';
import { Tab, TabTitle, TabPanelContainer, TabPanel } from './base/DesignerTabs';

const titleData=['组件','结构'];

export default class DesignerLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={privateStyle['botLeft']}>
                <Tab>
                    <TabTitle type={'title'} titleData={titleData}></TabTitle>
                    <TabPanelContainer type={'panel'}>
                        <TabPanel>
                            <div>{'组件'}</div>
                        </TabPanel>
                        <TabPanel>
                            <div>{'结构'}</div>
                        </TabPanel>
                    </TabPanelContainer>
                </Tab>
            </div>
        )
    }
}