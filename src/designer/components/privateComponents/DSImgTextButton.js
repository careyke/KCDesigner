/**
 * 设计器图文按钮
 * 数据处理层
 */

import React from 'react';
import ImgTextButton from './base/ImgTextButton';

export default class DSImgTextButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data=this.props.constantData;
        return (
            <ImgTextButton text={data.text} icon={data.icon}></ImgTextButton>
        )
    }
}