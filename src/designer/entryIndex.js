/**
 * 设计器的入口文件
 */
import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import allReducer from './reducers/testReducer';
import DesignerContainer from './DesignerContainer';

class Designer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.store = createStore(allReducer);
        window.DStore=this.store; //调试用的，最后会删除
    }

    render() {
        return (
            <Provider store={this.store}>
                <DesignerContainer />
            </Provider>
        )
    }
}

export default Designer;