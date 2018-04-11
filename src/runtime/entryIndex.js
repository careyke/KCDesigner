/**
 * 运行时的入口文件
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import allReducer from './reducers/testReducer';
import RuntimeContainer from './RuntimeContainer';

class Runtime extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.store = createStore(allReducer);
        window.RStore = this.store;
    }

    render(){
        return (
            <Provider store={this.store}>
                <RuntimeContainer />
            </Provider>
        )
    }
}

export default Runtime;
