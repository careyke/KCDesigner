/**
 * 设计器上方
 */

import React from 'react';
import privateStyle from './privateComponent.less';
import * as icon from '../../constant/iconClassConstant';
import DSImgTextButton from './DSImgTextButton';

const designerControlOperation = [
    { text: '撤销', icon: icon.revokeIcon, actionType: 'revoke' },
    { text: '上移', icon: icon.toTopIcon, actionType: 'toTop' },
    { text: '下移', icon: icon.toBottomIcon, actionType: 'toBottom' },
    { text: '清除格式', icon: icon.clearFormatIcon, actionType: 'clearFormat' },
    { text: '删除', icon: icon.trashIcon, actionType: 'delete' }
]

const designerStageOperation = [
    { text: '保存', icon: icon.saveIcon, actionType: 'save' },
    { text: '预览', icon: icon.previewIcon, actionType: 'preview' }
]

export default class ContainerTop extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItems(data) {
        let items = data.map((item, index) => {
            return (
                <DSImgTextButton key={index} constantData={item} ></DSImgTextButton>
            )
        })
        return items;
    }

    render() {
        let centerItems = this.renderItems(designerControlOperation);
        let rightItems = this.renderItems(designerStageOperation);
        return (
            <div className={privateStyle['topContainer']}>
                <div className={privateStyle['containerLeft']}></div>
                <div className={privateStyle['containerCenter']}>
                    {centerItems}
                </div>
                <div className={privateStyle['containerRight']}>
                    {rightItems}
                </div>
            </div>
        )
    }
}