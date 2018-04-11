/**
 * 设计器容器
 */

import React from 'react';
import {connect} from 'react-redux';

class DesignerContainer extends React.Component{
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

export default connect(mapStateToProps)(DesignerContainer);