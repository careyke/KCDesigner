/**
 * 设计器中的上图下文按钮
 * 只负责ui，不负责数据交互
 */

import React from 'react';
import classnames from 'classnames';
import imgTextBtnStyle from './ImgTextButton.less';

export default class ImgTextButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { icon, text } = this.props;
        let iconClass=classnames({
            'kc-iconfont':true,
            [[icon]]:true,
            [imgTextBtnStyle['icon']]:true
        })
        return (
            <div title={text} className={imgTextBtnStyle['btnContainer']}>
                <span className={imgTextBtnStyle['iconCon']}>
                    <span className={iconClass} ></span>
                </span>
                <span className={imgTextBtnStyle['text']}>{text}</span>
            </div>
        )
    }
}