/**
 * 运行时的容器
 */

import React from 'react';
import {connect} from 'react-redux';

class RuntimeContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div></div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(RuntimeContainer);