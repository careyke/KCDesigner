/**
 * 设计器state模型
 */

import * as icon from './constant/iconClassConstant';
import {fromJS} from 'immutable';

let controls=[
    {
        title:'基础控件',
        items:[
            {text:'按钮',type:'button'},
            {text:'标签',type:'label'}
        ]
    },
    {
        title:'表单控件',
        items:[
            {text:'单行文本',type:'text'},
            {text:'多行文本',type:'multext'}
        ]
    },
    {
        title:'容器控件',
        items:[
            {text:'弹性容器',type:'flexcontainer'}
        ]
    }
]

//defaultState的第一层不能转化成immutable，在combineReducer中获取不到
let state={
    controls:fromJS(controls)
}
export default state;