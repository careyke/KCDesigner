/**
 * 单行文本基本组件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './InputField.less';

export default class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value || ''
        }
    }

    render(){
        let {text} = this.props;
        return (
            <div className={styles['root']}>
                <div className={styles['text']}>{text}</div>
                <div className={styles['valueContainer']}>
                    <input className={styles['input']} />
                </div>
            </div>
        )
    }
}